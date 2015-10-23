// illustration.js

var BackgroundSImage;
var BlazingSun1Image;
var BlazingSun2Image;
var BlazingSun3Image;
var WhiteCloud1Image;
var WhiteCloud2Image;
var BoyImage;
var MadBoy;


var WhiteCloud1X = -100;
var WhiteCloud2X = 600;


function preload() {
	BackgroundSImage = loadImage("Images/BackgroundS.png");
	BlazingSun1Image = loadImage("Images/BlazingSun1.png");
	BlazingSun2Image = loadImage("Images/BlazingSun2.png");
	BlazingSun3Image = loadImage("Images/BlazingSun3.png");
	WhiteCloud1Image = loadImage("Images/WhiteCloud1.png");
	WhiteCloud2Image = loadImage("Images/WhiteCloud2.png");
	BoyImage = loadImage("Images/Boy.png");
	MadBoy = loadImage("Images/MadBoy.png");
}

function setup() {
	createCanvas(800, 600);
}

function draw() {
	image(BackgroundSImage, 40, 0);
	var x = random(0, 5);
	var i = random(0, 2);
	var j = random(0, 8);
	// frameRate(4);

	image(BlazingSun1Image, 330 + x, 40);
	image(BlazingSun2Image, 430 + i, 120);
	image(BlazingSun3Image, 340 + j, 120);

	// animate the clouds

	WhiteCloud1X += 0.8;
	if (WhiteCloud1X > 800) {
		WhiteCloud1X = -200;

	}
	image(WhiteCloud1Image, WhiteCloud1X, 100);

	WhiteCloud2X += 0.5;
	if (WhiteCloud2X > 800) {
		WhiteCloud2X = -200;


	}
	image(WhiteCloud2Image, WhiteCloud2X, 50);


	if (mouseIsPressed) {
		image(BoyImage, 230, 250);
	} else {
		image(MadBoy, 230, 250);
	}
	//bad Day



}
