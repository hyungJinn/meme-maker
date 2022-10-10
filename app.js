const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// starting poing is a left and top corner. (0, 0)
ctx.fillRect(200 - 60, 200 - 40, 15, 100);
ctx.fillRect(285 - 60, 200 - 40, 50, 200);
ctx.fillRect(400 - 60, 200 - 40, 15, 100);

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(220 + 10, 75 + 5, 8, Math.PI, 2 * Math.PI);
ctx.arc(260 + 10, 75 + 5, 8, Math.PI, 2 * Math.PI);
ctx.fill();
