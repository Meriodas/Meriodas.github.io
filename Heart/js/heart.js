var box = document.getElementsByClassName('wrapper')[0];
var heart = document.getElementsByClassName('heart')[0];

function createHeart() {
    var count = 35;

    for (var i = 0; i < count; i++) {
        var left = random(50, 450);
        var div = document.createElement('div');
        div.classList.add('hearts');
        box.appendChild(div);
        div.style.left = left + "px";
        div.style.animationDelay = random(0, 35) / 10 + 's';
    }
}

function random(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}


heart.onclick = function() {
    box.removeChild(heart);
    createHeart();
}
