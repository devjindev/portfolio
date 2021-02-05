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

// Navbar Menu Click - 'opend' Class Remove to Navnar Menu
navbarMenu.addEventListener('click', (e) => { // navbar menu click 하면
    navbarMenu.classList.remove('opend'); // navbarMenu 'opend' Class 삭제
    hambuger.classList.remove('clicked'); // hambuger 'clicked' Class 삭제
});

/*
// Navbar Scroll - Navbar Menu Select *Intersection Observe API*
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. IntersectionObserve를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

// 요소 가져오기
const sectionIds = ['#profile', '#projects', '#skills', '#contact']; // 모든 섹션들을 가져온다. // 배열 형태
const sections = sectionIds.map(id => document.querySelector(id)); // 섹션들의 id를 가져온다. // 문자열 형태
const navItems = sectionIds.map(id => document.querySelector(`nav > ul [href="${id}"]`)); // (섹션들의 id에 해당하는(와 일치하는)) 메뉴 아이템(a)을 가져온다. // 문자열 형태

let selectedNavItem = navItems[0]; // 다음에 선택할 섹션 (이제 현재 섹션) // 일단 맨 처음꺼로 초기화

// observer 생성해서 관찰하기
const observerOptions = { // observe 옵션
    root: null,
    rootMargin: '0px',
    threshold: 0.3
}
const observerCallback = (entries, observer) => { // observe Callback
    entries.forEach(entry => {
        if(!entry.isIntersecting){ // !(현재 위치 섹션을 들어오면) = 현재 위치 섹션을 나가면
            const index = sectionIds.indexOf(`#${entry.target.id}`); // 현재 위치 섹션의 id의 index를 가져온다.
            let selectdedIndex; // 다음에 선택할 섹션의 index
            if(entry.boundingClientRect.y < 0){ // 현재 위치 섹션의 y좌표가 - 면 (아래로 내려간 경우)
                selectdedIndex = index + 1; // 다음에 선택할 섹션의 index = 현재 위치 섹션의 index + 1 (아래꺼)
            }else{ // 그 외면 // 현재 위치 섹션의 y좌표가 + 면 (위로 올라간 경우)
                selectdedIndex = index - 1; // 다음에 선택할 섹션의 index = 현재 위치 섹션의 index - 1 (위에꺼)
            }
            selectedNavItem.classList.remove('actived'); // 'actived' class 삭제
            selectedNavItem = navItems[selectdedIndex]; // 다음에 선택할 섹션(이제 현재 섹션)의 index에 해당하는 메뉴 아이템에
            selectedNavItem.classList.add('actived'); // 'actived' class 추가
        }
    });
};
const observer = new IntersectionObserver(observerCallback, observerOptions); // observe 생성자 생성
sections.forEach(section => observer.observe(section)); // 모든 섹션들을 하나씩 받아와서 관찰
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