function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraKha();
  movimentaInimigo();
  movimentaAtor();
  voltaPosicaoInicialDoInimigo();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

