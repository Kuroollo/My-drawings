const designshowbuton = document.querySelector("#design-show-buton")
const show = document.querySelector("#show")


designshowbuton.addEventListener("click" , () =>{
    show.classList.toggle("show")
    designshowbuton.style.display = "none"
})
