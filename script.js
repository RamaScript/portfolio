// ========================== Dark mode / Light mode -  Start ==========================
let mode = document.querySelector(".day-night-mode");
mode.addEventListener("click", () => {
  // console.log("button click to ho rha hai");
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    mode.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    mode.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
});
// ========================== Dark mode / Light mode -  END ==========================

// typing text animation script
function startTypingAnimation(selector, strings) {
  new Typed(selector, {
    strings: strings,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
}
startTypingAnimation(".typing-2", ["Student", "Web Developer", "Programmer"]);
startTypingAnimation(".typing", ["Student", "Web Developer", "Programmer"]);
// ========================== Age Timer start ==========================

function calculateAge(dob) {
  const birthDate = new Date(dob);
  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();
  let minutes = now.getMinutes() - birthDate.getMinutes();
  let seconds = now.getSeconds() - birthDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months, days, hours, minutes, seconds };
}

function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

function updateAge() {
  const dob = "2005-01-04T05:27:00";
  const age = calculateAge(dob);

  document.getElementById("y").innerText = padZero(age.years);
  document.getElementById("mo").innerText = padZero(age.months);
  document.getElementById("d").innerText = padZero(age.days);
  document.getElementById("h").innerText = padZero(age.hours);
  document.getElementById("mi").innerText = padZero(age.minutes);
  document.getElementById("s").innerText = padZero(age.seconds);
}

setInterval(updateAge, 1000);

updateAge(); // Initial call to display the age immediately

// ========================== Age Timer End ==========================

// ========================== ScrollSpy Start ==========================

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".scrollspy");
  const navLinks = document.querySelectorAll("#nav-links-all a");
  const observerOptions = {
    threshold: [0.25, 0.5, 0.75], // Using multiple thresholds
    rootMargin: "0px 0px -25% 0px",
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(
        `Section ${entry.target.id} is ${
          entry.isIntersecting ? "" : "not "
        }intersecting`
      );
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
            console.log(
              `Active class added to link: ${link.getAttribute("href")}`
            );
          }
        });
      }
    });
  }, observerOptions);
  sections.forEach((section) => {
    observer.observe(section);
    console.log(`Observer is observing section: ${section.id}`);
  });
});

// ========================== ScrollSpy END ==========================
