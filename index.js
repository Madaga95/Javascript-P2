// Selecteurs
//const back = (document.querySelector("body").style.background = "moccasin");

// Click event

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

btn1.addEventListener("click", () => {
  response.style.visibility = "visible";
  response.style.background = "red";
});

btn2.addEventListener("click", () => {
  response.style.visibility = "visible";
  response.style.background = "green";
});

const mousemove = document.querySelector(".moussemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
