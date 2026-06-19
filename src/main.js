import './style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 700,
  once: false,
  mirror: true,
})

const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-link')

window.addEventListener('scroll', () => {

  let current = ''

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id')
    }

  })

  navLinks.forEach(link => {

    link.classList.remove('text-white')

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-white')
    }

  })

})

document.getElementById('year').textContent =
  new Date().getFullYear()