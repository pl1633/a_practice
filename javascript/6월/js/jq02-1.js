$(document).ready(function(){
    $('h3').css({
        backgroundColor : 'black',
        color : 'white'
    });
    $('h3').filter(':even').css({
        border : '5px solid lime'
    });
    $('h3').filter(function(index){
        return index%3 == 0;
    }).css('font-size','30px');
    $('h3').filter(function(index){
        return index%3 != 0;
    }).css('color','red');
}); // end // defer를 지우면 여기안에 다써야댐

// filter, end, eq, first, last, add
// is, find()
// 문서객체선택과 탐색
// filter(selector) filter(function)

var xml = "";
        xml += "<friends>";
        xml += "<friend>";
        xml += "<name>강감찬</name>";
        xml += "<lang>HTML</lang>";
        xml += "</friend>";
        xml += "<friend>";
        xml += "<name>이순신</name>";
        xml += "<lang>CSS</lang>";
        xml += "</friend>";
        xml += "</friends>"

        var str2xml = $.parseXML(xml);
        // each문을 이용해 xml 데이터를 화면에 출력하기
        $(str2xml).find('friends').each(function(index){
            var out = '';
            out += "<p>" + $(this).find('name').text() + "</p>";
            out += "<strong>" + $(this).find('lang').text() + "</strong>";
            $('body').append(out);
        })