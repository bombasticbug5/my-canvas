// canvas stet up
var cnv = document.getElementById("mycanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 500;

//sky
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 400, 500);

//grass
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 450, 500);

// road
ctx.fillStyle = "black";
ctx.fillRect(0, 375, 400, 100);

// road separators
ctx.fillStyle = "orange";
ctx.fillRect(0, 420, 400, 7);

//house walls
ctx.fillStyle = " beige";
ctx.fillRect(150, 120, 245, 180);
// chimney
ctx.fillStyle = "grey";
ctx.fillRect(340, 40, 25, 70);
// roof
ctx.fillStyle = "brown";
ctx.beginPath();
ctx.moveTo(270, 0);
ctx.lineTo(150, 120);
ctx.lineTo(400, 120);
ctx.lineTo(375, 100);
ctx.fill();
// doors
ctx.fillStyle = "taupe";
ctx.fillRect(300, 200, 50, 100);

// door knob
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(340, 260, 5, 0, 2 * Math.PI);
ctx.fill();
//window
ctx.fillStyle = "lightgrey";
ctx.fillRect(170, 200, 70, 50);
// window lines
ctx.fillStyle = "black";
ctx.fillRect(200, 200, 3, 50);

// window lines
ctx.fillStyle = "black";
ctx.fillRect(170, 225, 70, 3);
//tree root
ctx.fillStyle = "brown";
ctx.fillRect(55, 200, 15, 100);
// tree bush
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(60, 160, 50, 0, 2 * Math.PI);
ctx.fill();

// sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(50, 50, 40, 0, 2 * Math.PI);
ctx.fill();

// Title
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("my house", 30, 20);

//img
// Clouds
let stop = document.getElementById("img");
ctx.drawImage(stop, 20, 260, 44, 110);
