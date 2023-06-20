var computerNumber = Math.floor(Math.random() * 101);	// 정답
var nGuesses = 0;		// 추측 횟수


function guess() {
    var result = "";		// 결과 메시지

    // 사용자가 입력한 값을 받아서 변수 number에 대입한다. 
    var number = parseInt(document.getElementById("user").value);

    nGuesses++;		// 추측 횟수를 증가시킨다. 

    if (number == computerNumber) result = "성공입니다.";
    else if (number < computerNumber) result = "낮습니다.";
    else result = "높습니다.";

    document.getElementById("result").value = result;
    document.getElementById("guesses").value = nGuesses;
    return true;
}

document.write("<h1>구구단표</h1>");
document.write("<table border=2 width=50%");
for (var i = 1; i <= 9; i++) {  
    document.write("<tr>");
    for (var j = 1; j <= 9; j++) { 
        document.write("<td>" + i * j + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");


var myCar = { make: "BMW", model: "X5", year: 2013 };
    var txt="";

    for (var x in myCar) {

                    txt += myCar[x] + " ";
    }
    document.write(txt);
