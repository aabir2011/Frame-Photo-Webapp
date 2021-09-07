function preload(){
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    fill(52, 235, 216);
    rect(26,100,50,280);
    rect(50,35,550,50);
    rect(565,100,50,280);
    rect(50,400,550,50);
    fill(255, 204, 0);
    rect(10,20,80,80,5,20,10,20);
    rect(550,20,80,80,20,5,10,20);
    rect(550,380,80,80,20,20,5,20);
    rect(10,380,80,80,20,20,10,5);

   
}

function draw(){
    image(video, 100, 100 , 440, 280);

}

