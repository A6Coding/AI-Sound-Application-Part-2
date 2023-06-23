songOne = "";
songTwo = "";

function preload() {
    songOne = loadSound("music.mp3");
    songTwo = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 350);
    canvas.position(385, 350);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 350);
}

function play() {
    songOne.play();
    songTwo.play();
}