const html = document.querySelector("html");
const focobt =  document.querySelector(".app__card-button--foco")
const DescansoCurtoBt = document.querySelector(".app__card-button--curto")
const DescansoLongoBt = document.querySelector(".app__card-button--longo")


focobt.addEventListener("click", ()=>  {
    html.setAttribute("data-contexto" , "foco")
})

DescansoCurtoBt.addEventListener("click", ()=> {
     html.setAttribute("data-contexto" ,"descanso-curto")
} )

DescansoLongoBt.addEventListener("click" , ()=> {
    html.setAttribute("data-contexto", "descanso-longo")
})