let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}
let directon = "right";
let food = {
   x: Math.floor(Math.random() * 15 + 1) * box,
   y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "#6EF0E9"
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function ciriarCobrinha(){
  for(i=0; i < snake.length; i++){
      context.fillStyle = "green";
      context.fillRect(snake[i].x,snake[i].y, box, box);
  }
}

function drawFood() {
    context.fillStyle = "red"
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update);

function update(event){
    if (event.keyCode == 37 && directon != "right") directon = "left"; 
    if (event.keyCode == 38 && directon != "down") directon = "up"; 
    if (event.keyCode == 39 && directon != "left") directon = "right"; 
    if (event.keyCode == 40 && directon != "up") directon = "down"; 
        
}


function iniciarJogo(){

    if(snake[0].x > 15 * box && directon == "right") snake[0].x = 0;
    if(snake[0].x < 0 && directon == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && directon == "down") snake[0].y = 0;
    if(snake[0].y < 0 && directon == "up") snake[0].y = 16 * box

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }



   
    criarBG();
    ciriarCobrinha();
    drawFood();

 let snakeX = snake[0].x;
 let snakeY = snake[0].y;
 
 if (directon == "right") snakeX += box;
 if (directon == "left") snakeX -= box;
 if (directon == "up") snakeY -= box;
 if (directon == "down") snakeY += box;
   
 if(snakeX != food.x || snakeY != food.y){
     snake.pop();
 }
 else{
   food.x = Math.floor(Math.random() * 15 + 1) * box;
   food.y = Math.floor(Math.random() * 15 + 1) * box;
 }

   let newHead = {
     x: snakeX,
     y: snakeY
   }
  
   snake.unshift(newHead)

}

let jogo = setInterval(iniciarJogo, 100);