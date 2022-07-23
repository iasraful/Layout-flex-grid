const layout1 = document.querySelector(".button1");
const layout2 = document.querySelector(".button2");
const layout3 = document.querySelector(".button3");
const container = document.querySelector("#container");
layout1.addEventListener("click", () => {
  layout2.classList.remove("selected");
  layout3.classList.remove("selected");
  layout1.classList.add("selected");

  container.classList.remove("layout2");
  container.classList.remove("layout3");
});
layout2.addEventListener("click", () => {
  layout1.classList.remove("selected");
  layout3.classList.remove("selected");
  layout2.classList.add("selected");

  container.classList.remove("layout3");
  container.classList.add("layout2");
});

layout3.addEventListener("click", () => {
  layout1.classList.remove("selected");

  layout2.classList.remove("selected");
  layout3.classList.add("selected");

  container.classList.remove("layout2");
  container.classList.add("layout3");
});
