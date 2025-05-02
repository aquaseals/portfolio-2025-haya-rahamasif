let portfolioTitle = document.getElementById("portfolio-title")

function welcome() {
    //document.getElementById("portfolio-title").style.letterSpacing = "15px";
}

document.addEventListener("scroll", function() {
    let maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let widthBasedOnScrollPercentage = (window.scrollY/maxHeight)*100 // calulcating what fraction of the webpage the user has scrolled thorugh
    document.getElementById("progress-bar").style.width = `${widthBasedOnScrollPercentage}%` // sets width of progress bar based on calculated percentage
})