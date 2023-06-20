// window.open()
// window.close()
// window.print()
// window.moveBy()
// window.moveTo()
// window.resizeTo()
// window.focus()
// window.blur()

// var child = window.open("","","width=300,height=200");
// var width = screen.width;
// var height = screen.height;
// child.moveTo(0,0);
// child.resizeTo(width,height);
// setInterval(function(){
//     child.resizeBy(-30,-20);
//     child.moveBy(-5,-5);
// },50)

// screen 객체
var out = '';
for(var key in screen){
    out += `${key} : ${screen[key]}`
}
document.write(out);
document.write("<br><hr><br>")
// location 객체
var out = '';
for(var key in location){
    out += `${key} : ${location[key]}`
}
document.write(out);
document.write("<hr>");


// navigator 객체
var out = '';
for(var key in navigator){
    out += `${key} : ${navigator[key]}`
}
document.write(out);
document.write("<hr>");

var navi = navigator.userAgent;
console.log(navi);

// 브라우져 검사하기
var mobile = ["iphone","android","noka","window","opera"];
var navi = navigator.userAgent.toLowerCase();

// for(var i=0;i<mobile.length;i++){
//     if(navi.indexOf(mobile[i]>=0)){ // mobile이 아니면
//         location.href = "http://m.naver.com";
//     }
//     else{
//         location.href = "http://www.naver.com";
//     }
// }

// 정규표현식
// navi.match(/phone[i]/)
// navi.match(new RegExp(phone[i]/))
window.onload = function(){
document.querySelector('h1').style.background = 'red';
}
// 모든 태그가 화면에 올라가는 순간이    로드가 완료되는 순간
// onready -> jQuery
// document.addEventListener('DOMContentLoaded', function(){
// document.querySelector('h2').style.background = 'blue';
// })

document.write(navigator.appCodeName + "<br>");
document.write(navigator.appName + "<br>");
document.write(navigator.appVersion + "<br>");
document.write(navigator.language + "<br>");
document.write(navigator.product + "<br>");
document.write(navigator.platform + "<br>");

var myDiv = document.getElementById('target');
function getGeolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation);
    }
}
function showLocation(location){
    console.log(location)
    myDiv.innerHTML = "(위도 : " + location.coords.latitude + ", 경도 : "
    + location.coords.longitude + ")";
}

function showGeolocation2(position){
    var pos = position.coords.latitude + ",+" + position.coords.longitude;
    var url = "https://www.google.co.kr/maps/search/" + pos +
    "?hl=ko&entry=ttu";
    window.open(url);
}

function readFile(){
    var files = document.getElementById('input').files;
    console.log(files);
    console.log(files[0].name);
    console.log(files.length);

    var file = files[0];
    var reader = new FileReader()
    reader.readAsText(file,"utf-8");
    reader.onload = function(){
    document.getElementById('result').value=reader.result;
    }

}
function readFile2(){
    var files = document.getElementById('input').files;
    var output = "";
    for(var i=0,f;f=files[i];i++){
        output += f.name + "\n";
        output += f.type + "\n";
        output += f.size + "bytes\n";
        output += f.lastModifiedDate + "\n";
    }
    document.getElementById('result').value=output;
}

