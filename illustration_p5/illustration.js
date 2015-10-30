// illustration.js

var BackgroundSImage;
var BackgroundBImage;
var BlazingSun1Image;
var BlazingSun2Image;
var BlazingSun3Image;
var WhiteCloud1Image;
var WhiteCloud2Image;
var GrayCloud1Image;
var GrayCloud2Image;
var light1Image;
var light2Image;
var light3image;
var Raindrop1image;
var Raindrop2image;


var BoyImage;
var MadBoy;
var Hide;


var WhiteCloud1X = -100;
var WhiteCloud2X = 600;
var GrayCloud1X = -100;
var GrayCloud2X = -400;



var currentScene = "day";


function preload() {
	BackgroundSImage = loadImage("Images/BackgroundS.png");
	BackgroundBImage = loadImage("Images/BackgroundB.png");
	BlazingSun1Image = loadImage("Images/BlazingSun1.png");
	BlazingSun2Image = loadImage("Images/BlazingSun2.png");
	BlazingSun3Image = loadImage("Images/BlazingSun3.png");
	WhiteCloud1Image = loadImage("Images/WhiteCloud1.png");
	WhiteCloud2Image = loadImage("Images/WhiteCloud2.png");
	GrayCloud1Image = loadImage("Images/GrayCloud1.png");
	GrayCloud2Image = loadImage("Images/GrayCloud2.png");
	light1Image = loadImage("Images/light1.png");
	light2Image = loadImage("Images/light2.png");
	light3Image = loadImage("Images/light3.png");
	Raindrop1Image = loadImage("Images/Raindrop1.png");
	Raindrop2Image = loadImage("Images/Raindrop2.png");


	HideImage = loadImage("Images/Hide.png");


	BoyImage = loadImage("Images/Boy.png");
	MadBoy = loadImage("Images/MadBoy.png");
}

function setup() {
	createCanvas(800, 600);
}

function draw() {
	if (currentScene === "day") {
		drawDay();
	} else if (currentScene === "night") {
		drawNight();
	}


}

function drawDay() {
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
	image(BoyImage, 230, 250);
	//hide clouds
	image(HideImage, -190, -60);
}

function drawNight() {
	image(BackgroundBImage, 50, 0);
	//graycloud
	GrayCloud1X += 0.8;
	if (GrayCloud1X > 300) {
		GrayCloud1X = 300;
		image(light3Image, 340, 110 + random(0, 5));

	}
	image(GrayCloud1Image, GrayCloud1X, 100);

	GrayCloud2X += 0.8;
	if (GrayCloud2X > 150) {
		GrayCloud2X = 150;
		image(Raindrop2Image, 180, 100, random(10));
		image(light2Image, 180, 100 + random(0, 10));
		image(light3Image, 230, 100 + random(0, 3));


	}
	image(GrayCloud2Image, GrayCloud2X, 50);

	//hide clouds
	image(HideImage, -190, -60);
	// /// boy
	image(MadBoy, 230, 250);

	if (mouseX > 100) {
		if (mouseX < 300) {
			if (mouseY > 100) {
				if (mouseY < 300) {
					image(MadBoy, 230 + random(0, 5), 250 + random(0, 6));

				}
			}

		}
	}

}

function mouseReleased() {
	if (currentScene === "day") {
		currentScene = "night";
	} else {
		currentScene = "day";
	}
}
