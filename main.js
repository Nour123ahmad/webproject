const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("oppen");

    const isOpen = navLinks.classList.contains("opens");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const bookingType = document.getElementById("booking-type");
if (bookingType != null){
    bookingType.addEventListener("click", (e) => {
        Array.from(bookingType.getElementsByTagName("div")).forEach((item) => {
            item.classList.remove("active");
        });
    
        e.target.classList.add("active");
    });
}


const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
});

const scrollRevealOpion = {
    distance: "50px", 
    origin: "bottom", 
    duration: 1000,
};
