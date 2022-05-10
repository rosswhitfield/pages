(() => {
    timer = setInterval(function() {
        document.body.innerHTML = `Current time is ${new Date()}`;
    }, 1000);
})()
