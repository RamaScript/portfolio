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

// let logo = document.querySelector(".logo");

// if (window.innerWidth < 800) {
//   console.log(logo);
//   logo.innerHTML = '';
//   logo.classList.remove("logo");
// } else {
//   logo.classList.add("logo");
// }

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
