// $(selector).on(eventName,Listner);
// $(selector).on({object});

$('h3').on('click',function(){ // 실제로는 이벤트위임 써야된다.
    $(this).html(function(i,html){
        i++;
        return html + i + "별";
    });
});
$('h3').on({
    mouseenter:function(){
        $(this).addClass('bg');
    },
    mouseleave:function(){
        $(this).removeClass('bg');
    }
})
var i = 0;
$('img').css('width','300px')
.css('height','300px');
$('img').on({
    mouseenter:function(){
        $(this).attr('src','imgs/sq2.png');
    },
    mouseleave:function(){
        $(this).attr('src','imgs/sq1.png');
    },
    click:function(){
        i++;
        if(i%2 == 0){
            $(this).attr('src','imgs/gallery1.jpg')
        }else{
            $(this).attr('src','imgs/gallery2.jpg');
        }
    },
    dblclick:function(){
        $(this).off();
    }
});

// 이벤트제거 - off();
// name : value 쌍,

// 매개변수 context
// 두개 입력할 수 있다.

// click(function(){}), mouseover()

$('ul').click(function(){
    $(this).find('span').css('background','red');
    $('span',this).html("Monday");
});

// 이벤트 객체
$(document).mousemove(function(e){
    var x = e.pageX;
    var y = e.pageY;
    $('p').html(`x:${x}y${y}`);
});
// 이벤트 강제실행
// $().click(), $().trigger('click')
$('li').click();
setInterval(()=>{
    $('img').click();
},2000);
setInterval(()=>{
    $('h3').trigger('mouseenter');
},3000);
setInterval(()=>{
    $('h3').trigger('mouseleave');
},6000);

// 기본이벤트 제거와 이벤트 전달 제거
$('section,div,p').css({
    border: '1px solid',
    margin: '10px',
    padding: '10px'
})
// $('section').on('click',function(){
//     $(this).css('background','pink');
// });
// $('div').on('click',function(){
//     $(this).css('background','blue');
// });
// $('p').on('click',function(e){
//     $(this).css('background','gold');
//     // e.preventDefault();
//     // e.stopPropagation();
//     return false;
// });

$('section').on('click','p',function(){
    $('p').css('background','steelblue');
});
//textarea글자를 입력할때
//입력한글자를 표시하고
// 남은글자수를 구하고, 넘치면
// 입력을 막고 빨간색으로 표시
// keydown, keypress, keyup

$('textarea').keyup(function(){
    var 입력글자 = $(this).val().length;
    var 남은글자 = 30 - 입력글자;
    $('h5').html("남은글자 " + 남은글자);
    if(남은글자 >= 0){
        $('h5').css('color','blue');
    }else{
        $('h5').css('color','red').html("그만입력하세요");
        $(this).val('');
    }
})

// 윈도우이벤트
// ready, load, unload, resize, scroll, error
// scroll

$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var 문서높이 = $(document).height();
    var 스크롤높이 = scrollTop + windowHeight;

    // 스크롤높이와 문서높이가 같을때 객체를 추가한다.
    // 데이터를 가져와서 추가한다.
    if(스크롤높이 == 문서높이){
        for(var i=0;i<12;i++){
            $(`<img src="imgs/sq${i%3}.png">`).appendTo('body');
        }
    }
});

