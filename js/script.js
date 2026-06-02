console.log("HD INSUMOS listo 🚀");

// ANIMACION SUAVE SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
    });
});
});

const menu =
document.querySelector(".menu-toggle");

const links =
document.querySelector(".nav-links");


menu.addEventListener(
"click",

()=>{

links.classList.toggle(
"active"
);

}
);

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        links.classList.remove('active');

    });

});