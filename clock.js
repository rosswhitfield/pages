setInterval(function () {
  let now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = now.getHours() + minutes / 60;
  const day = now.getDate();
  const day_of_week = now.getDay();

  const clock_svg = document.getElementById("clock").contentDocument;

  clock_svg
    .getElementById("hour")
    .setAttribute("transform", `rotate(${(hours / 12) * 360})`);
  clock_svg
    .getElementById("hour24")
    .setAttribute("transform", `rotate(${(hours / 24) * 360})`);
  clock_svg
    .getElementById("minute")
    .setAttribute("transform", `rotate(${(minutes / 60) * 360})`);
  clock_svg
    .getElementById("second")
    .setAttribute("transform", `rotate(${(seconds / 60) * 360})`);
  clock_svg
    .getElementById("day_of_week")
    .setAttribute("transform", `rotate(${(day_of_week / 7) * 360})`);
  clock_svg
    .getElementById("day")
    .setAttribute("transform", `rotate(${(day / 31) * 360})`);
}, 1000);
