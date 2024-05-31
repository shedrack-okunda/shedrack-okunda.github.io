"use strict";

// Scroll Arrow
document.addEventListener("DOMContentLoaded", function () {
  const scrollArrow = document.getElementById("scrollArrow");
  let lastScrollTop = 0;

  // shows scroll arrow when user scrolls down
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollArrow.style.display = "block";
    } else {
      scrollArrow.style.display = "none";
    }
  });

  // scroll to top when clicked
  scrollArrow.addEventListener("click", function () {
    if (window.scrollY > 0) {
      window.scrollTo({top: 0, behavior: "smooth"});
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
    // length in pixels the viewport has been scrolled
    let top = window.scrollY;
    // length from the top of the viewport
    let offset = i.offsetTop - 150;
    // length of the section
    let height = i.offsetHeight;
    // returns the value of an element attribute
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

// welcome message
window.onload = function () {
  const welcomeMessage = document.getElementById("welcome-message");

  // show the welcome message after 2 seconds
  setTimeout(function () {
    welcomeMessage.classList.add("show");
  }, 2000);

  // hide the welcome message after 6 seconds (2 seconds for initial delay + 4 seconds display time)
  setTimeout(function () {
    welcomeMessage.classList.add("hide");
  }, 6000);

  // remove the message after the fade-out animation is complete
  setTimeout(function () {
    welcomeMessage.style.display = "none";
  }, 7000);
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
  // Array of texts to be animated/typewrite
  const setText = [
    "Web Developer..",
    "UI/UX Designer..",
    "SEO Specialist..",
    "Programmer..",
    "Freelancer..",
    "Web Designer..",
  ];

  //   types one text in the typewriter animation and calls itself until the text is finished
  function typeTextAnimation(text, i, callbackFunc) {
    // checks to see if the text is not finished to be typed
    if (i < text.length) {
      // adds the next character to the animation
      document.querySelector(".role").innerHTML =
        text.substring(0, i, 1) + "<span aria-hidden=true></span>";
      // calls this function for the next character after a while
      setTimeout(function () {
        typeTextAnimation(text, i + 1, callbackFunc);
      }, 100);
    }

    // if the text is finished it calls the callback function if it is there
    else if (typeof callbackFunc == "function") {
      // calls it after the timeout
      setTimeout(callbackFunc, 700);
    }
  }

  //   start the animation for the text in the setText array
  function startTextAnimation(i) {
    if (typeof setText[i] == "undefined") {
      setTimeout(function () {
        startTextAnimation(0);
      }, 2000);
    }

    // checks if the setText[i] exists
    if (i < setText[i].length) {
      // if the text exists it starts the typing animation
      typeTextAnimation(setText[i], 0, function () {
        // starts the next text after the callback function and the whole text has been animated
        startTextAnimation(i + 1);
      });
    }
  }

  startTextAnimation(0);
});

// skill section
// checks if an element is in viewport
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

// event listener for scrolling
window.addEventListener("scroll", animateSkillBars);

// event listener for page load
window.addEventListener("load", animateSkillBars);

// initial check in case elements are already in view
document.addEventListener("DOMContentLoaded", animateSkillBars);

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
    }
  );
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";
});

// Footer
const year = document.querySelector("#current-year");
// updates the year when it changes
year.innerHTML = new Date().getFullYear();
