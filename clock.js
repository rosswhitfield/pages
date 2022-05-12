(() => {
  timer = setInterval(function () {
    let now = new Date();
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = now.getHours() + minutes / 60;

    document
      .getElementById("hour")
      .setAttribute("transform", `rotate(${(hours / 12) * 360})`);
    document
      .getElementById("minute")
      .setAttribute("transform", `rotate(${(minutes / 60) * 360})`);
    document
      .getElementById("second")
      .setAttribute("transform", `rotate(${(seconds / 60) * 360})`);

    document.getElementById("time").innerHTML = `Current time is ${now}`;
  }, 40);
})();
