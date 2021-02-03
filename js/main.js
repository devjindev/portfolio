'use strict';

// Navbar Scroll Transition
const navbar = document.querySelector('nav'); // navbar
const navbarHeignt = navbar.getBoundingClientRect().height; // navbar height

document.addEventListener('scroll', () => { // document에서 scroll 발생했을 때
    //console.log(window.scrollY);
    //console.log(`navbarHeignt : ${navbarHeignt}`);

    if(window.scrollY > navbarHeignt){ // scroll이 navbar height 보다 크면
        navbar.classList.add('scrolled'); // navbar에 class = 'scrolled' 추가
    }else{ // 그 외면
        navbar.classList.remove('scrolled'); // navbar에 class = 'scrolled' 삭제
    }
});

// Navbar Click Navbar Menu
// const navbarMenu = document.querySelector('nav > ul li a');
// navbarMenu.addEventListener('click', (e) => {
//     const target = e.target;
//     const link = target.dataset.link;
//     if(link == null){
//         return;
//     }
//     console.log(e.target.dataset.link);

//     const scrollTo = document.querySelector(link);
//     scrollTo.scrollIntoView({behavior: 'smooth'});
// });

// Nav hambuger
$('nav div').click(function() {
    $(this).toggleClass('is-opened');
})