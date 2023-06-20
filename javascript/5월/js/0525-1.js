var lang = document.getElementById('lang');
var span = document.querySelector('span');

lang.onchange = function(){
    span.innerHTML = 
    `<h3>${lang.selectedIndex}
    ${lang.value}를 선택</h3>`;
}
lang.onblur=function(){
    lang.options[2].value="HTML5";
    lang.options[2].innerHTML = "HTML5";
}
var last = lang.options[2].value;
lang.options[2].selected = true;
span.innerHTML = "<h2>" + last + "부터 시작한다" +"</h2>";

var button = document.querySelector('button');

button.onclick = function(){
    var span = document.querySelector('span');
    if(span != null){
        child.removeChild(span);
    }
    else{
        return;
    }
}

setInterval(function(){
    var time = document.getElementById('time');
    time.innerHTML = new Date().toLocaleDateString()
    time.innerHTML += new Date().toLocaleTimeString();
},1000)
// setInterval(callback,time)