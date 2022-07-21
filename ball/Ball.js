class Ball {
  constructor(color, cx, cy, r) {
    (this.color = color), (this.cx = cx), (this.cy = cy), (this.r = r);
  }
  svg() {
    let newCircle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    newCircle.setAttribute("cx", this.cx);
    newCircle.setAttribute("cy", this.cy);
    newCircle.setAttribute("r", this.r);
    newCircle.setAttribute("fill", this.color);
    newCircle.setAttribute("original_color", this.color);
    newCircle.setAttribute("isSelected", false);
    return newCircle;
  }
}

export default Ball;
