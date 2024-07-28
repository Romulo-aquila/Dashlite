let menuItem = document.getElementById('menu-icon');
let txtMenu = document.querySelectorAll('.text-menu');
let AsideBar = document.querySelectorAll('.nav-bar');
let ItemsBar = document.querySelectorAll('.menu-bar-item');

function nonee(event) {
    let Perfil = document.querySelectorAll('.perfil-info');
    let Titlemenu01 = document.getElementById('menu-title01');
    let itemsNav = document.querySelectorAll('.items-nav')
    let logo = document.querySelectorAll('.logo-title')
    let Categoria = document.getElementById('Category');
    let HR001 = document.getElementById('division-hr');


    if (Perfil[0].style.display == "flex") {
        Perfil[0].style.display = "none";
        


     txtMenu.forEach(txt => {
        txt.style.display = "none";
    })

        Titlemenu01.style.display = "none";
        AsideBar[0].style.width = "8.7%";

        itemsNav[0].style.justifyContent = "center";
        logo[0].style.display = "none";
        Categoria.style.display = "none";
        HR001.style.display = "none";
 } else {

    Perfil[0].style.display = "flex";
    txtMenu.forEach(txt => {
        txt.style.display = "block";
    })


        Titlemenu01.style.display = "block";
        AsideBar[0].style.width = "27%";
        itemsNav[0].style.justifyContent = "space-between";
        logo[0].style.display = "block";
        Categoria.style.display = "flex";
        HR001.style.display = "block";
    }
event.preventDefault();

}

menuItem.addEventListener("click", nonee);
