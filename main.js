difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(300, 300);
    canvas = createCanvas(300, 300);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log("PoseNet is Initialized!")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
    }
}

function draw() {
    background('lightpink');
    textSize(difference);
    fill('black');
    text('Reet', 50, 400);
}
