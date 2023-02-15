const nav1toggler = document.getElementById("nav1");
nav1toggler.addEventListener("transitionend", function () {
    if (nav1.style.opacity == "0") {
        nav1.style.display = "none";
    }
});
