console.log("HD INSUMOS listo 🚀");

const menu =
document.querySelector(".menu-toggle");

const links =
document.querySelector(".nav-links");

const navLinks =
document.querySelectorAll(
'.nav-links a'
);


// MENU

menu.addEventListener(
'click',

()=>{

links.classList.toggle(
'active'
);

}
);


// SCROLL + CERRAR MENU

navLinks.forEach(

(link)=>{

link.addEventListener(

'click',

(e)=>{

e.preventDefault();

const target =
document.querySelector(

link.getAttribute(
'href'
)

);


// cerrar menu

links.classList.remove(
'active'
);


// esperar animacion

setTimeout(()=>{

target.scrollIntoView({

behavior:'smooth'

});

},200);

}

);

}

);