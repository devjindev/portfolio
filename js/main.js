'use strict';

// ⭐ Navbar

// Navbar Scroll - 'scrolled' Class Add to Navbar
const navbar = document.querySelector('nav'); // navbar
const navbarHeignt = navbar.getBoundingClientRect().height; // navbar height

document.addEventListener('scroll', () => { // document scroll 하면
    if(window.scrollY > navbarHeignt){ // scroll이 navbar height 보다 크면
        navbar.classList.add('scrolled'); // navbar에 'scrolled' Class 추가
    }else{ // 그 외면
        navbar.classList.remove('scrolled'); // navbar에 'scrolled' Class 삭제
    }
});

// Navbar Hambuger Click - 'clicked' Class Toggle to Hambuger
const hambuger = document.querySelector('nav > div'); // hambuger
const navbarMenu = document.querySelector('nav > ul'); // navbarMenu

hambuger.addEventListener('click', () => { // hambuger click 하면
    hambuger.classList.toggle('clicked'); // hambuger 'clicked' Class 추가-삭제
    navbarMenu.classList.toggle('opend'); // navbarMenu 'opend' Class 추가-삭제
});
/*
// Navbar Menu Click - 'opend' Class Remove to Navnar Menu
navbarMenu.addEventListener('click', (e) => {
    navbarMenu.classList.remove('opend');
});
*/
/*
// Navbar Scroll - Navbar Menu Select *Intersection Observe API*
const sectionIds = ['#profile', '#skills', '#projects', '#contact']; // 모든 섹션(이동 페이지) 요소
const sections = sectionIds.map(id => document.querySelector(id)); // 섹션 id
const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`)); // navbar a에 연결한 섹션 id
let selectedNavItems = navItems[0]; // 현재 스크롤이 위치된 섹션

const observerOptions = { // observer options
    'root': null, // viewport
    'rootMargin': '0px', // margin = 0
    'threshold': 0.3 // scroll 30% 되면 변화 감지
}

const observerCallback = (entries, observer) => { // observer callback
    entries.forEach(entry => { // entries(섹션) 각각 하나씩 가져오기 (반복)
        if(!entry.isIntersecting){ // !(entry가 들어오면) = entry가 나가면
            const index = sectionIds.indexOf(`#${index.target.id}`);
            let selectedIndex; // 현재 스크롤이 위치된 섹션

            if(entry.getBoundingClientRect.y < 0){ // 스크롤 아래로 되면
                selectedIndex = index + 1; // 현재 스크롤이 위치된 섹션 = 다음 섹션으로 넘어감
            }else{ // 그 외면 (스크롤 위로 되면)
                selectedIndex = index - 1; // 현재 스크롤이 위치된 섹션 = 이전 섹션으로 넘어감
            }
            selectedNavItems.classList.remove('actived'); // 현재 스크롤이 위치된 섹션에 'actived' class 삭제
            selectedNavItems = navItem[selectedIndex]; // 현재 스크롤이 위치된 섹션에 a 이동 연결
            selectedNavItems.classList.add('actived'); // 현재 스크롤이 위치된 섹션에 'actived' class 추가
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions); // observe 생성자 생성
sections.forEach(section => observer.observe(section)); // observe 실행
*/
// ⭐ Home
// Home Scroll - Opacity Transition
const home = document.querySelector('header > div'); // home
const homeHeignt = home.getBoundingClientRect().height; // home height

document.addEventListener('scroll', () => { // document scroll 하면
    home.style.opacity = 1-(window.scrollY/homeHeignt); // home opcity transition
});

// ⭐ Skills
// Skills Btn Click - 'invisible' Class Remove to List
const skillsBtnContainer = document.querySelector('section.skillsArea > div ul:first-of-type'); // Skills all btn
const skillsListContainer = document.querySelector('section.skillsArea > div ul:last-of-type'); // Skills all list
const skillsList = document.querySelectorAll('section.skillsArea > div ul:last-of-type li'); // Skills each list 전체 가져옴

skillsBtnContainer.addEventListener('click', (e) => { // 전체 btn 중 하나 click 하면
    const filter = e.target.dataset.button || e.target.parentNode.dataset.button; // 클릭한 btn의 data-button 가져옴
    if(filter == null){ // fillter == null이면 반환 (그냥 바로 넘겨줌)
        return;
    }

    const active = document.querySelector('section.skillsArea > div ul:first-of-type li button.selected'); // selected button
    active.classList.remove('selected'); // 'selected' Class 삭제
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode; // button 안에 span에도 할당
    target.classList.add('selected'); // 'selected' Class 추가

    skillsListContainer.classList.add('ani-out'); // all list에 'ani-out(애니메이션 삭제)' Class 추가
    setTimeout(()=>{ // 3초 지나면 'ani-out(애니메이션 삭제)' Class 삭제 (다시 애니메이션 작동)
        skillsList.forEach((skillsList) => { // each list 전체 중 각각 가져옴
            if(filter === '*' || filter === skillsList.dataset.list){ // 클릭한 btn의 data-button === 가져온 list의 data-list 면
                skillsList.classList.remove('invisible'); // 가져온 list에 'invisible(안보임)' Class 삭제
            }else{ // 그 외면 (안같으면)
                skillsList.classList.add('invisible'); // 가져온 list에 'invisible(안보임)' Class 추가
            }
        });
        skillsListContainer.classList.remove('ani-out');
    }, 300);
});

// ⭐ Arrow Up
// Arrow Up Scroll - 'arrowUp' Class Add to Button
const arrowUp = document.querySelector('body > a'); // Arrow Up button

document.addEventListener('scroll', () => { // document scroll 하면
    if(window.scrollY > homeHeignt/2){ // scroll이 home height 보다 크면
        arrowUp.classList.add('arrowUp'); // button에 class = 'arrowUp' 추가
    }else{ // 그 외면
        arrowUp.classList.remove('arrowUp'); // button에 class = 'arrowUp' 삭제
    }
});