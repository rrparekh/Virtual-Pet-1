//Create variables here
var dog,database,foodS,foodStock;
var dogImage,happyDogImage;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happyDogImage=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  console.log(database);

  var foodStock=database.ref('Food');
  foodStock.on("value",readStock,showError);

  dog=createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale=0.1;

  
}


function draw() {  
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
   // writeStock(foodStock);
    dog.addImage(happyDogImage);
  }
 
  drawSprites();
  textSize(20);
  fill("white");
  text("Note:Press UP_ARROW Key To Feed Drago Milk",40,50);
  text("Food remaining:"+foodStock,150,200);
  //add styles here

}

function readStock(data){
  foodS = data.val();
  
}

//function writeStock(x){
 // database.ref('/').update({
  //Food:x
//})
//}

function showError(){
  console.log("Error in writing to the database");
}

