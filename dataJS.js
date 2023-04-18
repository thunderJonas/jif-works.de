
var count = 0;
var btn = document.getElementById("one");
var btn2 = document.getElementById("two");
var btn3 = document.getElementById("three");
var btn4 = document.getElementById("four");
var btn5 = document.getElementById("five");
var btn6 = document.getElementById("six");
var disp = document.getElementById("display");

btn.onclick = function () {
    count++;
    disp.innerHTML = count;
}
btn2.onclick = function () {
    count++;
    disp.innerHTML = count;
}
btn3.onclick = function () {
    count++;
    disp.innerHTML = count;
}
btn4.onclick = function () {
    count++;
    disp.innerHTML = count;
}
btn5.onclick = function () {
    count++;
    disp.innerHTML = count;
}
btn6.onclick = function () {
    count++;
    disp.innerHTML = count;
}




/*

var query = $("#left-menu a");

TweenMax.staggerTo(query, 1.2, {
    css: { left: 0 },
    delay: 0.3,
    ease: Elastic.easeOut }, 0.1);
*/

/*


let clicks = 0;
function click() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    console.log(clicks)
};






TweenMax.staggerTo($("#left-menu a"),
    1.2,
    {
        css: { left: 0 },
        delay: 0.6,
        ease: Elastic.easeOut
    },
    0.1
);
*/
