//imagens do jogo e sons

let imagemDaEstrada;
let imagemDoAtor;
let imagemKha;
let imagemRengar;
let imagemLee;
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/kindred.png")
  imagemKha = loadImage("imagens/kha.png")
  imagemRengar = loadImage("imagens/rengar.png")
  imagemLee = loadImage("imagens/lee.png")
  imagemInimigo123 = [imagemKha, imagemRengar, imagemLee, imagemKha, imagemRengar, imagemLee];
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  }