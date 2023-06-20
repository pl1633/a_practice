img.style.width = "200px";
img.style.width = "150px";
var i = 0;
function change(){
    if(i){
    img.src="./imgs/sq2.png";
    i--;
    }
    else{
        img.src = "./imgs/sq1.png";
        i++;
    }
}
//클로저, 내부함수 호출

function hide(){
     img.style.opacity = "0";
}
function show(){
     img.style.opacity = "1";
}
function changeStyle(){
    var h2 = document.querySelector('h2');
    h2 = {
        "style.background" : "pink",
        "style.fontStyle" : "italic",
        "style.color" : "red",
        "style.fontSize" : "35px",
        "style.boxShadow" : "3px 3px gray"
    }
}