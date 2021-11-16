var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, bordas;
var musica;

function preload(){
    // carregue o som aqui
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    bloco3 = createSprite(510,580,200,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(725,580,200,30)
    bloco4.shapeColor = "green";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 15;
    bola.velocityY = 13;

}

function draw() {
    background(rgb(169,169,169));
    bordas=createEdgeSprites();
    bola.bounceOff(bordas);

    
    //escreva o código para a bola quicar no bloco1
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        bola.scale = bola.scale - 0.5
      
    }
    if(bloco2.isTouching(bola) && bola.bounceOff(bloco2)){
        bola.shapeColor = "orange";
        bola.velocityX =  0;
        bola.velocityY = 0;
    }
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
       // music.play("music.mp3");
       bola.size = 15;
    }

    if(bloco4.isTouching(bola)&& bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
        //escreva o código para definir velocityX e velocityY da bola como 0
        bola.scale = bola.scale + 0.5
        //escreva o código para parar a música
    }

    //escreva o código para a bola quicar no bloco3

    //escreva o código para a bola quicar no bloco4

    drawSprites();
}