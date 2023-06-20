$(document).ready(function(){
// css초기화
$('*').css({margin:0,padding:0});
$('a').css({
    'color':'black',
    'text-decoration':'none',
    display:'block',
    padding:'10px'
});
$('li').css('list-style','none');

// 메뉴 배치하기-flex 사용
$('ul').css('display','flex');
$('ul>li').css('flex',1)
.css('text-align','center')
.css('background','orange');
$('ol').css({
    'background':'orange',
    'display':'none',
    'width':'100%'
});

// hover 효과 이벤트
// .hover(mouseenter,mouseleave)
$('ul>li').hover(function(){
    $(this).css('background','gray');
    $(this).find('ol').show();
}, function(){
    $(this).find('ol').hide();
    $(this).css('background','orange');
});
$('ul>li').css('position','relative');
$('ol').css('position','absolute');
$('ol>li').hover(function(){
    $(this).css('background','steelblue');
}, function(){
    $(this).css('background','orange');
});

// css() attr() -> html 태그 바꾸기
$('h2').attr('title',"마우스를 올려보세요");
$('ul>li').attr('title',"마우스를 올려보세요");

// 탭메뉴만들기
$('div span').css('display','inline-block')
.css('padding','10px')
.css('cursor','pointer');
$('div>span').first().click(function(){
    $('#img img').attr('src','imgs/sq3.png');
});
$('div>span').eq(1).click(function(){
    $('#img img').attr('src','imgs/sq2.png');
});
$('div>span').last().click(function(){
    $('#img img').attr('src','imgs/sq1.png');
});
































});