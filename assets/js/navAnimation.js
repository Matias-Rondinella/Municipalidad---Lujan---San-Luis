const navAnimation = document.getElementById('navAnimation');


window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        navAnimation.style.height = '60px';
        navAnimation.style.backgroundColor = '#009ee2ca';
    } else if (document.documentElement.scrollTop < 100) {
        navAnimation.style.height = '70px';
        navAnimation.style.opacity = '1';
        navAnimation.style.backgroundColor = '#009ee2';
    } 

}



