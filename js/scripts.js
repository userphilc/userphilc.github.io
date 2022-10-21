/*!
* Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 


const xyz = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','l','j','i','h','g','f','e','d','c','b','a'];
const num = ['0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5'];
const value = "mailto:mail@example.org";


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    var intId = setInterval(() => {
        document.getElementById("abc").textContent = "C" + xyz[11] + xyz[12] + xyz[6] + xyz[25] + xyz[23] + xyz[6];
        document.getElementById("abcd").textContent = "C" + xyz[11] + xyz[12] + xyz[6] + xyz[25] + xyz[23] + xyz[6];
        clearInterval(intId);
    }, 5000);

});


function sbtnPrepare() {
    var intId2 = setInterval(() => {
        document.getElementById("submitButton").textContent = "C" + xyz[11] + xyz[12] + xyz[6] + xyz[25] + xyz[23] + xyz[6] + " " + xyz[5] + xyz[7];
        document.getElementById("subMsg").textContent = xyz[6] + xyz[17] + xyz[13] + xyz[21] + xyz[3] + xyz[25] + xyz[6] + xyz[23] + xyz[18] + xyz[6] + xyz[17] + xyz[13] + xyz[21] + xyz[8] + value.charAt(11) + xyz[19] + xyz[13] + xyz[25] + xyz[17] + xyz[15] + value.charAt(19) + xyz[23] + xyz[11] + xyz[13];
        document.getElementById("submitButton").style.visibility = "visible";
        clearInterval(intId2);
    }, 3000);
}

function submit() {
    location.href = value.substring(0,7) + xyz[6] + xyz[17] + xyz[13] + xyz[21] + xyz[3] + xyz[25] + xyz[6] + xyz[23] + xyz[18] + xyz[6] + xyz[17] + xyz[13] + xyz[21] + xyz[8] + value.charAt(11) + xyz[19] + xyz[13] + xyz[25] + xyz[17] + xyz[15] + value.charAt(19) + xyz[23] + xyz[11] + xyz[13];
    
}