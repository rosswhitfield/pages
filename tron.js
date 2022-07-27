const board = document.getElementById("board");

let bike = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
bike.setAttribute("points", "300,300 300,300");
bike.setAttribute("stroke", "blue");
bike.setAttribute("stroke-width", 2);
bike.id = "bike";
bike.dx = 1;
bike.dy = 0;
bike.directionChanged = false;

board.appendChild(bike);

let direction_map = {
  w: { x: 0, y: -1 },
  s: { x: 0, y: 1 },
  a: { x: -1, y: 0 },
  d: { x: 1, y: 0 },
};

document.addEventListener("keypress", (e) => {
  let dd = direction_map[e.key];
  bike.dx = dd.x;
  bike.dy = dd.y;
  bike.directionChanged = true;
});

setInterval(function () {
  const n = bike.points.length;
  const currentPos = bike.points[n - 1];
  let newPos = board.createSVGPoint();
  newPos.x = Math.max(Math.min(currentPos.x + bike.dx, 600), 0);
  newPos.y = Math.max(Math.min(currentPos.y + bike.dy, 600), 0);
  if (bike.directionChanged) {
    bike.points.appendItem(newPos);
  } else {
    bike.points[n - 1].x = newPos.x;
    bike.points[n - 1].y = newPos.y;
  }
  bike.directionChanged = false;
}, 10);
