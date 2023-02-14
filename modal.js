const btnEl = document.querySelector(".click-btn");
const contentEl = document.querySelector(".content_con");
const close_conEl = document.querySelector(".close_con");

btnEl.addEventListener("click", (e) => {
  contentEl.style.display = "block";
  btnEl.style.display = "none";
});
close_conEl.addEventListener("click", (e) => {
  contentEl.style.display = "none";
  btnEl.style.display = "block";
});
