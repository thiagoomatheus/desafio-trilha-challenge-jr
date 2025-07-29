document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector("#menu-icon");

    const faq_lis = document.querySelectorAll("#faq-section ul li");
    const faq_paragraphs = document.querySelectorAll("#faq-section ul li p");
    const faq_icons = document.querySelectorAll("#faq-section ul li i");

    faq_icons.forEach((icon, i) => {
        icon.addEventListener("click", () => {
            icon.classList.toggle("active");
            faq_paragraphs[i].classList.toggle("active");
            faq_lis[i].classList.toggle("active");
        })
    })

    menu.addEventListener("click", () => {
        const nav = document.querySelector("nav ul");
        
        nav.classList.toggle("active");
        if (nav.classList.contains("active")) {
            nav.style.display = "flex";
        }
    });
})