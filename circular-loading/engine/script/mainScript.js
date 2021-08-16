const percentValue = document.querySelector(".percent-value");
var percent = 0;
var loop = setInterval(() => {
    if (percent != 100) {
        percent++
        percentValue.innerText = percent;
    } else {
        clearInterval(loop);
    }
}, 38)