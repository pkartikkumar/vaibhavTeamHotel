//                   Standard rooms
// Initialize bookings array
let bookings = [];

// Retrieve existing bookings from local storage if available
if (localStorage.getItem("bookings")) {
  bookings = JSON.parse(localStorage.getItem("bookings"));
  displayBookings();
}

// Function to store booking data in local storage
function storeBooking() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
  
    const booking = {
      name: name,
      email: email,
      phone: phone,
      checkIn: checkIn,
      checkOut: checkOut
    };
  
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    displayBookings();
  }

  

// Function to display bookings in table
function displayBookings() {
  const bookingTable = document.getElementById("booking-info");
  bookingTable.innerHTML = "";

  for (let i = 0; i < bookings.length; i++) {
    const booking = bookings[i];

    const row = bookingTable.insertRow(-1);
    const nameCell = row.insertCell(0);
    const emailCell = row.insertCell(1);
    const phoneCell = row.insertCell(2);
    const checkInCell = row.insertCell(3);
    const checkOutCell = row.insertCell(4);

    nameCell.innerHTML = booking.name;
    emailCell.innerHTML = booking.email;
    phoneCell.innerHTML = booking.phone;
    checkInCell.innerHTML = booking.checkIn;
    checkOutCell.innerHTML = booking.checkOut;
  }
}

function storeBooking() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const checkIn = document.getElementById("check-in").value;
  const checkOut = document.getElementById("check-out").value;

  // Check if any of the input values are empty
  if (name === "" || email === "" || phone === "" || checkIn === "" || checkOut === "") {
    alert("Please fill in all the fields.");
    return;
  }

  const booking = {
    name: name,
    email: email,
    phone: phone,
    checkIn: checkIn,
    checkOut: checkOut
  };

  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  displayBookings();
}




