"use strict";

// Scroll Arrow
document.addEventListener("DOMContentLoaded", function () {
  const scrollArrow = document.getElementById("scrollArrow");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollArrow.style.display = "block";
    } else {
      scrollArrow.style.display = "none";
    }
  });

  scrollArrow.addEventListener("click", function () {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});

// add event listener on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// navbar
const section = document.querySelectorAll("section");
const menu = document.querySelectorAll("nav ul li a");

// animate the navbar when the section is scrolled into view
window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    // makes the links active as you scroll down the page
    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Scroll reveal
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    }
  }
};

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay =
    revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// typewriter animation
document.addEventListener("DOMContentLoaded", function (event) {
  const setText = [
    "Web Developer ",
    "UI/UX Designer ",
    "SEO Specialist ",
    "Programmer ",
    "Freelancer ",
    "Web Designer ",
    "AI Enthusiast ",
  ];

  function typeTextAnimation(text, i, callbackFunc) {
    if (i < text.length) {
      document.querySelector(".role").innerHTML =
        text.substring(0, i, 1) + "<span aria-hidden=true></span>";
      setTimeout(function () {
        typeTextAnimation(text, i + 1, callbackFunc);
      }, 100);
    } else if (typeof callbackFunc == "function") {
      setTimeout(callbackFunc, 700);
    }
  }

  function startTextAnimation(i) {
    if (typeof setText[i] == "undefined") {
      setTimeout(function () {
        startTextAnimation(0);
      }, 2000);
    }

    if (i < setText[i].length) {
      typeTextAnimation(setText[i], 0, function () {
        startTextAnimation(i + 1);
      });
    }
  }

  startTextAnimation(0);
});

// skill section
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// animates the skill bars
function animateSkillBars() {
  document.querySelectorAll(".progress-fill").forEach(function (bar) {
    if (isInViewport(bar)) {
      const skillLevel = bar.getAttribute("data-skill-level");
      bar.style.width = skillLevel;
    }
  });
}

window.addEventListener("scroll", animateSkillBars);

window.addEventListener("load", animateSkillBars);

// contact form email js
const btn = document.getElementById("button");

function sendMail() {
  var params = {
    from_name: document.getElementById("hire-name").value,
    email_id: document.getElementById("hire-email").value,
    message: document.getElementById("hire-message").value,
  };
  emailjs.send("service_2vf4yad", "template_h1no3ni", params).then(
    function (response) {
      btn.value = "Send Message";
      alert("Success!", response);
    },
    function (err) {
      btn.value = "Send Message";
      alert("Failed", err);
    },
  );
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";
});

// Footer
const year = document.querySelector("#current-year");
year.innerHTML = new Date().getFullYear();
