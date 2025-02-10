function start() {
 tela.desenhar();
 cobra.desenhar();
 placar.desenhar();
 comida.desenhar();
 if (cobra.vida > 0)
    requestAnimationFrame(start)
}
start();
