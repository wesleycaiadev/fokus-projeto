const html = document.querySelector("html");
const focobt =  document.querySelector(".app__card-button--foco")
const DescansoCurtoBt = document.querySelector(".app__card-button--curto")
const DescansoLongoBt = document.querySelector(".app__card-button--longo")
const banner = document.querySelector(".app__image")
const titulo = document.querySelector(".app__title")
const botoes = document.querySelectorAll(".app__card-button")

const musicaFoco = document.querySelector("#alternar-musica")
const musica = new Audio("/sons/luna-rise-part-one.mp3")

musica.loop = true


musicaFoco.addEventListener("change", ()=>{
    if(musica.paused){
        musica.play()
    } else{
        musica.pause()
    }
})

focobt.addEventListener("click", ()=>  {
    alterarContexto("foco")
    focobt.ATTRIBUTE_NODE
    focobt.classList.add("active")                                                                                                                                      
})

DescansoCurtoBt.addEventListener("click", ()=> {
     alterarContexto("descanso-curto")
      DescansoCurtoBt.classList.add("active")  
} )

DescansoLongoBt.addEventListener("click" , ()=> {
   alterarContexto("descanso-longo")
    DescansoLongoBt.classList.add("active") 
})

function alterarContexto(contexto) {
  botoes.forEach(function(contexto){
    contexto.classList.remove("active")
  })
   html.setAttribute("data-contexto" , contexto)
   banner.setAttribute("src", `/imagens/${contexto}.png`)

   switch (contexto) {
    case "foco":
    titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
        break;
   case "descanso-curto":
    titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong"> Faça uma pausa curta! </strong>`
        break
    case "descanso-longo":
         titulo.innerHTML = `Hora de voltar à superfície.
<strong class="app__title-strong">Faça uma pausa longa. </strong>`
    default:
        break;
   }
}