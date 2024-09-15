const menu = document.querySelector(" header > i.fa-bars");
const navBar = document.querySelector(" .left-header nav ");
console.log(menu);

menu.addEventListener("click", () => {
  navBar.classList.toggle("opacity-1");
});
