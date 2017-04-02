var numbers = [15, 22, 48, 37];
var habits  = ["Press any key to get this party started", "Show", "This","Off", "In", "The","Next","Class" ];

var j = 0;

function setup(){
    createCanvas(window.innerWidth,window.innerHeight,);
    
    //code for the image//
     loadImage("Burning-Money.jpg", function(img) {
    image(img, 0,0,width,height); background(image, [0]);
  });
 
    
    //Too Much Space//
    //Unessacary space///
    //IDK what to do with this space//
    // I couldn't find a way to insert a image and use the drawing function at the same time//

    
}

function draw(){
    background('rgb(0,255,0)');
    
    
    for(var i = 0; i< 4; i++){
        rect((i +1)*100, 200, numbers[i], numbers[i] 
        );
    }
    
    
    fill(0);
    textSize(50);
    text(habits[j], 230, 150);
}

function keyPressed(){
    j ++;
    if(j==habits.length){
        j=0;
    }
    
    
    
}