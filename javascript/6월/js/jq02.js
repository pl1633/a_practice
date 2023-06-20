// jQuery each
// jQuery.each(array,callback)
// jQuery.each(object,callback)
// .each(function(i,el){  })

$('#menu>li').each(function(i){
    $(this).text("리스트" + i );
    $(this).css('border','2px solid');
});

// innerHTML -> html()
// textContent -> text()
// forEach -> each
var LI = $('ul>li') // 제이쿼리 객체
var color = ['red','blue','lime','snow','pink'];
// for(var i=0;i<LI.size();i++){
//     LI.eq(i).css('background',color[i]);
// }
LI.each(function(i){
    $(this).css('background' , color[i]);
    $(this).css('border','3px solid ' + color[i]);
});
// 3px solid red 띄어쓰기 들어가야되서 스페이스가 solid 뒤에 들어간다.

var 학생 = [
    {name:"이순신", age : 20},
    {name:"강감찬", age : 30},
    {name:"원빈", age : 40},
    {name:"원균", age : 25}
];
$.each(학생,function(index,item){
    var out = "";
    out += `<p> ${index} - ${item.name} : ${item.age}</p>`;

    $('body').append(out);
});
$('p').each(function(index,item){
    $(this).addClass('color' + index);
});

// classList.add() -> addClass()
// classList.remove() -> removeClass()

// index()
// handler, callback
$('dl>dt').click(function(e){
    e.stopPropagation();
    // 형제간의 순번(절대번호)
    var index1 = $(this).index();
    console.log(index1);
    var index2 = $('dl>dt').index(this);
    // dt에서 클릭한 순번
    console.log(index2);
})

var hero = {};
hero.name = "아이언맨";
hero.gender = "남성";
hero.skill = "super suit";

console.log(hero);
$.each(hero,function(i,item){
    out = "";
    out += "<p>" + item + "</p>";
    $('body').append(out);
});
$('body').append("<hr>");
$.extend(hero,{
    skill2 : "나노수트"
});
$.each(hero,function(i,item){
    out = "";
    out += "<p>" + i +  " : " + item + "</p>";
    $('body').append(out);
});

// $('body').append(out)
// appendTo(body)
// $("h1") -> h1 태그를 선택
// createElement, createTextNode
// <h1> welcome </h1>
// appendChild
// 동적으로 태그를 추가한다.
// $('<h1>welcome</h1>')
$('<h1>welcome</h1>').appendTo('body');