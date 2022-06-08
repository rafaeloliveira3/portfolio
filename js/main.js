const aboutme = document.getElementById('about-me')
var experienceAboutme = document.getElementById('experience-about-me')
var oqeufaco = document.getElementById('oqeufaco');
var experience = document.getElementById('experience')
var contentOqeufaco = document.getElementById('content-oqeufaco')
var oqeufacoCard = document.getElementById('oqeufaco-card');
var contentExperience = document.getElementById('content-experience')
var experienceCard = document.getElementById('experience-card');

function sobremimAction (){
    aboutme.classList.toggle ('hide')
    contentOqeufaco.classList.toggle ('show')
}
oqeufaco.addEventListener('click', sobremimAction)

function oqeufacoAction (){
    aboutme.classList.remove ('hide')
    contentOqeufaco.classList.remove ('show')
}

contentOqeufaco.addEventListener('click', oqeufacoAction)

function experienceAction (){
    aboutme.classList.toggle ('hide')
    contentExperience.classList.toggle ('show')
}
experience.addEventListener('click', experienceAction)

function experiencehideAction (){
    aboutme.classList.remove ('hide')
    contentExperience.classList.remove ('show')
}

contentExperience.addEventListener('click', experiencehideAction)