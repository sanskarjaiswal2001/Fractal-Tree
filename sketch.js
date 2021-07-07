var angle = 0;
var canvasSide = 700;
function setup() 
{
    createCanvas(canvasSide,canvasSide);
    slider = createSlider (0, TWO_PI, PI/4, 0.001);
}

function draw() 
{  
    background(30);
    angle = slider.value();
    var len = 100;
    stroke('#DA0037');
    translate(canvasSide/2, height); //change position of origin from top left to bottom centre
    branch(200);
}

function branch(len)
{
    line(0, 0, 0, -len);
    translate(0,-len);
    if (len > 4)
    {
        push(); //save location for starting a branch 
        rotate(angle);
        branch(len * 0.67);
        pop(); //pop the location which was used to draw the branch 
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}