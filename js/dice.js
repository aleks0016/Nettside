/** Display of date and time */

const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 24 || 24;
  const minutes = date.getMinutes();


  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
  ];
  const MONTHS = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];

  return `${DAYS[date.getDay()]} 
  ${date.getDate()} 
  ${MONTHS[date.getMonth()]} 
  ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);


/* DICE GAME */
window.rollerblade = () => {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage = "dice" + randomNumber1 + ".png";

    var randomImageSource = "../images/" + randomDiceImage;

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);


    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = "../images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


    //If player 1 wins
    if (randomNumber1 > randomNumber2) {
        document.querySelector("#title-dice-game").innerHTML = "🚩 Spiller 1 vinner!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("#title-dice-game").innerHTML = "Spiller 2 vinner! 🚩";
    }
    else {
        document.querySelector("#title-dice-game").innerHTML = "Uavgjort!";
    }
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}