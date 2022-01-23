var canvas=new fabric.Canvas("myCanvas");
playerX=10;
playerY=10;
blockwidth=30;
blockheight=30;
var playerobject="";
var blockobject="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140); 
        playerobject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerobject);
    });
}
function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
        blockobject=Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight); 
        blockobject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockobject);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true && keypress=="80"){
        console.log("shiftandp preesed togther");
        blockwidth=blockwidth+10;
        blockheight=blockheight+10;
        document.getElementById("current_width").innerHTML=blockwidth;
        document.getElementById("current_heigth").innerHTML=blockheight;
    }

    if(e.shiftKey==true && keypress=="77"){
        console.log("shiftandm preesed togther");
        blockwidth=blockwidth-10;
        blockheight=blockheight-10;
        document.getElementById("current_width").innerHTML=blockwidth;
        document.getElementById("current_heigth").innerHTML=blockheight;
    }
   if(keypress=="38"){
       UP();
       console.log("up");
   }
   if(keypress=="40"){
    DOWN();
    console.log("down");
}
if(keypress=="37"){
    LEFT();
    console.log("left");
}
if(keypress=="39"){
    RIGHT();
    console.log("right");
}     
if(keypress=="84"){
    new_img("trunk.jpg");
}
if(keypress=="71"){
    new_img("ground.png");
}
if(keypress=="89"){
    new_img("yellow_wall.png");
}
if(keypress=="87"){
    new_img("wall.jpg");
}
if(keypress=="76"){
    new_img("light_green.png");
}
if(keypress=="85"){
    new_img("unique.png");
}
if(keypress=="82"){
    new_img("roof.jpg");
}
if(keypress=="68"){
    new_img("dark_green.png");
}
if(keypress=="67"){
    new_img("cloud.jpg");
}
}
function UP(){
    if(playerY>=0){
        playerY=playerY-blockheight;
        console.log("blockimg height="+blockheight);
        console.log("whenuparrowpressed="+playerX+"y="+playerY);
        canvas.remove(playerobject);
        player_update();

    }
}
function DOWN(){
    if(playerY<=500){
        playerY=playerY+blockheight;
        console.log("blockimg height="+blockheight);
        console.log("whenuparrowpressed="+playerX+"y="+playerY);
        canvas.remove(playerobject);
        player_update();
        
    }
}
function LEFT(){
    if(playerX>=0){
        playerX=playerX-blockwidth;
        console.log("blockimg width="+blockwidth);
        console.log("whenuparrowpressed="+playerX+"y="+playerY);
        canvas.remove(playerobject);
        player_update();
        
    }
}
function RIGHT(){
    if(playerX<=850){
        playerX=playerX+blockwidth;
        console.log("blockimg width="+blockwidth);
        console.log("whenuparrowpressed="+playerX+"y="+playerY);
        canvas.remove(playerobject);
        player_update();
        
    }
}