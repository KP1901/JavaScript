// library.js
// Smart Library Management System (no external packages)
// Run: node library.js

const readline = require("readline");

// ---------- Utilities ----------
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (q) =>
  new Promise((resolve) => rl.question(q, (ans) => resolve(ans.trim())));

const todayISO = () => new Date().toISOString().slice(0, 10); // YYYY-MM-DD

const parseISO = (iso) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d;
};

const addDaysISO = (iso, n) => {
  const d = parseISO(iso);
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};

const diffDays = (startISO, endISO) => {
  const a = parseISO(startISO);
  const b = parseISO(endISO);
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.floor((b - a) / msPerDay);
};

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

// ---------- Library Data ----------
const library = {
  books: [
    {
      id: 101,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "science",
      copies: 3,
    },
    {
      id: 102,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "history",
      copies: 1,
    },
    {
      id: 103,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "fiction",
      copies: 2,
    },
    {
      id: 104,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      category: "science",
      copies: 0,
    },
    {
      id: 105,
      title: "Atomic Habits",
      author: "James Clear",
      category: "self-help",
      copies: 4,
    },
  ],
  members: [
    { id: 1, name: "Aman", type: "student", borrowedBooks: [], finesDue: 0 },
    { id: 2, name: "Neha", type: "teacher", borrowedBooks: [], finesDue: 0 },
    { id: 3, name: "Ravi", type: "guest", borrowedBooks: [], finesDue: 0 },
  ],
  // reservations: key = bookId, value = queue of memberIds
  reservations: {},
  revenueFromFines: 0,
};

// ---------- Policies ----------
const memberPolicies = {
  student: { maxBooks: 3, days: 7, lateFeePerDay: 10, maxRenewals: 2 },
  teacher: { maxBooks: 5, days: 14, lateFeePerDay: 5, maxRenewals: 3 },
  guest: { maxBooks: 1, days: 3, lateFeePerDay: 20, maxRenewals: 0 },
};

const getPolicy = (memberType) => memberPolicies[memberType];

// ---------- Helpers ----------
const findMember = (id) => library.members.find((m) => m.id === Number(id));
const findBook = (id) => library.books.find((b) => b.id === Number(id));

const totalBorrowedCount = (member) => member.borrowedBooks.length;

const isBookReservedByOthers = (bookId, memberId) => {
  const q = library.reservations[bookId] || [];
  return q.length > 0 && q[0] !== memberId; // someone else is first in queue
};

const enqueueReservation = (bookId, memberId) => {
  if (!library.reservations[bookId]) library.reservations[bookId] = [];
  const q = library.reservations[bookId];
  if (!q.includes(memberId)) q.push(memberId);
};

const dequeueIfMatches = (bookId, memberId) => {
  const q = library.reservations[bookId];
  if (!q || q.length === 0) return false;
  if (q[0] === memberId) {
    q.shift();
    if (q.length === 0) delete library.reservations[bookId];
    return true;
  }
  return false;
};

const hasActiveReservation = (bookId) => {
  const q = library.reservations[bookId];
  return q && q.length > 0;
};

// ---------- Core Functions ----------
function searchBooks(keyword = "", category = "") {
  const key = keyword.toLowerCase();
  const cat = category.toLowerCase();
  const results = library.books.filter((b) => {
    const matchKey =
      !key ||
      b.title.toLowerCase().includes(key) ||
      b.author.toLowerCase().includes(key);
    const matchCat = !cat || b.category.toLowerCase() === cat;
    return matchKey && matchCat;
  });
  return results;
}

function borrowBook(memberId, bookId, currentDateISO) {
  const member = findMember(memberId);
  const book = findBook(bookId);
  if (!member) return { ok: false, msg: "Member not found." };
  if (!book) return { ok: false, msg: "Book not found." };

  const policy = getPolicy(member.type);
  if (!policy) return { ok: false, msg: "Policy not found for member type." };

  if (isBookReservedByOthers(book.id, member.id)) {
    return {
      ok: false,
      msg: "This book is reserved by someone ahead of you in the queue. You cannot borrow it now.",
    };
  }

  if (totalBorrowedCount(member) >= policy.maxBooks) {
    return {
      ok: false,
      msg: `Borrow limit reached (${policy.maxBooks}). Return a book first.`,
    };
  }

  // If copies are zero but the member is first in reservation queue, allow borrow
  if (book.copies <= 0) {
    const q = library.reservations[book.id] || [];
    if (q.length === 0) {
      return {
        ok: false,
        msg: "No copies available. Consider reserving the book to hold your place.",
      };
    }
    if (q[0] !== member.id) {
      return {
        ok: false,
        msg: "No copies available and you're not first in the reservation queue.",
      };
    }
    // they are first in queue, allow borrow and pop
    dequeueIfMatches(book.id, member.id);
  }

  // Deduct one copy and record borrowing
  book.copies = Math.max(0, book.copies - 1);
  const dueDate = addDaysISO(currentDateISO, policy.days);
  member.borrowedBooks.push({
    bookId: book.id,
    title: book.title,
    borrowDate: currentDateISO,
    dueDate,
    renewals: 0,
  });

  return {
    ok: true,
    msg: `Borrowed "${book.title}". Due on ${dueDate}.`,
  };
}

