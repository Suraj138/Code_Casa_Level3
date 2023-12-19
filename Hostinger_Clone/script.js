// modal
function modal() {
  document.getElementById("modal").style.display = "block";
}

// pop up modal click outside
window.onclick = function () {
  document.getElementById("modal").style.display = "none";
};

// navbar scrolling
window.addEventListener("scroll", () => {
  let scroll = document.querySelector(".nav-bar");
  scroll.classList.toggle("sticky", window.scrollY > 50);
  let login = document.getElementById("login");
  login.classList.toggle("login", window.scrollY > 50);
});

// hamburger menu on mobile view
let hamburger = document.getElementById("hamburger");
let navmenu = document.querySelector(".nav-menu");
let times = document.getElementById("times");

hamburger.addEventListener("click", () => {
  navmenu.classList.toggle("navbar");
  navmenu.classList.remove();
  console.log(navmenu);

  if (hamburger) {
    for (let i = 0; i < hamburger.clientHeight; i++) {
      hamburger.style.display = "none";
      times.style.display = "block";
    }
  }
});

times.addEventListener("click", function () {
  hamburger.style.display = "block";
  times.style.display = "none";
  console.log("Hello");
});

// module 8 js code here

document.addEventListener("DOMContentLoaded", function () {
  const domainList = document.querySelector(".domain-list");
  const viewMoreButton = document.getElementById("view-more-button");
  const viewLessButton = document.getElementById("view-less-button");

  const domainLinks = domainList.querySelectorAll("a");
  const totalDomains = domainLinks.length;
  const domainsToShow = 12; // Adjust this number as needed

  for (let i = domainsToShow; i < totalDomains; i++) {
    domainLinks[i].style.display = "none";
  }

  viewMoreButton.addEventListener("click", function () {
    for (let i = domainsToShow; i < totalDomains; i++) {
      domainLinks[i].style.display = "block";
    }
    viewMoreButton.style.display = "none";
    viewLessButton.style.display = "inline-block";
  });

  viewLessButton.addEventListener("click", function () {
    for (let i = domainsToShow; i < totalDomains; i++) {
      domainLinks[i].style.display = "none";
    }
    viewMoreButton.style.display = "inline-block";
    viewLessButton.style.display = "none";
  });
});



// Domain FAQs js

document.addEventListener("DOMContentLoaded", function () {
  const questionBoxes = document.querySelectorAll(".question-box");

  questionBoxes.forEach(function (box) {
      box.addEventListener("click", function () {
          const answer = this.nextElementSibling;
          this.classList.toggle("open");
          answer.style.display = answer.style.display === "block" ? "none" : "block";
      });
  });
});




