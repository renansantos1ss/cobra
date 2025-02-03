const cobra ={
x: 400,
y: 200,
cor: "red",
tamanho:25,
vida:3,
direcao:"direita",
desenhar(){
    canvasCtx.fillStyle=this.cor;
    canvasCtx.fillRect(this.x,this.y,this.tamanho,this.tamanho);
    this.mover();
  },
  mover(){
     if(this.direcao == "d")
         this.x++;
     if(this.direcao == "e")
         this.x--;
     if(this.direcao == "b")
         this.y++;
     if(this.direcao == "c")
         this.y--;
     
    },
  morrer(){
    this.vida--
  }
}
cobra.desenhar();