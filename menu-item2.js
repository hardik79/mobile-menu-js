var fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
document.head.appendChild(fontAwesomeLink);

// Create a navbar element

var nav = document.createElement("div");
nav.id = "bottom-nav";
nav.style.position = "fixed";
nav.style.bottom = "0";
nav.style.left = "0";
nav.style.width = "100%";
nav.style.backgroundColor = "#fff";
nav.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
nav.style.zIndex = "100";
nav.style.display = "none";
nav.style.backgroundColor = "rgb(206 196 196)"; // Set background color for navigation menu
// Add styles to the navbar element
nav.style.backgroundColor = "#333";
nav.style.height = "50px";

// Create an unordered list for the navbar items
var navList = document.createElement("ul");
navList.style.display = "flex";
navList.style.justifyContent = "space-between";
navList.style.listStyle = "none";
navList.style.padding = "0";

// Create an array of navbar items
const navbarItems = [
  { text: "Home", iconClass: "fa-home", bgColor: "#ff0000", class: "homeItem" },
  {
    text: "About",
    iconClass: "fa-info-circle",
    bgColor: "#00ff00",
    class: "aboutItem",
  },
  {
    text: "Services",
    iconClass: "fa-cogs",
    bgColor: "#0000ff",
    class: "serviceItem",
  },
  {
    text: "Contact",
    iconClass: "fa-envelope",
    bgColor: "#ff00ff",
    class: "contentItem",
  },
  {
    text: "Help",
    iconClass: "fa-question-circle",
    bgColor: "#ffff00",
    class: "helpItem",
  },
];

// Loop through the array and create a list item for each item
navbarItems.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  // a.textContent = item.text;
  a.style.display = "block";
  a.style.color = "white";
  a.style.textAlign = "center";
  a.innerHTML = '<i class="fas ' + item.iconClass + '"></i>' + item.text;
  // a.style.padding = "16px";
  // a.style.textDecoration = "none";
  a.style.borderRadius = "5px";
  a.style.padding = "5px";
  li.appendChild(a);
  navList.appendChild(li);
});

// Append the unordered list to the navbar element
nav.appendChild(navList);

// Append the navbar element to the body
document.body.appendChild(nav);

// Create a media query to detect if the screen width is less than or equal to 600px
var mediaQuery = window.matchMedia("(max-width: 600px)");

// Function to show or hide the menu based on the screen width
function handleNavMenu() {
  if (mediaQuery.matches) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

// Call the function on page load and on window resize
window.addEventListener("load", handleNavMenu);
window.addEventListener("resize", handleNavMenu);
