const Toogle = () => {
    let menu = document.getElementById("menuLink")

    if(menu.style.display === "flex") {
        menu.style.display = "none"
    }else{
        menu.style.display = "flex"
    }
}