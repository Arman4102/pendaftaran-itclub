const body = document.body
const angkaElements = document.querySelectorAll(".angka"); // Select all elements with class "angka"
const hyperSatu = document.querySelector(".satu")
const hyperDua = document.querySelector(".dua")
const hyperTiga = document.querySelector(".tiga")
const hyperEmpat = document.querySelector(".empat")
const hyperLima = document.querySelector(".lima")

angkaElements.forEach(angka => {
    angka.addEventListener("click", () => {
        const video = angka.querySelector(".programming"); // Find the video inside the clicked "angka" element
        if (video) {
            video.autoplay = true; // Start playing automatically
            video.loop = true;     // Loop the video
            video.play();          // Start playback
        }
    });
});

hyperSatu.addEventListener("click", () => {
    const programming = "https://www.instagram.com"
    setTimeout(() => {
        window.location.href = programming
    }, 5000)
})

hyperDua.addEventListener("click", () => {
    const programming = "https://www.instagram.com"
    setTimeout(() => {
        window.location.href = programming
    }, 5000)
})

hyperTiga.addEventListener("click", () => {
    const programming = "https://www.instagram.com"
    setTimeout(() => {
        window.location.href = programming
    }, 5000)
})

hyperEmpat.addEventListener("click", () => {
    const programming = "https://www.instagram.com"
    setTimeout(() => {
        window.location.href = programming
    }, 5000)
})

hyperLima.addEventListener("click", () => {
    const programming = "https://www.instagram.com"
    setTimeout(() => {
        window.location.href = programming
    }, 5000)
})