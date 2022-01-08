
// for adding scroll effect on navbar
window.addEventListener('scroll', fixNav);

function fixNav() {
        const nav = document.querySelector('nav')
        if (window.scrollY > nav.offsetHeight + 100) {
                nav.classList.add('nav-scroll-effect');
        }
        else {
                nav.classList.remove('nav-scroll-effect');
        }
}


// Youtube Video popup
const showVideo = document.getElementById('show-video');
const youtubePopup = document.querySelector('.youtube')
showVideo.addEventListener('click', () => {
        youtubePopup.classList.add('active')
        console.log(youtubePopup.classList);
})

window.addEventListener('click', (e) => {
        console.log(e.target);
        e.target == youtubePopup ? youtubePopup.classList.remove('active') : false
})


// Start trial form  popup
const startTrial = document.querySelector('.start-trial');
const startBtn = document.querySelectorAll('.startBtn')

startBtn.forEach((item) => {
        item.addEventListener('click', () => {
                startTrial.classList.add('show-form')
        })
})
window.addEventListener('click', (e) => {
        console.log(e.target);
        e.target == startTrial ? startTrial.classList.remove('show-form') : false
})



const navSlide = () => {
        const menu = document.querySelector('.hamburger-menu')
        const nav = document.querySelector('.nav-links')
        const navLinks = document.querySelectorAll('.nav-links li')

        menu.addEventListener('click', () => {
                nav.classList.toggle('nav-active')

                menu.classList.toggle('toggle')

                navLinks.forEach((item, index) => {
                        if (item.style.animation) {
                                item.style.animation = ''
                        } else {
                                item.style.animation = `navLinkFade 0.35s ease forwards ${index / 7 + 1}s `;
                        }
                })
        })
}
navSlide()