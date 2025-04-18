
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".india-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.addEventListener('click', function(event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".india-icon");
    const menuContainer = document.querySelector(".india-menu");


    if (!menuContainer.contains(event.target)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});

const menuLinks = document.querySelectorAll(".menu-links a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".india-icon");
        menu.classList.remove("open");
        icon.classList.remove("open");
    });
});
