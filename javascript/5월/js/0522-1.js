var h2 = document.getElementsByTagName('h2');
// 배열

h2[0].style.backgroundColor = 'red';
h2[0].style.color = 'blue';
h2[0].style.fontStyle = 'italic';

// background-color -> backgroundColor

h2[1].style.cssText = "color:red; border:2px solid blue;";
h2[2].style.cssText = `background-color:gray; border:2px solid blue;`;

var add = document.querySelector('.add');
var del = document.querySelector('.del');
var h2 = document.querySelector('h2');
console.log(h2);
var h2a = document.querySelectorAll('h2');

// 고전이벤트
add.onclick = function(){
    // h2a[3].classList.add('active');
    for (var i=0; i<h2a.length;i++){
        h2a[i].classList.add('active');
    }
}
// 클래스를 동적으로 추가한다.

// 표준이벤트
del.addEventListener('click', function(){
    for (var i=0; i<h2a.length;i++){
        h2a[i].classList.add('normal');
    }
});

// 토글버튼을 하나 만들어서 클릭하면 class 추가되고
// 다시 클릭하면 class제거하자.
var tog = document.getElementsByTagName('button')[2];
// 배열
// callback = 앞에작업이 끝나면 나중에 실행되는 함수
var k = 0;
tog.addEventListener('click', toggle);
function toggle(){

    var h2a = document.querySelectorAll('h2');

    if(k % 2 == 0){
        for (var i=0; i<h2a.length;i++){
            h2a[i].classList.add('active');
        }
    }
    else{
        for (var i=0; i<h2a.length;i++){
            h2a[i].classList.remove('active');
        }
    }
    k++;
}

var h2a = document.querySelectorAll('h2');

for (var i = 0; i < h2a.length; i++){   
    h2a[i].onclick = function(){
    this.style.border = "5px solid blue";
    }
}
var h4a = document.querySelectorAll('h4');


    h4a[0].onclick = function(){
        for (var i = 0; i < h4a.length; i++){   
            h4a[i].style.border = "5px solid blue";
        }
    }


