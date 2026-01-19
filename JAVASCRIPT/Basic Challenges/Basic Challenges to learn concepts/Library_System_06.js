// libarary system

const readline = require("readline");

//------------------utilities-----------------------------

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (q) =>
  new Promise((resolve) => rl.question(q, (ans) => resolve(ans.trim())));

/*
.toISOString() - Converts the Date object into a standardized ISO 8601 string (always in UTC).
*/
const todayISO = () => new Date().toISOString().slice(0, 10);

// check the date is valid according to ISO date format("2025-08-16") and is it valid date
const parseISO = (iso) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) {
    return null;
  }
  return d;
};

// getting the difference of days from date object by substracting date object
const diffDays = (startISO, endISO) => {
  const a = parseISO(startISO);
  const b = parseISO(endISO);
  // milli second in a day
  const msPerDay = 24 * 60 * 60 * 1000;
  // it returns you millisecond of days difference ("2025-08-16")-("2025-08-10")) => returns the difference of days in millisecond (diff is 6 days in milliseoncd)
  return Math.floor((b - a) / msPerDay);
};

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

// ---------------libarary data--------------
const libarary = {
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
      category: "History",
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
  reservations: {},
  revenueFromFines: 0,
};

// policies

const memberPolicies = {
  student: { maxBooks: 3, days: 7, lateFeePerDay: 10, maxRenewals: 2 },
  teacher: { maxBooks: 5, days: 14, lateFeePerDay: 5, maxRenewals: 3 },
  guest: { maxBooks: 1, days: 3, lateFeePerDay: 20, maxRenewals: 0 },
};

const getPolicy = (memberType) => memberPolicies[memberType];

//------------------------ helper functions-----------------------------------------

// find member

const findMember = (id) => {
  return libarary.members.find((m) => m.id === Number(id));
};
// find book

const findBook = (id) => {
  return libarary.books.find((b) => b.id === Number(id));
};

// borrowed books by member

const totalBorrowedCount = (member) => member.borrowedBooks.length;

//👉 isBookReservedByOthers(bookId, memberId) checks if the book has an active reservation AND the current member is not the first in line.

const isBookReserevedByOthers = (bookId, memberId) => {
  const q = libarary.reservations[bookId] || [];
  return q.length > 0 && q[0] !== memberId;
};

const enqueReservation = (bookId, memberId) => {
  if (!libarary.reservations[bookId]) {
    libarary.reservations[bookId] = [];
  }
  const q = libarary.reservations[bookId];

  if (!q.includes(memberId)) {
    q.push(memberId);
  }
};

/*
⚡ Conclusion

👉 enqueReservation(bookId, memberId) ensures that:

Each book has its own reservation queue.

A member is added only once.

Members are added in order of reservation (queue behavior).
*/

const dequeueIfMatches = (bookId, memberId) => {
  const q = libarary.reservations[bookId];
  if (!q || q.length === 0) return false;
  if (q[0] === memberId) {
    q.shift();
    if (q.length === 0) delete libarary.reservations[bookId];
    return true;
  }
  return false;
};

/*
ChatGPT said:

The conclusion is:

The reservation queue ensures fairness — it works like a real-life waiting line.

When someone reserves a book, their ID goes into the queue.

The first person in the queue gets priority to borrow.

Once they successfully borrow, they must be removed from the queue (using shift()), so the next waiting person gets their turn.

If the queue becomes empty, it’s deleted (no one is waiting anymore).

👉 In short: Remove the first person after they borrow, so others in line get their chance.
*/

const hasActiveReservation = (bookId) => {
  const q = libarary.reservations[bookId];
  return q && q.length > 0;
};

/*
👉 Conclusion:
This function simply answers:
“Is this book currently reserved by anyone?”
*/

// -----------------------core-function--------------------

// search book

function searchBook(keyword = "", category = "") {
  const key = keyword.toLowerCase();
  const cat = category.toLowerCase();
  const results = libarary.books.filter((b) => {
    const matchKey =
      !key ||
      b.title.toLowerCase().includes(key) ||
      b.author.toLowerCase().includes(key);
    const matchCat = !cat || b.category.toLowerCase() === cat;
    return matchKey && matchCat;
  });
  return results;
}
// borrow book

function borrowBook(memberId, bookId, borrowDate) {
  const member = findMember(memberId);
  const book = findBook(bookId);

  if (!member) return { ok: false, msg: "Member not found" };
  if (!book) return { ok: false, msg: "Book not found" };

  const policy = getPolicy(member.type);
  if (!policy) return { ok: false, msg: "Policy not found for member type" };

  if (isBookReserevedByOthers(book.id, member.id)) {
    return {
      ok: false,
      msg: "This book is reserved by someone ahead of you in the queue. You cannot borrow it now.",
    };
  }
  if (totalBorrowedCount(member) >= policy.maxBooks) {
    return {
      ok: false,
      msg: `Borrow limit is reached (${policy.maxBooks}).Return a book first`,
    };
  }
  // If copies are zero but the member is first in reservation queue, allow borrow

  if (book.copies <= 0) {
    const q = libarary.reservations[book.id] || [];
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
}

// show member status

// ---------------------- UI rendering------------------

function renderBooks(list) {
  if (!Array.isArray(list) || list.length === 0) {
    console.log("no book found.");
    return;
  }
  console.log(
    `${String("ID").padEnd(4)} | ${String("TITLE").padEnd(30)} | ${String(
      "AUTHOR"
    ).padEnd(20)} | ${String("CATEGORY").padEnd(10)} | ${String(
      "COPIES"
    ).padEnd(10)}`
  );
  console.log(
    `---------------------------------------------------------------------------------------`
  );

  list.forEach((book) => {
    console.log(
      `${String(book.id).padEnd(4)} | ${String(book.title).padEnd(
        30
      )} | ${String(book.author).padEnd(20)} | ${String(book.category).padEnd(
        10
      )} | ${String(book.copies).padEnd(10)} `
    );
  });
}

// -----------------Main function -------------
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

    const choice = await ask("choose an option(1-9): ");

    switch (Number(choice)) {
      case 1:
        renderBooks(libarary.books);
        break;
      case 2:
        const keyword = await ask("Keyword (title/author,enter to skip) : ");
        const category = await ask("Category (enter to skip) : ");
        const results = searchBook(keyword, category);
        renderBooks(results);
        break;
      case 3:
        const memberId = await ask("Member ID: ");
        const bookId = await ask("Book ID: ");
        const date = await ask(
          `Borrow date (YYYY-MM-DD,default ${todayISO()})`
        );
        const borrowDate = date || todayISO();
        const res = borrowBook(memberId, bookId, borrowDate);
        renderBooks(res);
        break;
    }
  }
}
main();
