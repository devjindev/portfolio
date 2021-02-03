'use strict';

// Make Navbar Scroll Transition
const navbar = document.querySelector('nav'); // navbar
const navbarHeignt = navbar.getBoundingClientRect().height; // navbar height

document.addEventListener('scroll', () => { // document에서 scroll 발생했을 때
    console.log(window.scrollY);
    console.log(`navbarHeignt : ${navbarHeignt}`);

    if(window.scrollY > navbarHeignt){ // scroll이 navbar height 보다 크면
        navbar.classList.add('scrolled'); // navbar에 class = 'scrolled' 추가
    }else{ // 그 외면
        navbar.classList.remove('scrolled'); // navbar에 class = 'scrolled' 삭제
    }
});

// $(function () {
//     $(document).scroll(function () {
//         var $nav = $("nav");
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });

// Nav hambuger
$('nav div').click(function() {
    $(this).toggleClass('is-opened');
})