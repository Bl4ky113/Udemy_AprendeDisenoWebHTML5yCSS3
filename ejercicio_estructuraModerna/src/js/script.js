/* ---- JS id,nameClass,tag shortcuts ---- */

const ById = document.getElementById.bind(document);

/* Change of side the ".main-nav" */

let nav = ById("nav");

nav.style.float = "right";

function changeSide () {
    if (nav.style.float == "right") {
        nav.style.float = "left";
    }
    else {
        nav.style.float = "right";
    }

}