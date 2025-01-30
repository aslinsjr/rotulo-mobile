

window.addEventListener("scroll", () => {

    console.log(screen.height)
    console.log(window.scrollY)

    let height = screen.height

    if (document.querySelector("#top").getBoundingClientRect().top < 0) {
        document.querySelector("#top").style.opacity = "0"
        document.querySelector("#fixed").style.opacity = "0.7"

    } else if (document.querySelector("#fixed").getBoundingClientRect().top > 0) {
        document.querySelector("#top").style.opacity = "1"
        document.querySelector("#fixed").style.opacity = "0"

    } 

    console.log(document.querySelector("#bottom").getBoundingClientRect().top)

    if (document.querySelector("#bottom").getBoundingClientRect().top < height + height*0.3) {
        document.querySelector("#fixed").style.opacity = "0"
    }


    if (document.querySelector("#sobre-video").getBoundingClientRect().top < height && document.querySelector("#sobre-video").getBoundingClientRect().top > 0) {

        document.querySelector("#sobre-video").play()

    } else {
        document.querySelector("#sobre-video").pause()
    }

    if (document.querySelector("#depoimentos-video").getBoundingClientRect().top < height && document.querySelector("#depoimentos-video").getBoundingClientRect().top > 0) {

        document.querySelector("#depoimentos-video").play()

    } else {
        document.querySelector("#depoimentos-video").pause()
    }

})

setInterval(() => {
    document.querySelector("#banner02").classList.remove("fade-out")
    document.querySelector("#banner02").style.display = "flex"
    document.querySelector("#banner02").classList.add("fade-in")

    setTimeout(() => {
        document.querySelector("#banner02").classList.remove("fade-in")
        document.querySelector("#banner02").classList.add("fade-out")
    }, 3000)

    setTimeout(() => {
        document.querySelector("#banner02").style.display = "none"
    }, 4000)


}, 6000)

document.querySelectorAll(".cta").forEach((btn) => {
    btn.addEventListener("click", () => {
        window.location.href = "https://api.whatsapp.com/send?phone=5581989867375&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20an%C3%BAncio%20do%20seu%20site%20e%20gostaria%20de%20solicitar%C2%A0um%C2%A0or%C3%A7amento."
    })
});