function calculateFine(member, bookId, returnDateISO) {
  const policy = getPolicy(member.type);
  const entry = member.borrowedBooks.find((bb) => bb.bookId === Number(bookId));
  if (!entry) return 0;

  const daysLate = diffDays(entry.dueDate, returnDateISO);
  if (daysLate <= 0) return 0;

  return daysLate * policy.lateFeePerDay;
}

function returnBook(memberId, bookId, returnDateISO) {
  const member = findMember(memberId);
  const book = findBook(bookId);
  if (!member || !book) return { ok: false, msg: "Invalid member/book ID." };

  const idx = member.borrowedBooks.findIndex(
    (bb) => bb.bookId === Number(bookId)
  );
  if (idx === -1)
    return { ok: false, msg: "This member didn't borrow that book." };

  const fine = calculateFine(member, bookId, returnDateISO);
  if (fine > 0) {
    member.finesDue += fine;
    library.revenueFromFines += fine;
  }

  // Remove borrowed record
  member.borrowedBooks.splice(idx, 1);

  // Return copy to library
  book.copies += 1;

  // If there is a reservation queue, do not automatically lend — just notify
  let notify = "";
  if (hasActiveReservation(book.id)) {
    const nextMemberId = library.reservations[book.id][0];
    const nextMember = findMember(nextMemberId);
    notify = ` Note: "${book.title}" is reserved. Next in queue: ${nextMember?.name} (ID: ${nextMemberId}).`;
  }

  const fineMsg = fine > 0 ? ` Late fine: ₹${fine}.` : "";
  return { ok: true, msg: `Returned "${book.title}".${fineMsg}${notify}` };
}

function renewBook(memberId, bookId, currentDateISO) {
  const member = findMember(memberId);
  const book = findBook(bookId);
  if (!member || !book) return { ok: false, msg: "Invalid member/book ID." };

  const policy = getPolicy(member.type);
  const entry = member.borrowedBooks.find((bb) => bb.bookId === Number(bookId));
  if (!entry)
    return { ok: false, msg: "This book isn't borrowed by the member." };

  if (hasActiveReservation(book.id)) {
    return {
      ok: false,
      msg: "Cannot renew: book is reserved by another member.",
    };
  }

  if (entry.renewals >= policy.maxRenewals) {
    return {
      ok: false,
      msg: `Renewal limit reached (${policy.maxRenewals}).`,
    };
  }

  // Only allow renewal if not already overdue
  if (diffDays(entry.dueDate, currentDateISO) < 0) {
    return {
      ok: false,
      msg: "Cannot renew overdue books. Please return first.",
    };
  }

  entry.dueDate = addDaysISO(entry.dueDate, policy.days);
  entry.renewals += 1;

  return {
    ok: true,
    msg: `Renewed "${book.title}". New due date: ${entry.dueDate} (renewals: ${entry.renewals}/${policy.maxRenewals}).`,
  };
}

function reserveBook(memberId, bookId) {
  const member = findMember(memberId);
  const book = findBook(bookId);
  if (!member || !book) return { ok: false, msg: "Invalid member/book ID." };

  if (book.copies > 0) {
    return {
      ok: false,
      msg: "Copies available now — you can borrow directly.",
    };
  }

  enqueueReservation(book.id, member.id);
  const pos = library.reservations[book.id].indexOf(member.id) + 1;
  return {
    ok: true,
    msg: `Reserved "${book.title}". Your queue position: ${pos}.`,
  };
}

function showMemberStatus(memberId, asOfISO = todayISO()) {
  const member = findMember(memberId);
  if (!member) return { ok: false, msg: "Member not found." };

  const items = member.borrowedBooks.map((bb) => {
    const daysToDue = diffDays(asOfISO, bb.dueDate);
    const overdueDays = Math.max(0, -daysToDue);
    const estFine = overdueDays * getPolicy(member.type).lateFeePerDay;
    return {
      bookId: bb.bookId,
      title: bb.title,
      borrowDate: bb.borrowDate,
      dueDate: bb.dueDate,
      renewals: bb.renewals,
      overdueDays,
      estimatedFineIfReturnedToday: estFine,
    };
  });

  return {
    ok: true,
    data: {
      member: { id: member.id, name: member.name, type: member.type },
      borrowed: items,
      finesDue: member.finesDue,
    },
  };
}

