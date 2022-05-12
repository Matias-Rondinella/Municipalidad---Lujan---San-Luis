const navAnimation = document.getElementById('navAnimation');


window.onscroll = function navAnimationF() {
    if (document.documentElement.scrollTop > 100) {
        navAnimation.style.height = '60px';
        navAnimation.style.backgroundColor = '#009ee2ca';
    }else{
        navAnimation.style.height = '70px';
    }
    
}



