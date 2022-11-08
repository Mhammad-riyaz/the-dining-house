function changeNavBar() {
  let scrollValue = window.scrollY;
  let nav = document.getElementById("nav");
  let labels = document.getElementsByClassName("labels");
  console.log(scrollValue);
  if (scrollValue >= 1700) {
    nav.classList.add("nav-alt");
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.add("labels-alt");
    }
  } else {
    nav.classList.remove("nav-alt");
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.remove("labels-alt");
    }
  }
}

let reserveBtn = document.getElementById("reservation");
reserveBtn.addEventListener("click", function () {
  window.scrollTo(0, 1300);
});
window.addEventListener("scroll", changeNavBar);

let foodMenuBtn = document.getElementById("food-menu");
foodMenuBtn.addEventListener("click", function () {
  window.scrollTo(0, 2050);
});

let drinkMenuBtn = document.getElementById("drink-menu");
drinkMenuBtn.addEventListener("click", function () {
  window.scrollTo(0, 4131);
});

let contactBtn = document.getElementById("contact");
contactBtn.addEventListener("click", function () {
  window.scrollTo(0, 5100);
});

// -- slide show-1
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// --slide show -2
let slideIndex2 = 0;
showSlides2();
function showSlides2() {
  let i;
  let slides2 = document.getElementsByClassName("slide2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  slides2[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 3000);
}

// --slide show -3
let slideIndex3 = 0;
showSlides3();
function showSlides3() {
  let i;
  let slides3 = document.getElementsByClassName("slide3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {
    slideIndex3 = 1;
  }
  slides3[slideIndex3 - 1].style.display = "block";
  setTimeout(showSlides3, 3000);
}
