// Example JSON data
const events = [
  { id: 1, name: "Tech Fest", date: "2025-09-20" },
  { id: 2, name: "Cultural Night", date: "2025-09-22" },
  { id: 3, name: "Sports Day", date: "2025-09-25" },
  { id: 4, name: "Hackathon", date: "2025-10-01" },
  { id: 5, name: "Freshers Party", date: "2025-10-05" },
  { id: 6, name: "Farewell", date: "2025-10-15" }
];

const students = [
  { id: 1, name: "Alice", course: "Computer Science" },
  { id: 2, name: "Bob", course: "Mechanical" },
  { id: 3, name: "Charlie", course: "Electrical" },
  { id: 4, name: "David", course: "Civil" },
  { id: 5, name: "Eva", course: "IT" },
  { id: 6, name: "Frank", course: "AI & Data Science" }
];

// Pagination setup
let eventsPage = 1;
let studentsPage = 1;
const itemsPerPage = 2;

// Render Events
function renderEvents() {
  const container = document.getElementById("events-container");
  container.innerHTML = "";

  const start = (eventsPage - 1) * itemsPerPage;
  const paginatedItems = events.slice(start, start + itemsPerPage);

  paginatedItems.forEach(event => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${event.name}</strong> <br> Date: ${event.date}`;
    container.appendChild(div);
  });

  document.getElementById("events-page-info").innerText =
    `Page ${eventsPage} of ${Math.ceil(events.length / itemsPerPage)}`;

  document.getElementById("prev-events").disabled = eventsPage === 1;
  document.getElementById("next-events").disabled =
    eventsPage === Math.ceil(events.length / itemsPerPage);
}

// Render Students
function renderStudents() {
  const container = document.getElementById("students-container");
  container.innerHTML = "";

  const start = (studentsPage - 1) * itemsPerPage;
  const paginatedItems = students.slice(start, start + itemsPerPage);

  paginatedItems.forEach(student => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${student.name}</strong> <br> Course: ${student.course}`;
    container.appendChild(div);
  });

  document.getElementById("students-page-info").innerText =
    `Page ${studentsPage} of ${Math.ceil(students.length / itemsPerPage)}`;

  document.getElementById("prev-students").disabled = studentsPage === 1;
  document.getElementById("next-students").disabled =
    studentsPage === Math.ceil(students.length / itemsPerPage);
}

// Event listeners
document.getElementById("prev-events").addEventListener("click", () => {
  if (eventsPage > 1) {
    eventsPage--;
    renderEvents();
  }
});

document.getElementById("next-events").addEventListener("click", () => {
  if (eventsPage < Math.ceil(events.length / itemsPerPage)) {
    eventsPage++;
    renderEvents();
  }
});

document.getElementById("prev-students").addEventListener("click", () => {
  if (studentsPage > 1) {
    studentsPage--;
    renderStudents();
  }
});

document.getElementById("next-students").addEventListener("click", () => {
  if (studentsPage < Math.ceil(students.length / itemsPerPage)) {
    studentsPage++;
    renderStudents();
  }
});

// Initial Render
renderEvents();
renderStudents();
