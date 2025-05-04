window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

document.addEventListener("scroll", function() {
    let maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let userScrollPos = window.scrollY
    let widthBasedOnScrollPercentage = (userScrollPos/maxHeight)*70// calulcating what fraction of the webpage the user has scrolled thorugh
    document.getElementById("progress-bar").style.width = `${widthBasedOnScrollPercentage}vw` // sets width of progress bar based on calculated percentage
    aboutMe = document.getElementById("about-me")
    projects = document.getElementById("projects")
    skills = document.getElementById("skills")
    blog = document.getElementById("blog")
    contact = document.getElementById("contact")


    if (userScrollPos >= aboutMe.getBoundingClientRect().top) {
        console.log("about me in view")
        aboutMe.querySelector('h1').style.animation = "spaceOut 2s ease-in"
        aboutMe.querySelector('h1').style.animationFillMode = "forwards"
    }
    if (userScrollPos >= projects.getBoundingClientRect().top) {
        console.log("projects in view")
        projects.querySelector('h1').style.animation = "spaceOut 2s ease-in"
        projects.querySelector('h1').style.animationFillMode = "forwards"
    }
    if (userScrollPos >= skills.getBoundingClientRect().top) {
        console.log("skills in view")
        skills.querySelector('h1').style.animation = "spaceOut 2s ease-in"
        skills.querySelector('h1').style.animationFillMode = "forwards"
    }
    if (userScrollPos >= blog.getBoundingClientRect().top) {
        console.log("blog in view")
        blog.querySelector('h1').style.animation = "spaceOut 2s ease-in"
        blog.querySelector('h1').style.animationFillMode = "forwards"
    }
    if (userScrollPos >= contact.getBoundingClientRect().top) {
        console.log("contact in view")
        contact.querySelector('h1').style.animation = "spaceOut 2s ease-in"
        contact.querySelector('h1').style.animationFillMode = "forwards"
    }
})