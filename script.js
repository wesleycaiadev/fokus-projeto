const html = document.querySelector("html");
const focobt =  document.querySelector(".app__card-button--foco")
const DescansoCurtoBt = document.querySelector(".app__card-button--curto")
const DescansoLongoBt = document.querySelector(".app__card-button--longo")

const banner = document.querySelector(".app__image")


focobt.addEventListener("click", ()=>  {
    alterarContexto("foco")
})

DescansoCurtoBt.addEventListener("click", ()=> {
     alterarContexto("descanso-curto")
} )

DescansoLongoBt.addEventListener("click" , ()=> {
   alterarContexto("descanso-longo")
})

function alterarContexto(contexto) {
   html.setAttribute("data-contexto" , contexto)
   banner.setAttribute("src", `/imagens/${contexto}.png`)
}