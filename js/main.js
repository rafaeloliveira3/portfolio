const aboutme = document.getElementById('about-me')
var experienceAboutme = document.getElementById('experience-about-me')
var oqeufaco = document.getElementById('click-me-oqeufaco');
var experience = document.getElementById('click-me-experience')
var activateOqeufaco = document.getElementById('comeback-oqeufaco')
var activateExperience = document.getElementById('comeback-experience')
var contentOqeufaco = document.getElementById('content-oqeufaco')
var contentExperience = document.getElementById('content-experience')

// Variáveis do Tema Escuro
var darkMode = document.getElementById('dark-mode-button')
var darkSection1 = document.getElementById('portifolio')
var darkSection2 = document.getElementById('sobremim')
var darkSection3 = document.getElementById('contato')
var darkFooter = document.getElementById('rodape')
var logoHide = document.getElementById('normal-footer-logo')
var logoShow = document.getElementById('dark-footer-logo')

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