// Navigation highlighting
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("nav ul li a");

const highlightActiveSection = () => {
  const activeSection = getActiveSection();

  menuLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(activeSection.id)) {
      link.classList.add("active");
    }
  });
};

const getActiveSection = () => {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll("section");
  let activeSection = null;

  sections.forEach((section) => {
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;

    if (scrollPosition >= offset && scrollPosition < offset + height) {
      activeSection = section;
    }
  });

  return activeSection;
};

// Scroll reveal functionality
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// Sets up delays and observe elements
revealDelayElements.forEach((element) => {
  element.style.transitionDelay = element.dataset.revealDelay;
  revealObserver.observe(element);
});

// EmailJS Functionality
const btn = document.getElementById("button");

const sendMail = () => {
  const params = {
    from_name: document.getElementById("contactForm-name").value,
    email_id: document.getElementById("contactForm-email").value,
    message: document.getElementById("contactForm-message").value,
  };

  emailjs.init("GWAMJbKrViJUW6pM6");

  emailjs
    .send("service_zeibaco", "template_h1no3ni", params)
    .then((response) => {
      btn.value = "Send Message";
      document.getElementById("form-status").textContent =
        "Message sent successfully!";
    })
    .catch((err) => {
      btn.value = "Send Message";
      document.getElementById("form-status").textContent =
        "Failed to send message. Please try again.";
    });
};

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";
});

// Footer
const year = document.querySelector("#current-year");
year.textContent = new Date().getFullYear();
