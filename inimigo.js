//codigo do inimigo

let yInimigo = [40, 96, 150, 210, 270, 318];
let xInimigos = [600, 600, 600, 600, 600, 600];
let velocidadeInimigos = [2, 2.5, 3.2, 5, 3.2, 2.5];
let comprimentoInimigo = 50;
let alturaInimigo = 40;

function mostraKha(){
  for (let i = 0; i < imagemInimigo123.length; i++){
   image(imagemInimigo123[i], xInimigos[i], yInimigo[i], comprimentoInimigo, alturaInimigo);
  }
}

function movimentaInimigo(){
  for(let i = 0; i < imagemInimigo123.length; i++){
  xInimigos[i] -= velocidadeInimigos[i];
  }
}

function voltaPosicaoInicialDoInimigo(){
  for (let i = 0; i < imagemInimigo123.length; i++){
    if (passouTodaTela(xInimigos[i])){
      xInimigos[i] = 600;
    }
  }
}

function passouTodaTela(xInimigos){
  return xInimigos < - 50;
}



