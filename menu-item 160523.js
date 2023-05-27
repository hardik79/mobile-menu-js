var fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
document.head.appendChild(fontAwesomeLink);

// Array of menu items and corresponding Font Awesome icons
var menuItems = [
  { text: "Home", iconClass: "fa-home", bgColor: "#ff0000", class: "homeItem" },
  // {
  //   text: "About",
  //   iconClass: "fa-info-circle",
  //   bgColor: "#00ff00",
  //   class: "aboutItem",
  // },
  // {
  //   text: "Services",
  //   iconClass: "fa-cogs",
  //   bgColor: "#0000ff",
  //   class: "serviceItem",
  // },
  // {
  //   text: "Contact",
  //   iconClass: "fa-envelope",
  //   bgColor: "#ff00ff",
  //   class: "contentItem",
  // },
  // {
  //   text: "Help",
  //   iconClass: "fa-question-circle",
  //   bgColor: "#ffff00",
  //   class: "helpItem",
  // },
];

// Create the navigation menu element
var navMenu = document.createElement("div");
navMenu.classList.add("row");

navMenu.id = "bottom-nav";
navMenu.style.position = "fixed";
navMenu.style.bottom = "0";
navMenu.style.left = "0";
navMenu.style.width = "100%";
navMenu.style.backgroundColor = "#fff";
navMenu.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
navMenu.style.zIndex = "100";
navMenu.style.display = "none";
navMenu.style.backgroundColor = "rgb(206 196 196)"; // Set background color for navigation menu

// Add the menu items as an unordered list
var navList = document.createElement("div");
navList.style.display = "flex";
navList.style.justifyContent = "space-between";
navList.style.listStyle = "none";
navList.style.padding = "0";

for (var i = 0; i < menuItems.length; i++) {
  var menuItem = document.createElement("div");
navMenu.classList.add("col-md-12");

  var menuLink = document.createElement("a");
  menuLink.href = "#";
  menuLink.style.display = "flex"; // Use flexbox to center icon and text vertically
  menuLink.style.flexDirection = "column";
  menuLink.style.alignItems = "center";
  menuLink.innerHTML =
    '<i class="fas ' + menuItems[i].iconClass + '"></i>' + menuItems[i].text;
  menuItem.classList.add(menuItems[i].class);

  menuItem.style.borderRadius = "5px";
  menuItem.style.padding = "5px";
  menuItem.appendChild(menuLink);
  navList.appendChild(menuItem);
}

navMenu.appendChild(navList);

// Append the menu to the body of the page
document.body.appendChild(navMenu);

// Create a media query to detect if the screen width is less than or equal to 600px
var mediaQuery = window.matchMedia("(max-width: 600px)");

// Function to show or hide the menu based on the screen width
function handleNavMenu() {
  if (mediaQuery.matches) {
    navMenu.style.display = "block";
  } else {
    navMenu.style.display = "none";
  }
}

// Call the function on page load and on window resize
window.addEventListener("load", handleNavMenu);
window.addEventListener("resize", handleNavMenu);
