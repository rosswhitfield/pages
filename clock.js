(() => {
  timer = setInterval(function () {
    let now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes() + seconds / 60;
    const hours = now.getHours() + minutes / 60;
    const day = now.getDate();
    const day_of_week = now.getDay();

    document
      .getElementById("hour")
      .setAttribute("transform", `rotate(${(hours / 12) * 360})`);
      document
      .getElementById("hour24")
      .setAttribute("transform", `rotate(${(hours / 24) * 360})`);
    document
      .getElementById("minute")
      .setAttribute("transform", `rotate(${(minutes / 60) * 360})`);
    document
      .getElementById("second")
      .setAttribute("transform", `rotate(${(seconds / 60) * 360})`);
    document
      .getElementById("day_of_week")
      .setAttribute("transform", `rotate(${(day_of_week / 7) * 360})`);
      document
      .getElementById("day")
      .setAttribute("transform", `rotate(${(day / 31) * 360})`);

    document.getElementById("time").innerHTML = `Current time is ${now}`;
  }, 1000);
})();
