//NAV

const navList = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", function () {
  navList.classList.toggle("show");
  console.log("clicked");
});

// //date
// const spanDate = document.querySelector(".date");
//  let currentYear = new Date().getFullYear();
// spanDate.innerHTML = currentYear;

// let navList = document.querySelector(".menu-icon");
// navList.addEventListener('click', (element) =>{
//   element.


