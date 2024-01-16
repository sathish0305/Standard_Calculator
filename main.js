let container = document.getElementById('container')
let togglebtn = document.getElementById('toggleBtn')
let equation = document.getElementById('equation')
let display = document.getElementById('display')
let darkbutton = document.getElementsByClassName('dark-button')
let operatorbuttons = document.getElementsByClassName('dark-operator')
let title = document.getElementById('title')
let darkbuttons = Array.from(darkbutton)
let opbuttons = Array.from(operatorbuttons)
togglebtn.innerHTML = `<i class="fa-solid fa-circle-half-stroke fa-lg" style="color: #ffffff;"></i>`
let toggler = ()=>{
    let a = container.classList.toggle('light-container')
    togglebtn.classList.toggle('tbutton-light')
    if (a===true){
        togglebtn.innerHTML = `<i class="fa-solid fa-circle-half-stroke fa-flip-horizontal fa-lg" style="color: #ffffff;"></i>`
        equation.classList.remove('dark-equation')
        display.classList.remove('dark-display')
        equation.classList.add('light-equation')
        display.classList.add('light-display')
        title.classList.add('light-title')
        title.classList.remove('dark-title')
        darkbuttons.forEach((element)=>{
            element.classList.add('light-button')
            element.classList.remove('dark-button')
        })
        opbuttons.forEach((element)=>{
            element.classList.add('light-operator')
            element.classList.remove('dark-operator')
        })
    }else{
        togglebtn.innerHTML = `<i class="fa-solid fa-circle-half-stroke fa-lg" style="color: #ffffff;"></i>`
        equation.classList.add('dark-equation')
        display.classList.add('dark-display')
        equation.classList.remove('light-equation')
        display.classList.remove('light-display')
        title.classList.remove('light-title')
        title.classList.add('dark-title')
        darkbuttons.forEach((element)=>{
            element.classList.add('dark-button')
            element.classList.remove('light-button')
        })
        opbuttons.forEach((element)=>{
            element.classList.remove('light-operator')
            element.classList.add('dark-operator')
        })
    }
}
togglebtn.addEventListener('click',toggler)
