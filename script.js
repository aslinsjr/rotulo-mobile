// // Contador animado
// function animateCounter(id, start, end, duration) {
//     let obj = document.getElementById(id);
//     let range = end - start;
//     let increment = range / (duration / 10);
//     let current = start;

//     let timer = setInterval(() => {
//         current += increment;
//         obj.textContent = Math.floor(current);
//         if (current >= end) {
//             obj.textContent = end;
//             clearInterval(timer);
//         }
//     }, 15);
// }

// // Iniciar contadores quando a seção estiver visível
// document.addEventListener("DOMContentLoaded", () => {
//     let impactoSection = document.querySelector("#sobre");

//     let observer = new IntersectionObserver(entries => {
//         if (entries[0].isIntersecting) {
//             animateCounter("clientes", 0, 2000, 1000);
//             animateCounter("pecas", 0, 500000, 1000);
//             observer.disconnect();
//         }
//     });

//     observer.observe(impactoSection);
// });

// // Depoimentos Slider
// let slideIndex = 0;
// function slideDepoimentos() {
//     let slides = document.querySelectorAll(".slide");
//     slideIndex++;
//     if (slideIndex >= slides.length) slideIndex = 0;
//     document.querySelector(".slider").style.transform = translateX(`${-slideIndex * 100}%`);
// }

// setInterval(slideDepoimentos, 4000);


window.addEventListener("scroll", () => {

    console.log(screen.height)
    console.log(window.scrollY)

    let height = screen.height

    if (document.querySelector("#sobre-video").getBoundingClientRect().top < height && document.querySelector("#sobre-video").getBoundingClientRect().top > -(height * 2.8)) {
        document.querySelector("#btn-action").innerHTML = ""
        document.querySelector(".cta-btn").classList.add("btn-transform")
    } else {
        document.querySelector("#btn-action").innerHTML = "Quero meu <br> orçamento agora"
        document.querySelector(".cta-btn").classList.remove("btn-transform")
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

document.querySelectorAll(".cta-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        window.location.href = "https://api.whatsapp.com/send?phone=5581989867375&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20an%C3%BAncio%20do%20seu%20site%20e%20gostaria%20de%20solicitar%C2%A0um%C2%A0or%C3%A7amento."
    })
});