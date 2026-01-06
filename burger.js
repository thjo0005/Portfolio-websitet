const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.getElementById("primary-menu");

if (burger && nav && menu) {
  const setExpanded = (isOpen) => {
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    burger.setAttribute("aria-label", isOpen ? "Luk menu" : "Åbn menu");
  };

  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");
    burger.classList.toggle("active", isOpen);
    setExpanded(isOpen);
  });

}
