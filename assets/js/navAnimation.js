const navAnimation = document.getElementById('navAnimation');
const navContentAnimation = document.getElementById('navContentAnimation');


window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        navAnimation.style.height = '60px';
        navAnimation.style.backgroundColor = '#009ee2ca';
        navContentAnimation.style.fontSize = '20px';
    } else if (document.documentElement.scrollTop < 100) {
        navAnimation.style.height = '70px';
        navAnimation.style.opacity = '1';
        navAnimation.style.backgroundColor = '#009ee2';
        navContentAnimation.style.fontSize = '25px';
    } 

}



