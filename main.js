let container = document.getElementById('container')
let togglebtn = document.getElementById('toggleBtn')
let equation = document.getElementById('equation')
let display = document.getElementById('display')
console.log(equation.innerHTML)
console.log(display)

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
    }else{
        togglebtn.innerHTML = `<i class="fa-solid fa-circle-half-stroke fa-lg" style="color: #ffffff;"></i>`
        equation.classList.add('dark-equation')
        display.classList.add('dark-display')
        equation.classList.remove('light-equation')
        display.classList.remove('light-display')
    }
}
togglebtn.addEventListener('click',toggler)
