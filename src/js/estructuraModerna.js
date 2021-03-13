/* ---- JS DOM shortcuts ---- */

const ById = document.getElementById.bind(document);
const ByClass = document.getElementsByClassName.bind(document);

const log = console.log;

/* Change of side the ".main-nav" and "Sections-Articles"*/

//Get the elements
let nav = ById("nav");
let aside_main = ById("main-aside");
let section = ByClass("main-section");

let aside = ByClass("section-aside")[0];
let article = ByClass("section-article--small");

//init the float value of the elements
nav.style.float = "right";
aside_main.style.float = "left";
setClass_float(section, "left", 2);

aside.style.float = "right";
setClass_float(article, "left", 2);

//Change the elements float value
function changeSide (parameter) {
    switch (parameter) {
        case 1: //Change Main-Nav, Aside & Section Float Value
            if (nav.style.float == "right") {
                nav.style.float = "left";
                aside_main.style.float = "right";
                setClass_float(section, "right", 2);
            }
            else {
                nav.style.float = "right";
                aside_main.style.float = "left";
                setClass_float(section, "left", 2);
            }
            break;

        case 2: //Change section-Aside & Article Float Value
            if (aside.style.float == "right") {
                aside.style.float = "left";
                setClass_float(article, "right", 2);
            }
            else {
                aside.style.float = "right";
                setClass_float(article, "left", 2);
            }
            break;
        default:
            alert(parameter, "Not available");
            break;
    }
    
}
//Change or init Elements floats value
function setClass_float (className, value, lenght) {
    for (let i = 0; i < lenght; i++) {
        className[i].style.float = value;
    }
}