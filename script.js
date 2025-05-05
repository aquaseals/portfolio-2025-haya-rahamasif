window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

document.addEventListener("scroll", function() {
    let maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let userScrollPos = window.scrollY
    let widthBasedOnScrollPercentage = (userScrollPos/maxHeight)*100// calulcating what fraction of the webpage the user has scrolled thorugh
    document.getElementById("progress-bar").style.width = `${widthBasedOnScrollPercentage}vw` // sets width of progress bar based on calculated percentage
    aboutMe = document.getElementById("about-me")
    projects = document.getElementById("projects")
    skills = document.getElementById("skills")
    blog = document.getElementById("blog")
    contact = document.getElementById("contact")


    if (userScrollPos >= aboutMe.getBoundingClientRect().top && userScrollPos < projects.getBoundingClientRect().top) {
        aboutMe.querySelector('h1').style.animation = "spaceOut 2s ease-in"
        aboutMe.querySelector('h1').style.animationFillMode = "forwards"
    }
    if (userScrollPos >= projects.getBoundingClientRect().top && userScrollPos < skills.getBoundingClientRect().top) {
        projects.querySelector('h1').style.animation = "spaceOut 2s ease-in"
        projects.querySelector('h1').style.animationFillMode = "forwards"
    }
    if (userScrollPos >= skills.getBoundingClientRect().top && userScrollPos < blog.getBoundingClientRect().top) {
        skills.querySelector('h1').style.animation = "spaceOut 2s ease-in"
        skills.querySelector('h1').style.animationFillMode = "forwards"
    }
    if (userScrollPos >= blog.getBoundingClientRect().top && userScrollPos < contact.getBoundingClientRect().top) {
        blog.querySelector('h1').style.animation = "spaceOut 2s ease-in"
        blog.querySelector('h1').style.animationFillMode = "forwards"
    }
    if (userScrollPos >= contact.getBoundingClientRect().top) {
        contact.querySelector('h1').style.animation = "spaceOut 2s ease-in"
        contact.querySelector('h1').style.animationFillMode = "forwards"
    }
})