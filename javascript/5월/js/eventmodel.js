// div.addEventListener('click',function(){
//     console.log("div Click");
// });
// span.addEventListener('click',function(){
//     console.log("span Click");
// });
// btn.addEventListener('click',function(){
//     console.log("btn Click");
// });

// 이벤트 위임 구현
// div.addEventListener('click',function(e){
//     var id = e.target.id;
//     console.log(e.currentTarget); // 이벤트가 발생한지점
//     console.log(e.target); // 목적지? 출발지?
//     if(id == "div"){
//         console.log("div Click");
//     }else if(id == "span"){
//         console.log("span Click");
//     }else if(id == "btn"){
//         console.log("btn Click");
//     }
//     var tagName = e.target.tagName;
//     if(tagName == "DIV"){
//         console.log("div Click");
//     }else if(tagName == "SPAN"){
//         console.log("span Click");
//     }else if(tagName == "BUTTON"){
//         console.log("btn Click");
//     }
// });

div.addEventListener('click',function(e){
    console.log(e.srcElement);
    var target = e.target || e.srcElement;
    if(target.tagName == "DIV"){
        console.log("div Click");
    }else if(target.tagName == "SPAN"){
        console.log("span Click");
    }else if(target.tagName == "BUTTON"){
        console.log("btn Click");
    }
});

// 키보드관련 이벤트
// event.keyCode
// String.fromCharCode()
window.onkeydown = function(e){
    console.log(e.keyCode);// ASCII CODE
    console.log(String.fromCharCode(e.keyCode));
    if(e.keyCode == 65){
        document.querySelector('body').style.background = "red";
    }
    if(e.keyCode == 83){
        document.querySelector('body').style.background = "blue";
    }
    if(e.keyCode == 68){
        document.querySelector('body').style.background = "yellow";
    }
    if(e.keyCode == 87){
        document.querySelector('body').style.background = "white";
    }
}

window.onload = function(){
    var count = 0;
    var image = document.getElementById('image');
    var frames = ['back.png','gallery1.jpg','gallery2.jpg','gallery3.jpg','shortcut.jpg',
                    'icons.png', 'img1.jpg', 'img2.jpg', 'img3.jpg','sq1.png'];
    setInterval(function(){
        image.src ="./imgs/" + frames[count % frames.length];
        count = count + 1;
        image.width = 1000;
        image.height = 300;
    },10000/frames.length);
}

var outer = document.querySelector('.outer');
var inner = document.querySelector('.inner');

outer.onmouseover = function(){
    document.body.append("<h1>mouseover</h1>");
}
outer.onmouseout = function(){
    document.body.append("<h1>mouseout</h1>");
}
outer.onmouseenter = function(){
    document.body.append("<h1>mouseenter</h1>");
}
outer.onmouseleave = function(){
    document.body.append("<h1>mouseleave</h1>");
}

// over는 이벤트 버블링이 저ㅣㄱ용
// enter는 안에 있는지 여부만 따짐