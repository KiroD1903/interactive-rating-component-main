const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thanks")
const submitBtn= document.getElementById("submit")
const rating= document.getElementById("rating")
const rerateBtn= document.getElementById("rerate")
const rates= document.querySelectorAll(".btn-rate")

submitBtn.addEventListener("click", ()=>{
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rerateBtn.addEventListener("click", ()=> {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display= "block"
})

rates.forEach((rate)=>{
    rate.addEventListener("click", ()=>{
        console.log(rate.innerHTML)
       rating.innerHTML=rate.innerHTML
    })
})
