let bar = document.querySelector('.bar-slider');
let smoothslider = document.querySelector('.smooth-slider');
let box = document.querySelector('.box');
let moves = document.querySelectorAll('.moves');
let img = document.querySelector('img');
let body = document.querySelector('body');


//取盒子当前位置
let boxX = box.offsetLeft;
let boxY = box.offsetTop;
console.log(boxX, boxY);

// //随机取图片上位置
let randomX = Math.random(box.offsetWidth) * 100;
moves[0].style.left = randomX + box.offsetWidth / 2 + "px";
moves[1].style.left = randomX + "px";

//
img.style.left = -randomX - box.offsetWidth / 2 + "px";


bar.style.left = randomX + "px";

let randomY = Math.random(box.offsetHeight) * 250;
moves[0].style.top = randomY + "px";
moves[1].style.top = randomY + "px";

img.style.top = -randomY + "px";

console.log(randomX, randomY);


//鼠标按下事件
bar.onmousedown = (e) => {
    this.onmousemove = (e) => {
        let x = e.pageX - smoothslider.offsetLeft;
        if (x < 0) {
            x = 0;
        } else if (x > box.offsetWidth - bar.offsetWidth) {
            x = box.offsetWidth - bar.offsetWidth;
            console.log(x);
        }
        // console.log(x);
        bar.style.left = x + "px";
        moves[1].style.left = bar.style.left;

        console.log(parseInt(moves[1].style.left));
        console.log(parseInt(moves[0].style.left));


    }
    this.onmouseup = (e) => {
        console.log(this)
        if (parseInt(moves[0].style.left) - parseInt(moves[1].style.left) < 5) {
            alert('成功')
            this.window.location.reload()
            this.onmousemove = null;
        } else {
            // alert('差一点点')
        }
    }
}
