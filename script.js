/* eslint-disable no-unused-vars */
let numCircleId = 1;
let points = 0;
let circle = '';
let contClick = 1;
function gerarCor() {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function coresOpções() {
  for (let i = 0; i < 6; i += 1) {
    const cor = gerarCor();
    const CircleId = `ball${numCircleId}`;
    numCircleId += 1;
    circle = document.getElementById(CircleId);
    circle.setAttribute('style', `background-color:${cor}`);
  }
}

function geraResposta() {
  let correct = parseInt(Math.random() * 6) + 1;
  circle = document.getElementById(`ball${correct}`);
  circle.setAttribute('onclick', 'respostaCorreta()');
  correct = circle.getAttribute('style').split('rgb');
  const texto = document.getElementById('rgb-color');
  texto.innerHTML = correct[1];
}

function pontos(resposta) {
  points += resposta;
  document.getElementById('score').innerHTML = `Pontos: ${points}`;
}

function respostaErrada() {
  if (contClick < 2) {
    document.getElementById('answer').innerHTML = 'Errou! Tente novamente!';
    pontos(-1);
  } else {
    alert('Ja acertou nesta rodada, reinicie as cores!');
  }
}

function respostaCorreta() {
  if (contClick < 2) {
    document.getElementById('answer').innerHTML = 'Acertou!';
    pontos(+3);
    circle.setAttribute('onclick', 'respostaErrada()');
  } else {
    alert('Ja acertou nesta rodada, reinicie as cores!');
  }
  contClick += 1;
}

function iniciarJogo() {
  numCircleId = 1;
  contClick = 1;
  coresOpções();
  geraResposta();
  pontos(0);
  document.getElementById('answer').innerHTML = 'Escolha uma cor';
}

window.onload = iniciarJogo;
