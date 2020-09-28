function setup() {
	createCanvas(500, 500);
	background(255);
}

var angle = 0.0;

function draw(){
	push();
	translate(250, 250);
	rotate(angle);
	line(50, 100, 50, 300);
	pop();

	angle = angle + 0.1;
}