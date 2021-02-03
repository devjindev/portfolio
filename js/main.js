'use strict';

// ⭐ Navbar

// Navbar Scroll Transition
const navbar = document.querySelector('nav'); // navbar
const navbarHeignt = navbar.getBoundingClientRect().height; // navbar height

document.addEventListener('scroll', () => { // document에서 scroll 발생했을 때
    if(window.scrollY > navbarHeignt){ // scroll이 navbar height 보다 크면
        navbar.classList.add('scrolled'); // navbar에 class = 'scrolled' 추가
    }else{ // 그 외면
        navbar.classList.remove('scrolled'); // navbar에 class = 'scrolled' 삭제
    }
});

// Navbar Click Navbar Menu
const navbarMenu = document.querySelector('nav > ul li a');
navbarMenu.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    console.log(e.target.dataset.link);

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
});

// Navbar hambuger
const hambuger = document.querySelector('nav > div');
hambuger.addEventListener('click', () => {
    hambuger.classList.toggle('clicked');
});

// ⭐ Home
// Home Scroll Opacity Transition
const home = document.querySelector('header > div'); // home
const homeHeignt = home.getBoundingClientRect().height; // home height

document.addEventListener('scroll', () => { // document에서 scroll 발생했을 때
    home.style.opacity = 1-(window.scrollY/homeHeignt); // home opcity = 
});

// ⭐ Arrow Up
// Arrow Up
const arrowUp = document.querySelector('body > a'); // Arrow Up button

document.addEventListener('scroll', () => { // document에서 scroll 발생했을 때
    if(window.scrollY > homeHeignt/2){ // scroll이 home height 보다 크면
        arrowUp.classList.add('arrowUp'); // button에 class = 'arrowUp' 추가
    }else{ // 그 외면
        arrowUp.classList.remove('arrowUp'); // button에 class = 'arrowUp' 삭제
    }
});