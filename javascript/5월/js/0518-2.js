
//DOM문서객체 선택하기
//geElementByTagName()
//getElementById()
//var test = document.getElementById();
//var test = document.getElementsByTagName();
//var test = document.getElementsByClassName();
//Element's' -> 배열

// var li = document.getElementsByTagName("li");
// console.log(li);
// li[0].style.backgroundColor = 'red';
// li[1].style.backgroundColor = 'blue';

// for (var i=0; i<li.length; i++){
//     li[i].style.backgroundColor ='gold';
//     li[i].style.border = '2px solid black';
//     li[i].style.margin = '5px'; 
// }

// for (var i of li){
//     i.style.padding = "10px";
// }

// for(var i in li){
//     console.log(i);
//     if(!isNaN(i)) // 키값이 숫자면
//     li[i].style.borderRadius = "10px";
// }

// var menu = document.getElementsByClassName("menu")[0];
// console.log(menu);
// menu.style.border = "3px solid red";

// var lia = document.querySelector('li>a');
// console.log(lia);

// lia.style.fontSize = "25px";

// var lia = document.querySelectorAll('li>a');
// console.log(lia);

// for(var i = 0; i<lia.length; i++){
//     lia[i].style.color = "black";
//     lia[i].style.fontSize="25px";
// }

// Array.from(li).forEach((ele) => {
//     ele.style.textAlign = "center";
// });
var html = document.getElementById('html');

main_title.innerHTML = "DOCUMENT MODEL";
main_title.innerHTML = "DOCUMENT MODEL";

html.innerHTML = "<span>innerHTML</span>";
text.textContent = "<span>textContent</span>";

var h1 = document.getElementsByTagName('h1');


var header = document.getElementById('header');


var span = document.querySelector('h2>span');




// var ul = document.querySelector('ul');
// console.log(ul.children[1]);

header.classList.add("welcome");

document.write(header.id);
document.write("<hr>");
document.write(header.title);
document.write("<hr>");
document.write(header.childElementCount);