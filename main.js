function randomColor(number) {
    return Math.floor(number*Math.random(number));
}

function changeColor() {
    document.querySelector('body').style.backgroundColor = `rgb(${randomColor(256)}, ${randomColor(256)}, ${randomColor(256)})`
}