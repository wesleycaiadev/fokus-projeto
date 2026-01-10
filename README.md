# Focusflow - Aplicativo Pomodoro

Aplicativo web baseado na Técnica Pomodoro, desenvolvido com HTML, CSS e JavaScript (DOM). Projeto feito como prática de manipulação do DOM no JavaScript durante os estudos pela Alura.

## Sobre o projeto

O Focusflow ajuda a organizar ciclos de foco e pausas com três modos:

- Foco: 25 minutos (1500s)
- Descanso curto: 5 minutos (300s)
- Descanso longo: 15 minutos (900s)

A interface muda conforme o modo selecionado e o timer faz contagem regressiva.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla / ES6+)

## Funcionalidades

- Alternar modos (foco/descanso curto/descanso longo)
- Iniciar e pausar o temporizador
- Contagem regressiva usando `setInterval` / `clearInterval`
- Atualização do tempo na tela via manipulação do DOM
- Alteração de tema/imagem conforme o contexto
- Música/áudios (opcional) e feedback sonoro

## Como executar

1. Baixe/clone este repositório
2. Abra o arquivo `index.html` no navegador

## Aprendizados (DOM)

Neste projeto foram praticados conceitos como:

- Seleção de elementos (`querySelector`, `querySelectorAll`, `getElementById`)
- Escuta de eventos (`addEventListener`)
- Manipulação de classes (`classList.add`, `classList.remove`)
- Alteração de atributos (`setAttribute`)
- Atualização de conteúdo (`innerHTML`, `textContent`)

## Melhorias futuras (ideias)

- Permitir personalizar o tempo de foco/pausas
- Notificação do navegador ao finalizar o tempo
- Histórico de ciclos concluídos
- Persistência no LocalStorage

## Autor

Projeto desenvolvido para fins de estudo (Alura) — prática de JavaScript e DOM.