// ---------- UI Rendering ----------
function renderBooks(list) {
  if (list.length === 0) {
    console.log("No books found.");
    return;
  }
  console.log(
    "\nID   | Title                          | Author                 | Category    | Copies"
  );
  console.log(
    "-----|--------------------------------|------------------------|-------------|-------"
  );
  for (const b of list) {
    console.log(
      `${String(b.id).padEnd(4)} | ${b.title.padEnd(30)} | ${b.author.padEnd(
        22
      )} | ${b.category.padEnd(11)} | ${String(b.copies).padEnd(5)}`
    );
  }
}

function renderMemberStatus(status) {
  const { member, borrowed, finesDue } = status.data;
  console.log(
    `\nMember: ${member.name} (ID: ${member.id}, Type: ${member.type})`
  );
  console.log(`Fines Due: ₹${finesDue}`);
  if (borrowed.length === 0) {
    console.log("No borrowed books.");
    return;
  }
  console.log("\nBorrowed Books:");
  console.log(
    "BookID | Title                          | Borrow    | Due       | Renewals | OverdueDays | EstFineToday"
  );
  console.log(
    "-------|--------------------------------|-----------|-----------|----------|-------------|-------------"
  );
  for (const i of borrowed) {
    console.log(
      `${String(i.bookId).padEnd(6)} | ${i.title.padEnd(30)} | ${
        i.borrowDate
      } | ${i.dueDate} | ${String(i.renewals).padEnd(8)} | ${String(
        i.overdueDays
      ).padEnd(11)} | ₹${i.estimatedFineIfReturnedToday}`
    );
  }
}

// ---------- Menu Loop ----------
async function main() {
  console.log("=== Smart Library Management System ===");
  console.log(`Today's Date: ${todayISO()}`);

  while (true) {
    console.log("\nMenu:");
    console.log("1) Show all books");
    console.log("2) Search books");
    console.log("3) Borrow book");
    console.log("4) Return book");
    console.log("5) Renew book");
    console.log("6) Reserve book");
    console.log("7) Show member status");
    console.log("8) Show total fine revenue");
    console.log("9) Exit");

    const choice = await ask("Choose an option (1-9): ");
    switch (choice) {
      case "1": {
        renderBooks(library.books);
        break;
      }
      case "2": {
        const keyword = await ask("Keyword (title/author, enter to skip): ");
        const category = await ask("Category (enter to skip): ");
        const results = searchBooks(keyword, category);
        renderBooks(results);
        break;
      }
      case "3": {
        const memberId = await ask("Member ID: ");
        const bookId = await ask("Book ID: ");
        const date = await ask(
          `Borrow date (YYYY-MM-DD, default ${todayISO()}): `
        );
        const borrowDate = date || todayISO();
        const res = borrowBook(memberId, bookId, borrowDate);
        console.log(res.msg);
        break;
      }
      case "4": {
        const memberId = await ask("Member ID: ");
        const bookId = await ask("Book ID: ");
        const date = await ask(
          `Return date (YYYY-MM-DD, default ${todayISO()}): `
        );
        const returnDate = date || todayISO();
        const res = returnBook(memberId, bookId, returnDate);
        console.log(res.msg);
        break;
      }
      case "5": {
        const memberId = await ask("Member ID: ");
        const bookId = await ask("Book ID: ");
        const date = await ask(
          `Renew date (YYYY-MM-DD, default ${todayISO()}): `
        );
        const currentDate = date || todayISO();
        const res = renewBook(memberId, bookId, currentDate);
        console.log(res.msg);
        break;
      }
      case "6": {
        const memberId = await ask("Member ID: ");
        const bookId = await ask("Book ID: ");
        const res = reserveBook(memberId, bookId);
        console.log(res.msg);
        break;
      }
      case "7": {
        const memberId = await ask("Member ID: ");
        const date = await ask(
          `As of date (YYYY-MM-DD, default ${todayISO()}): `
        );
        const asOf = date || todayISO();
        const status = showMemberStatus(memberId, asOf);
        if (!status.ok) console.log(status.msg);
        else renderMemberStatus(status);
        break;
      }
      case "8": {
        console.log(`Total revenue from fines: ₹${library.revenueFromFines}`);
        break;
      }
      case "9": {
        console.log("Goodbye!");
        rl.close();
        return;
      }
      default:
        console.log("Invalid option. Try again.");
    }
  }
}

main().catch((e) => {
  console.error("Unexpected error:", e);
  rl.close();
});
