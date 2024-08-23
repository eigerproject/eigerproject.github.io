window.onscroll = scrollFunction;

let min = 50;

function scrollFunction() {
  if (document.body.scrollTop > min || document.documentElement.scrollTop > min) {
    document.querySelector("header").classList.add("ontop");
  } else {
    document.querySelector("header").classList.remove("ontop");
  }
}