const menuItems = document.querySelectorAll(".topnav a");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
