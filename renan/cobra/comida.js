class Comida{
    imagem;
    imagemArq="maça.png";
    tamanho=10
    constructor(x,y){
        this.x=y;
        this.y=x;
        this.imagem = new Image();
        this.imagem.src = this.imagemaArq;
    };
    desenhar(){
        canvasCtx.drawImage(this.imagem,this.x,this.y,this.tamanho,this.tamanho)

    }

}
   


