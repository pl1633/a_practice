// 필터선택자
// input:reset
// input:submit
// input:text
$('input:submit').css('color','red');
$('input:text').css('color','red');
$('input:button').css('color','red');

// input:focus
// input:checked
// input:disabled
// input:enabled
// option:selected



setInterval(function(){
    $('input:focus').css('background','gold');
},1000);

$('input:text').blur(function(){
    $(this).css('background','blue');
});
// input:blur -> X
$('input:text').focus(function(){
    $(this).css('background','red');
});

$('select').change(function(){
    var 동물 = $('option:selected').val();
    $('#info').html(`<span>${동물}</span>`+"좋아");
    $('span').css('color','blue');
});

// input:password
// input:odd
// 요소:even
// 요소:odd
// 요소:first
// 요소:last

$('ul>li:odd').css('background-color','steelblue');
$('ul>li:even').css('background-color','cyan'); // 0부터 시작해서 얘가 먼저나옴
$('ul>li:last').css('border','3px solid lime');

// 함수필터선택자
// li:eq(3)
// li:lt(2) less than
// li:gt(2) greater than
// li:not(:first)
// li:nth-child(2n)
// li:nth-of-type(2n)

$('li:eq(5)').css('padding','10px');
$('li:lt(3)').css('font-size','20px');
$('li:gt(3)').css('font-size','30px');
$('li:nth-child(2n)').css('color','red');
$('li:nth-of-type(2n)').css('color','blue');
$('li:contains("menu5")').css('color','blue');

// li:has("strong") li태그중에 strong태그가 있는 객체선택
// $('li').closest('div') li태그에서 가장가까운 div태그 선택
// $('a,span') 복합선택자 a태그, span태그 선택

// $('a','li') li태그에서 그 하위태그 a를 선택해라
// $('li').find('a') //
// $('li a') li태그에서 그 하위태그 a선택

$('li:has("span")').css('width','200px');
$('li').closest('ul').css('padding','20px');
$('a','li').css('font-weight','bold');
$('li').find('a').css('font-style','italic');