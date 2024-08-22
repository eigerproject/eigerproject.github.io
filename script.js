window.onscroll = function(e) { console.log(e); scrollFunction()};

let min = 50;

function scrollFunction() {
  if (document.body.scrollTop > min || document.documentElement.scrollTop > min) {
    document.querySelector("header").style.padding = "5px";
  } else {
    document.querySelector("header").style.padding = "20px";
  }
}