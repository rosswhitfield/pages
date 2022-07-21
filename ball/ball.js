import Ball from "./Ball.js";

const ballArray = [
  new Ball("green", "100", "300", "30"),
  new Ball("red", "300", "300", "40"),
  new Ball("blue", "500", "300", "50"),
];

const image = document.getElementById("ball_image");

const drawBall = function (ball) {
  let svg = ball.svg();

  svg.addEventListener("mousedown", (e) => {
    svg.isSelected = true;
    svg.style["fill"] = "black";
  });

  svg.addEventListener("mouseup", (e) => {
    svg.isSelected = false;
    svg.style["fill"] = svg.getAttribute("original_color");
  });

  image.appendChild(svg);

  return svg;
};

const ballList = ballArray.map((ball) => {
  return drawBall(ball);
});

image.addEventListener("mousemove", (e) => {
  ballList.forEach((ball) => {
    if (ball.isSelected === true) {
      ball.setAttribute("cx", e.offsetX);
      ball.setAttribute("cy", e.offsetY);
    }
  });
});
