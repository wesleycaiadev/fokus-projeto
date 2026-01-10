const html = document.querySelector("html");

const focobt = document.querySelector(".app__card-button--foco");
const DescansoCurtoBt = document.querySelector(".app__card-button--curto");
const DescansoLongoBt = document.querySelector(".app__card-button--longo");

const banner = document.querySelector(".app__image");
const bannerPausar = document.querySelector(".app__card-primary-butto-icon");
const titulo = document.querySelector(".app__title");

const botoes = document.querySelectorAll(".app__card-button");

const startPauseBt = document.querySelector("#start-pause");
const inciarOuPausarBt = document.querySelector("#start-pause span");

const musicaFoco = document.querySelector("#alternar-musica");
const tempoNaTela = document.getElementById("timer");

const musica = new Audio("./sons/luna-rise-part-one.mp3");
const beep = new Audio("./sons/beep.mp3");
const play = new Audio("./sons/play.wav");
const pause = new Audio("./sons/pause.mp3");

musica.loop = true;

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musicaFoco.addEventListener("change", () => {
  if (musicaFoco.checked) {
    musica.play();
  } else {
    musica.pause();
    musica.currentTime = 0;
  }
});

focobt.addEventListener("click", () => {
  tempoDecorridoEmSegundos = 1500;
  alterarContexto("foco");
  focobt.classList.add("active");
});

DescansoCurtoBt.addEventListener("click", () => {
  tempoDecorridoEmSegundos = 300;
  alterarContexto("descanso-curto");
  DescansoCurtoBt.classList.add("active");
});

DescansoLongoBt.addEventListener("click", () => {
  tempoDecorridoEmSegundos = 900;
  alterarContexto("descanso-longo");
  DescansoLongoBt.classList.add("active");
});

function alterarContexto(contexto) {
  mostrarTempo();

  botoes.forEach((botao) => {
    botao.classList.remove("active");
  });

  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `./imagens/${contexto}.png`);

  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;
    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      break;
    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>`;
      break;
    default:
      break;
  }
}

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    beep.volume = 0.5;
    beep.play();

    zerar();
    alert("Seu tempo acabou!");

    beep.pause();
    beep.currentTime = 0;
    return;
  }

  tempoDecorridoEmSegundos -= 1;
  mostrarTempo();
};

startPauseBt.addEventListener("click", inciarOuPausar);

function inciarOuPausar() {
  if (intervaloId) {
    zerar();
    pause.play();
    return;
  }

  play.play();
  intervaloId = setInterval(contagemRegressiva, 1000);

  inciarOuPausarBt.textContent = "Pausar";
  bannerPausar.setAttribute("src", "./imagens/pause.png");
}

function zerar() {
  clearInterval(intervaloId);
  intervaloId = null;

  inciarOuPausarBt.textContent = "Começar";
  bannerPausar.setAttribute("src", "./imagens/play_arrow.png");
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pt-BR", {
    minute: "2-digit",
    second: "2-digit",
  });

  tempoNaTela.innerHTML = tempoFormatado;
}

mostrarTempo();
