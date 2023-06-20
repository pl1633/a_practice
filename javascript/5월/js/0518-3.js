// createElement()
// createTextNode()
// <h1> welcome </h1>
// append나 appendChild
// 문서객체 만들기

// 객체를 생성
var header = document.createElement('h1');
var text = document.createTextNode("welcome");


//노드를 연결
header.appendChild(text);
// document.body.appendChild(header);

var box = document.getElementById('box');
var box2 = document.getElementById('box2');

box.style.border = "1px solid red";
box2.style.border = "1px solid blue";
// box.innerHTML = header;
box.appendChild(header);
box2.appendChild(header);

// box.innerHTML = header.innerHTML;
// box2.innerHTML = header.innerHTML;

// 이벤트
// add.onclick=function(){}
// 고전 이벤트

// 표준 이벤트
// add.addEventListner('click', function(){});

var add = document.getElementById('add');
var del = document.getElementById('del');
var i = 0;
add.addEventListener('click', function(){
    console.log(i);
    var h2 = document.createElement('h2');
    var text = document.createTextNode('welcome');
    h2.appendChild(text);
    add.parentElement.appendChild(h2);
    i++;
});
del.addEventListener('click', function(){
    if(i <= 0){
        console.log(i);
        i = 0;
        return false;
    }
    else{
    console.log(i);
    var h2 = document.getElementsByTagName('h2');
    var i = h2.length -1
    document.body.removeChild(h2[i]);
    }
});

