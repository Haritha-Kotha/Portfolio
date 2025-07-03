const settingsBox=document.querySelector(".settings-box")
const colorsBtn=document.querySelector(".icon1")
const altColors=document.querySelectorAll(".alt-color")
const theme=document.querySelector(".icon2")
const  menuOptions=document.querySelectorAll("li a")
const darkMode=document.querySelector(".icon2 i")

document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault()
    })
})

window.addEventListener("load",()=>{
    darkMode.classList.add("fa-moon")
})

console.log(menuOptions)
menuOptions.forEach(item=>{
    item.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active")
        item.classList.add("active")
       
    })
   
})

colorsBtn.addEventListener("click",()=>{
    settingsBox.classList.toggle("show")
})
window.addEventListener("scroll",()=>{
    if(settingsBox.classList.contains("show"))
    {
        settingsBox.classList.remove("show")
    }
})


function changeColor(color)
{
    altColors.forEach((style)=>{
        if(color===style.getAttribute("title"))
        {
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled","true")
        }
    })
    settingsBox.classList.remove("show")
}
theme.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    if(darkMode.classList.contains("fa-moon"))
    {
        darkMode.classList.replace("fa-moon","fa-sun")
    }
    else{
        darkMode.classList.replace("fa-sun","fa-moon")

    }
})