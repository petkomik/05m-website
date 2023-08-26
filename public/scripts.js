
var navLinks = document.getElementById("navLinks");

var phoneScroll1 = document.getElementById("phone-sctoll-1")
var phoneScroll1h3 = document.getElementById("phone-sctoll-1-h3")
var phoneScroll2 = document.getElementById("phone-sctoll-2")
var phoneScroll2h3 = document.getElementById("phone-sctoll-2-h3")
var phoneScroll3 = document.getElementById("phone-sctoll-3")
var phoneScroll3h3 = document.getElementById("phone-sctoll-3-h3")
var phoneScroll4 = document.getElementById("phone-sctoll-4")
var phoneScroll4h3 = document.getElementById("phone-sctoll-4-h3")
var phoneScroll5 = document.getElementById("phone-sctoll-5")
var phoneScroll5h3 = document.getElementById("phone-sctoll-5-h3")
var phoneScroll6 = document.getElementById("phone-sctoll-6")
var phoneScroll6h3 = document.getElementById("phone-sctoll-6-h3")
var phoneScroll7 = document.getElementById("phone-sctoll-7")
var phoneScroll7h3 = document.getElementById("phone-sctoll-7-h3")



function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function isInViewport(element) {
const rect = element.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if(window.innerWidth > 1100) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("logo-js").style.width = "80px";
        document.getElementById("nav-links-list-js").style.fontSize = "24px";
        document.getElementById("nav-js").style.backgroundColor = "white";


    } else {
        document.getElementById("logo-js").style.width = "110px";
        document.getElementById("nav-links-list-js").style.fontSize = "28px";
        document.getElementById("nav-js").style.backgroundColor = "var(--transparent-white)";

    }
} 

if(window.innerWidth < 1100) {
    if(isInViewport(phoneScroll1)) {
        phoneScroll1.style.backgroundColor = "var(--hover-blue)";
        phoneScroll1h3.style.opacity = "1";
        phoneScroll1h3.style.padding = "0";

    } else {
        phoneScroll1.style.backgroundColor = "transparent";
        phoneScroll1h3.style.opacity = "0";
        phoneScroll1h3.style.paddingTop = "200px";
    }
    if(isInViewport(phoneScroll2)) {
        phoneScroll2.style.backgroundColor = "var(--hover-blue)";
        phoneScroll2h3.style.opacity = "1";
        phoneScroll2h3.style.padding = "0";

    } else {
        phoneScroll2.style.backgroundColor = "transparent";
        phoneScroll2h3.style.opacity = "0";
        phoneScroll2h3.style.paddingTop = "200px";
    }
    if(isInViewport(phoneScroll3)) {
        phoneScroll3.style.backgroundColor = "var(--hover-blue)";
        phoneScroll3h3.style.opacity = "1";
        phoneScroll3h3.style.padding = "0";

    } else {
        phoneScroll3.style.backgroundColor = "transparent";
        phoneScroll3h3.style.opacity = "0";
        phoneScroll3h3.style.paddingTop = "200px";
    }
    if(isInViewport(phoneScroll4)) {
        phoneScroll4.style.backgroundColor = "var(--hover-blue)";
        phoneScroll4h3.style.opacity = "1";
        phoneScroll4h3.style.padding = "0";

    } else {
        phoneScroll4.style.backgroundColor = "transparent";
        phoneScroll4h3.style.opacity = "0";
        phoneScroll4h3.style.paddingTop = "200px";
    }
    if(isInViewport(phoneScroll5)) {
        phoneScroll5.style.backgroundColor = "var(--hover-blue)";
        phoneScroll5h3.style.opacity = "1";
        phoneScroll5h3.style.padding = "0";

    } else {
        phoneScroll5.style.backgroundColor = "transparent";
        phoneScroll5h3.style.opacity = "0";
        phoneScroll5h3.style.paddingTop = "200px";
    }
    if(isInViewport(phoneScroll6)) {
        phoneScroll6.style.backgroundColor = "var(--hover-blue)";
        phoneScroll6h3.style.opacity = "1";
        phoneScroll6h3.style.padding = "0";

    } else {
        phoneScroll6.style.backgroundColor = "transparent";
        phoneScroll6h3.style.opacity = "0";
        phoneScroll6h3.style.paddingTop = "200px";
    }
    if(isInViewport(phoneScroll7)) {
        phoneScroll7.style.backgroundColor = "var(--hover-blue)";
        phoneScroll7h3.style.opacity = "1";
        phoneScroll7h3.style.padding = "0";

    } else {
        phoneScroll7.style.backgroundColor = "transparent";
        phoneScroll7h3.style.opacity = "0";
        phoneScroll7h3.style.paddingTop = "200px";
    }
}

}
