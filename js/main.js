const aboutme = document.getElementById('about-me')
var experienceAboutme = document.getElementById('experience-about-me')
var oqeufaco = document.getElementById('click-me-oqeufaco');
var experience = document.getElementById('click-me-experience')
var activateOqeufaco = document.getElementById('comeback-oqeufaco')
var activateExperience = document.getElementById('comeback-experience')
var contentOqeufaco = document.getElementById('content-oqeufaco')
var contentExperience = document.getElementById('content-experience')

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