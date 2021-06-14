canvas=document.getElementById("myCanvas");
cntx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car2_width=120;
car2_height=70;

backround_img="2.jpg";
car1_img="car1.png";
car2_img="car2.png";
car1_x=10;
car1_y=10;
car2_x=10;
car2_y=100;

function add(){
    backround_imgtag=new Image();
    backround_imgtag.src=backround_img;
    backround_imgtag.onload=uploadBackround;

    car1_imgtag=new Image();
    car1_imgtag.src=car1_img;
    car1_imgtag.onload=uploadcar1;

    car2_imgtag=new Image();
    car2_imgtag.src=car2_img;
    car2_imgtag.onload=uploadcar2;
}


function uploadBackround(){
    cntx.drawImage(backround_imgtag,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    cntx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    cntx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keyDown);
function my_keyDown(e){
    keyPressed=e.keyCode;
    console.log("keyPressed is - "+keyPressed);

    if (keyPressed==38){
        //up();
        console.log("up is pressed");
    }
    if (keyPressed==40){
        //down();
        console.log("down is pressed");
    }
    if (keyPressed==37){
       //left();
        console.log("left is pressed");
    }
    if (keyPressed==39){
        //right();
        console.log("right is pressed");
    }
}

function car1_up()
{
    if(car1_y>=0)
    {
        car1_y=car1_y+10
        console.log("When up arrow is pressed, x="+car1_x+" y="+car1_y)
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down()
{
    if(car1_y>=0)
    {
        car1_y=car1_y-10
        console.log("When down arrow is pressed, x="+car1_x+" y="+car1_y)
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}