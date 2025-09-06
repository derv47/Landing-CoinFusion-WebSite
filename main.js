function opener() {
    let position = true;
    const burger = document.getElementById("HamburgerMenu");
    const cont = document.getElementById("barCont");
    burger.addEventListener("click", ()=> {
        if (position) {
        burger.style.backgroundColor = 'black';
        burger.style.color = 'white';
        burger.setAttribute("name", "close-outline")
        cont.classList.add("__activebar");
        } else {
            burger.style.backgroundColor = 'white';
            burger.style.color = 'black';
            burger.setAttribute("name", "menu-outline");
            cont.classList.remove("__activebar");
        }
        position = !position;
    })
}
opener();