const closeMenu = () => {
    document.getElementById("sidebar").style.animation = "slideOut 1s ease-in-out forwards"
    setTimeout(() => {
        document.getElementById("sidebar").style.display = "none"
    }, 850)
}
const openmenu = () => {
    document.getElementById("sidebar").style.display = "block";   
    document.getElementById("sidebar").style.animation = "slideIn 1s ease-in-out forwards";   
}
const toggleMenu = () => {
    const x = document.getElementById("sidebar")
    if (x.style.display === "none"){
        openmenu()
    } else {
        closeMenu()
    }
}