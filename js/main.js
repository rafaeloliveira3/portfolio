const aboutme = document.getElementById('about-me')
const experienceAboutme = document.getElementById('experience-about-me')
const oqeufaco = document.getElementById('click-me-oqeufaco');
const experience = document.getElementById('click-me-experience')
const activateOqeufaco = document.getElementById('comeback-oqeufaco')
const activateExperience = document.getElementById('comeback-experience')
const contentOqeufaco = document.getElementById('content-oqeufaco')
const contentExperience = document.getElementById('content-experience')

// Variáveis do Tema Escuro
const darkMode = document.getElementById('dark-mode-button')
const darkSection1 = document.getElementById('portifolio')
const darkSection2 = document.getElementById('sobremim')
const darkSection3 = document.getElementById('contato')
const darkFooter = document.getElementById('rodape')
const logoHide = document.getElementById('normal-footer-logo')
const logoShow = document.getElementById('dark-footer-logo')

function sobremimAction (){
    aboutme.classList.toggle ('hide')
    contentOqeufaco.classList.toggle ('show')
}
oqeufaco.addEventListener('click', sobremimAction)

function oqeufacoAction (){
    aboutme.classList.remove ('hide')
    contentOqeufaco.classList.remove ('show')
}

activateOqeufaco.addEventListener('click', oqeufacoAction)

function experienceAction (){
    aboutme.classList.toggle ('hide')
    contentExperience.classList.toggle ('show')
}
experience.addEventListener('click', experienceAction)

function experiencehideAction (){
    aboutme.classList.remove ('hide')
    contentExperience.classList.remove ('show')
}

activateExperience.addEventListener('click', experiencehideAction)

function darkModeFunction (){
    darkMode.classList.toggle ('active')
    document.body.classList.toggle('dark')
    darkSection1.classList.toggle('dark')
    darkSection2.classList.toggle('dark')
    darkSection3.classList.toggle('dark')
    darkFooter.classList.toggle('dark')
    logoHide.classList.toggle('hide')
    logoShow.classList.toggle('show')
}

darkMode.addEventListener('click', darkModeFunction)