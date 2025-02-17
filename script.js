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

// navbar
const section = document.querySelectorAll("section");
const menu = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

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

// Scroll reveal with Intersection Observer
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const revealCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, {
  threshold: 0.2, // 20% of the element needs to be visible
  rootMargin: "0px",
});

// Set up delays and observe elements
revealElements.forEach((element) => {
  revealObserver.observe(element);
});

revealDelayElements.forEach((element) => {
  element.style.transitionDelay = element.dataset.revealDelay;
  revealObserver.observe(element);
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
    }
  );
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";
});

// Footer
const year = document.querySelector("#current-year");
year.innerHTML = new Date().getFullYear();
