let container = document.getElementById('container')
let togglebtn = document.getElementById('toggleBtn')

togglebtn.innerHTML = `<i class="fa-solid fa-circle-half-stroke fa-lg" style="color: #ffffff;"></i>`
let toggler = ()=>{
    let a = container.classList.toggle('light-container')
    togglebtn.classList.toggle('tbutton-light')
    (a===true)? togglebtn.innerHTML = `<i class="fa-solid fa-circle-half-stroke fa-flip-horizontal fa-lg" style="color: #ffffff;"></i>` :  togglebtn.innerHTML = `<i class="fa-solid fa-circle-half-stroke fa-lg" style="color: #ffffff;"></i>`
}

togglebtn.addEventListener('click',toggler)