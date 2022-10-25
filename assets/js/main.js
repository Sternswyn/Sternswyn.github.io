// --- WINDOWS PRELOADER ---

window.addEventListener('load', () => {
    document.querySelector('.lds-backdrop').classList.add('disabled');
})

// --- STICKY MENU ---

let menu = document.getElementById('menu');
let sticky = menu.offsetTop;

window.onscroll = function(){
    if(window.pageYOffset >= sticky){
        menu.classList.add('sticky');
    } 
    else {
        menu.classList.remove('sticky');
    }
}

// --- HAMBURGER MENU --- 

let hamburger = document.querySelector('.hamburger');
let menuList = document.querySelector('.menu-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuList.classList.toggle('active');
})

document.querySelectorAll('.tab').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menuList.classList.remove('active');
}))

// --- SCROLL TO TOP ---

let scrollToTop = document.querySelector('.scroll-to-top');

refreshBtnVisibility = () => {
    if (document.documentElement.scrollTop <= 500) {
        scrollToTop.style.display = 'none';
    } else {
        scrollToTop.style.display = 'block';
    }
  };
  
  scrollToTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });
  
  document.addEventListener('scroll', (e) => {
    refreshBtnVisibility();
  });

// --- SCROLL ANIMATIONS ---  

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left');
            entry.target.classList.add('show-bottom');
            entry.target.classList.add('show-top');
            entry.target.classList.add('show-right');
        }
    })
})


let hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el) => observer.observe(el))

let hiddenElementsBottom = document.querySelectorAll('.hidden-bottom');
hiddenElementsBottom.forEach((el) => observer.observe(el));

let hiddenElementsTop = document.querySelectorAll('.hidden-top');
hiddenElementsTop.forEach((el) => observer.observe(el));

let hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsRight.forEach((el) => observer.observe(el));

// --- MENU NAVIGATION ONSCROLL ---

// let markers = document.querySelectorAll('.marker');
// let tabs = document.querySelectorAll('.tab');

// window.addEventListener('scroll', () => {
//     let current = '';

//     markers.forEach(marker => {
//         let markerTop = marker.offsetTop;
//         let markerHeight = marker.offsetHeight;

//         if(scrollY >= (markerTop - markerHeight / 3)) {
//             current = marker.getAttribute('id');
//         }
//     })

//     tabs.forEach(tab => {
//         tab.classList.remove('highlight');
//         let href = tab.getAttribute('href').substring(1);
// 		if (href === current) {
// 			tab.classList.add('highlight');
//         }
//     })
        
// })
// 123