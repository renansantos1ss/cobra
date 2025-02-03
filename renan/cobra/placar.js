const placar = {
    largura:1024,
    altura:60,
    cor:"red",
    corTexto:"black",
    pontuacao: 0,
    nomeJogo: "IFRJ cobra",
    desenhar(){
        canvasCtx.fillStyle=this.cor;
        canvasCtx.fillRect(0,0,this.largura,this.altura);
        canvasCtx.fillStyle= this.corTexto;
        canvasCtx.font="20px fantasy";
        canvasCtx.textAlign="center";
        canvasCtx.textBaseline="middle";
        canvasCtx.fillText(this.nomeJogo,400,30)
        canvasCtx.font= "14px fantasy";
        canvasCtx.textAlign="right";
        canvasCtx.textBaseline="top";
        canvasCtx.fillText("pontuacao"+this.pontuacao,790,40)

    }
}
placar.desenhar();



    