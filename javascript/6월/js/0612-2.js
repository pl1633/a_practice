// 입력양식 이벤트
// change, submit, focus, blur
// select, reset, focusin, focusout

// .prop() .attr()
// attr 화면에는 변화가 없고, 코드상에 변동이 생김
// prop 화면에는 변화가 있고, 코드상에 변동이 없다.
$('#all-check').change(function(){
    if(this.checked){
        $('#item').children().attr('checked',true);
        $('#item').children().prop('checked',true);
    }else{
        $('#item').children().attr('checked',false);
        $('#item').children().prop('checked',false);
    }
});