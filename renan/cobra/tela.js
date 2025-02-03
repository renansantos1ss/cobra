const tela= {
 largura: 1024,
 altura: 768,
 cor: "blue",
desenhar(){
    canvasCtx.fillStyle = this.cor;
    canvasCtx.fillRect(0,60,this.largura,this.altura);
 }
}
tela.desenhar();