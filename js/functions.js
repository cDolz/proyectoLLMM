window.onscroll = function scroll() {
    if (this.scrollY != 0) {
        navegadorFixed.style.position = "fixed";
        nav1.style.opacity = "0";
        if ($(window).width() >= 955 && barraBusquedaDiv2.style.display != "flex") {
            menuMaximizado.style.display = "flex";
            submenuPC.style.marginTop = "70px";
            submenuPS.style.marginTop = "70px";
            submenuXbox.style.marginTop = "70px";
            submenuNintendo.style.marginTop = "70px";
        }
    } else {
        navegadorFixed.style.position = "relative";
        nav1.style.display = "flex";
        nav1.style.opacity = "1";
        menuMaximizado.style.display = "none";
        if ($(window).width() >= 955) {
            submenuPC.style.marginTop = "129px";
            submenuPS.style.marginTop = "129px";
            submenuXbox.style.marginTop = "129px";
            submenuNintendo.style.marginTop = "129px";
        }
    }
}

window.onresize = function resize() {
    if ($(window).width() < 955) {
        menuMaximizado.style.display = "none";
    }
    if ($(window).width() >= 955) {
        barraBusqueda.style.width = "82%";
        barraBusquedaDiv1.style.width = "10%";
        submenuPC.style.marginTop = "129px";
        submenuPS.style.marginTop = "129px";
        submenuXbox.style.marginTop = "129px";
        submenuNintendo.style.marginTop = "129px";
    } else if ($(window).width() >= 863 && $(window).width() < 955) {
        barraBusqueda.style.width = "80%";
        barraBusquedaDiv1.style.width = "10%";
        submenuPC.style.marginTop = "92px";
        submenuPS.style.marginTop = "92px";
        submenuXbox.style.marginTop = "92px";
        submenuNintendo.style.marginTop = "92px";
    } else if ($(window).width() >= 755 && $(window).width() < 863) {
        barraBusqueda.style.width = "78%";
        barraBusquedaDiv1.style.width = "13%";
    } else if ($(window).width() >= 647 && $(window).width() < 755) {
        barraBusqueda.style.width = "73%";
        barraBusquedaDiv1.style.width = "15%";
    } else if ($(window).width() >= 539 && $(window).width() < 647) {
        barraBusqueda.style.width = "67%";
        barraBusquedaDiv1.style.width = "17%";
    } else if ($(window).width() >= 400 && $(window).width() < 539){
        barraBusqueda.style.width = "67%";
        barraBusquedaDiv1.style.width = "20%";
        submenuPC.style.marginTop = "92px";
        submenuPS.style.marginTop = "92px";
        submenuXbox.style.marginTop = "92px";
        submenuNintendo.style.marginTop = "92px";
    } else {
        barraBusqueda.style.width = "67%";
        barraBusquedaDiv1.style.width = "20%";
        submenuPC.style.marginTop = "77.5px";
        submenuPS.style.marginTop = "77.5px";
        submenuXbox.style.marginTop = "77.5px";
        submenuNintendo.style.marginTop = "77.5px";
    }
}

function desplegarBarraBusqueda() {
    barraBusquedaDiv1.style.transition = "all 300ms";
    logo.style.display = "none";
    icons.style.display = "none";
    menuMaximizado.style.display = "none";
    barraBusqueda.style.width = "100%";
    barraBusquedaDiv1.style.width = "85%";
    barraBusquedaSpan.style.display = "none";
    barraBusquedaDiv2.style.display = "flex";
    barraBusquedaInput.style.display = "flex";
    barraBusquedaInput.focus();
}

function replegarBarraBusqueda() {
    logo.style.display = "flex";
    icons.style.display = "flex";
    if ($(window).width() >= 955) {
        barraBusqueda.style.width = "82%";
        barraBusquedaDiv1.style.width = "10%";
        if (this.scrollY != 0) {
            menuMaximizado.style.display = "flex";
            barraBusquedaDiv1.style.transition = "none";
        }
    } else if ($(window).width() >= 863 && $(window).width() < 955) {
        barraBusqueda.style.width = "80%";
        barraBusquedaDiv1.style.width = "10%";
    } else if ($(window).width() >= 755 && $(window).width() < 863) {
        barraBusqueda.style.width = "78%";
        barraBusquedaDiv1.style.width = "13%";
    } else if ($(window).width() >= 647 && $(window).width() < 755) {
        barraBusqueda.style.width = "75%";
        barraBusquedaDiv1.style.width = "15%";
    } else if ($(window).width() >= 555 && $(window).width() < 647) {
        barraBusqueda.style.width = "72%";
        barraBusquedaDiv1.style.width = "17%";
    } else {
        barraBusqueda.style.width = "67%";
        barraBusquedaDiv1.style.width = "20%";
    }
    barraBusquedaSpan.style.display = "flex";
    barraBusquedaDiv2.style.display = "none";
    barraBusquedaInput.style.display = "none";
}

function barraBusquedaHover() {
    if (barraBusquedaInput.style.display == "flex") {
        barraBusquedaDiv1.style.backgroundColor = "#007120";
    } else {
        barraBusquedaDiv1.style.backgroundColor = "#00cb3a";
    }
}

function barraBusquedaOut() {
    barraBusquedaDiv1.style.backgroundColor = "#007120";
}

function desplegarSubmenu(caso) {
    if (caso == 1) {
        submenuPC.style.display = "grid";
        submenuPS.style.display = "none";
        submenuXbox.style.display = "none";
        submenuNintendo.style.display = "none";
        capa.style.display = "block";
    } else if (caso == 2) {
        submenuPS.style.display = "grid";
        submenuPC.style.display = "none";
        submenuXbox.style.display = "none";
        submenuNintendo.style.display = "none";
        capa.style.display = "block";
    } else if (caso == 3) {
        submenuXbox.style.display = "grid";
        submenuPC.style.display = "none";
        submenuPS.style.display = "none";
        submenuNintendo.style.display = "none";
        capa.style.display = "block";
    } else {
        submenuNintendo.style.display = "grid";
        submenuPC.style.display = "none";
        submenuPS.style.display = "none";
        submenuXbox.style.display = "none";
        capa.style.display = "block";
    }
}

function salirDeMenu() {
    submenuPC.style.display = "none";
    submenuPS.style.display = "none";
    submenuXbox.style.display = "none";
    submenuNintendo.style.display = "none";
    capa.style.display = "none";
}