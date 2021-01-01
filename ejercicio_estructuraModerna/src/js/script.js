/* ---- JS DOM shortcuts ---- */

const ById = document.getElementById.bind(document);
const ByClass = document.getElementsByClassName.bind(document);

const log = console.log;

/* Change of side the ".main-nav" */

//Get the elements
let nav = ById("nav");
let section = ByClass("main-section");

//init the float value of the elements
nav.style.float = "right";

//Change the elements float value
function changeSide () {
    if (nav.style.float == "right") {
        nav.style.float = "left";
        setClass_float(section, "float", "right", 3);
    }
    else {
        nav.style.float = "right";
        setClass_float(section, "float", "left", 3);
    }
}

for (let i = 0; i < section.length; i++) {
    section[i].style.float = "left";
}
//Change Elements floats value
function setClass_float (className, setStyle, value, lenght) {
    for (let i = 0; i < lenght; i++) {
        className[i].style.float = value;
        console.log(i, section[i].style); 
    }
}