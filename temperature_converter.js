const image = document.querySelector("svg");

// draw dial
for (let t = -480; t <= 500; t += 20) {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", 0);
  line.setAttribute("x2", 0);
  line.setAttribute("y1", -70);
  line.setAttribute("y2", -80);
  if (t % 100 == 0) {
    line.setAttribute("stroke-width", 3);
  } else {
    line.setAttribute("stroke-width", 1);
  }
  line.setAttribute("stroke", "black");
  line.setAttribute("transform", `rotate(${(t / 500) * 180})`);
  image.appendChild(line);

  if (t % 100 == 0) {
    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", 0);
    text.setAttribute("y", -85);
    text.setAttribute("font-size", "smaller");
    text.setAttribute("text-anchor", "middle");
    text.textContent = `${t}`;
    text.setAttribute("transform", `rotate(${(t / 500) * 180})`);
    image.appendChild(text);
  }
}

let slider = document.getElementById("tmpRange");

let setTemp = function (value) {
  let celsius = value - 273.15;
  let fahrenheit = (value * 9) / 5 - 459.67;
  document
    .getElementById("kelvin")
    .setAttribute("transform", `rotate(${(value / 500) * 180})`);
  document.getElementById("kname").value = value;
  document
    .getElementById("celsius")
    .setAttribute("transform", `rotate(${(celsius / 500) * 180})`);
  document.getElementById("cname").value = Math.round(celsius);
  document
    .getElementById("fahrenheit")
    .setAttribute("transform", `rotate(${(fahrenheit / 500) * 180})`);
  document.getElementById("fname").value = Math.round(fahrenheit);
};

slider.oninput = function () {
  setTemp(this.value);
};

setTemp(0);
