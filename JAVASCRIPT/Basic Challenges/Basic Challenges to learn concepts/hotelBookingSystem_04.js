// hotelBookingSystem.js
//1. Multi-Branch Hotel Reservation System (Deep Nested Search + Multiple Condition Filters)
const prompt = require("prompt-sync")();

// ---------- HOTEL DATA ----------

let hotels = [
  {
    name: "Ocean View Resort",
    floors: [
      {
        floorNumber: 1,
        rooms: [
          {
            number: 101,
            type: "single",
            price: 1500,
            available: true,
            minStay: 1,
            seaView: false,
          },
          {
            number: 102,
            type: "double",
            price: 2500,
            available: true,
            minStay: 2,
            seaView: true,
          },
        ],
      },
      {
        floorNumber: 2,
        rooms: [
          {
            number: 201,
            type: "suite",
            price: 4000,
            available: false,
            minStay: 3,
            seaView: true,
          },
          {
            number: 202,
            type: "double",
            price: 2600,
            available: true,
            minStay: 2,
            seaView: false,
          },
        ],
      },
    ],
  },
  {
    name: "City Lights Hotel",
    floors: [
      {
        floorNumber: 1,
        rooms: [
          {
            number: 101,
            type: "single",
            price: 1200,
            available: true,
            minStay: 1,
            seaView: false,
          },
          {
            number: 102,
            type: "double",
            price: 2000,
            available: false,
            minStay: 2,
            seaView: false,
          },
        ],
      },
      {
        floorNumber: 2,
        rooms: [
          {
            number: 201,
            type: "suite",
            price: 3500,
            available: true,
            minStay: 2,
            seaView: false,
          },
          {
            number: 202,
            type: "double",
            price: 2100,
            available: true,
            minStay: 2,
            seaView: false,
          },
        ],
      },
    ],
  },
];

// ---------- FUNCTIONS ----------

// 1️⃣ Show hotel options
function showHotels() {
  console.log("🏨 Available Hotels:");
  hotels.forEach((hotel, index) => {
    console.log(`${index + 1}. ${hotel.name}`);
  });
}

// 2️⃣ Select hotel
function selectHotel() {
  let choice = parseInt(prompt("Select a hotel (enter number): "));
  if (choice >= 1 && choice <= hotels.length) {
    return hotels[choice - 1];
  }
  console.log("❌ Invalid hotel selection.");
  return null;
}

// 3️⃣ Get booking preferences
function getBookingPreferences() {
  let type = prompt("Enter room type (single/double/suite): ")
    .toLowerCase()
    .trim();
  let nights = parseInt(prompt("Enter number of nights: "));
  let seaView =
    prompt("Do you want sea view? (yes/no): ").toLowerCase() === "yes";

  return { type, nights, seaView };
}

// 4️⃣ Safe function to get all rooms of a hotel
function getAllRoomsSafe(hotel) {
  if (!hotel || !Array.isArray(hotel.floors)) return [];
  return hotel.floors.flatMap((floor) =>
    Array.isArray(floor.rooms) ? floor.rooms : []
  );
}

// 5️⃣ Find a matching room
function findRoom(hotel, preferences) {
  let rooms = getAllRoomsSafe(hotel);
  return (
    rooms.find(
      (room) =>
        room.type.toLowerCase() === preferences.type &&
        room.seaView === preferences.seaView &&
        room.minStay <= preferences.nights &&
        room.available
    ) || null
  );
}

// 6️⃣ Book the room
function bookRoom(room, hotel, preferences) {
  room.available = false;
  let totalPrice = room.price * preferences.nights;
  console.log("✅ Booking Confirmed!");
  console.log(`Hotel: ${hotel.name}`);
  console.log(`Room: ${room.number} | Type: ${room.type}`);
  console.log(`Price per Night: ${room.price} | Total: ${totalPrice}`);
}

// 7️⃣ Explain why no room was booked
function explainNoRoom(hotel, preferences) {
  let rooms = getAllRoomsSafe(hotel);

  // Check if room type exists
  let typeExists = rooms.some(
    (room) => room.type.toLowerCase() === preferences.type
  );
  if (!typeExists) {
    console.log("❌ No rooms of the selected type available in this hotel.");
    return;
  }

  // Check availability
  let availableRooms = rooms.filter(
    (room) => room.type.toLowerCase() === preferences.type
  );
  let match = availableRooms.find(
    (room) =>
      room.seaView === preferences.seaView &&
      room.minStay <= preferences.nights &&
      room.available
  );

  if (!match) {
    console.log("❌ No rooms match your preferences exactly.");
    console.log("Details of possible issues:");
    availableRooms.forEach((room) => {
      let issues = [];
      if (room.available === false) issues.push("Room is already booked");
      if (room.seaView !== preferences.seaView)
        issues.push("Sea view preference not matched");
      if (room.minStay > preferences.nights)
        issues.push(`Minimum stay is +${room.minStay} nights`);
      console.log(`Room ${room.number}: ${issues.join(", ")}`);
    });
  }
}

// ---------- MAIN PROGRAM ----------
console.log("🏨 Welcome to the Hotel Reservation System!");

showHotels();

let selectedHotel = selectHotel();
if (!selectedHotel) process.exit();

let preferences = getBookingPreferences();

let room = findRoom(selectedHotel, preferences);

if (room) {
  bookRoom(room, selectedHotel, preferences);
} else {
  explainNoRoom(selectedHotel, preferences);
}
