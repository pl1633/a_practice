// setAttribute ("속성". "값")
// getAttribute ("속성")

var a = document.querySelectorAll('a');

console.log(a[0].getAttribute("value"));

for(var i = 0; i < a.length; i++){
    a[i].style.backgroundColor = a[i].getAttribute('value');
}

for(var i = 0; i < a.length; i++){
    a[i].setAttribute('index',i);
}

for(var i = 0; i < a.length; i++){
    console.log(a[i]);
}

// data-  사용자정의속성  dataset 속성
// a태그를  클릭하면 data-color속성을 읽어들여서 글자색을 변경
for(var i = 0; i < a.length; i++){
    a[i].addEventListener('click',function(){
        this.style.color = this.getAttribute('data-color');
        this.style.border = `3px solid ${this.getAttribute('data-color')}`;
        this.textContent = this.getAttribute('data-coffee-name')
        console.log(this.getAttribute('data-coffee-name'))
    });
}

// innerHTML, textContent
// h1.innerHTML = "<span>hi</span>"
// h1.textContent = "<span>hi</span>"

// 버튼을 하나 만들어서 클릭했을때
// 리스트 목록이 추가되는 예제

btn1 = document.querySelectorAll('button')[0];
btn2 = document.querySelectorAll('button')[1];
btn3 = document.querySelectorAll('button')[2];
box = document.querySelector('div');
var str = '';
str += "<ul>";
str += "<li>JavaScript</li>";
str += "<li>jQuery</li>";
str += "<li>Ajax</li>";
str += "</ul>";
btn1.addEventListener('click',function(){
    addList(str);
});
btn2.addEventListener('click',function(){
    addList('');
});
var i = 0;
btn3.addEventListener('click',function(){
    if(i%2){
        addList('');
        i++;
    }
    else{
        addList(str);
        i--;
    }

});

function addList(string){
    box.innerHTML = string;
}