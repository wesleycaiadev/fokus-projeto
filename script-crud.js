const buttonAdiconarTarefa = document.querySelector(".app__button--add-task")
const mostrarTarefa = document.querySelector(".app__form-add-task")


buttonAdiconarTarefa.addEventListener("click" , ()=>{
    mostrarTarefa.classList.toggle("hidden")
})