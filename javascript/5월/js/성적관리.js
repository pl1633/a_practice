// 1.생성자 함수 선언
// 2.학생배열제작
// 3.전체학생출력

function Student(name,html,css,js,java){
    this.name = name;
    this.html = html;
    this.css = css;
    this.js = js;
    this.java = java;
    
    this.getSum = function(){
        return this.html + this.css + this.js + this.java;
    }
    this.getAvg = function(){
        return this.getSum() / 4;
    }
    this.toString = function(){
        return this.name + " " + this.getSum() + " " + this.getAvg();
    }
}

var students = [];
students.push(new Student("원빈",10,20,30,0));
students.push(new Student("장동건",80,70,50,60));
students.push(new Student("강호동",80,90,90,50));
students.push(new Student("유재석",100,90,80,100));
students.push(new Student("소녀시대",30,50,90,60));
students.push(new Student("BTS",10,80,70,40));
students.push(new Student("2PM",10,30,30,20));
students.push(new Student("동방신기",20,20,20,40));
students.push(new Student("이정재",100,20,30,80));
students.push(new Student("빅뱅",10,10,30,80));
console.log(students);


function allStudent(){
    var output = "id 이름 총점 평균 <br><hr>";
    students.sort(function(a,b){ // 이름 가나다순 정렬
        if(a.name < b.name)
            return -1;
        if(a.name > b.name)
            return 1;
        else
            return 0;
    });
    for(var i in students){
        output += (Number(i)+1) + " : " + students[i].toString() + "<br>";
    }
    output += "<hr>"
    list.innerHTML = output;
}

// 장학금 1등~3등
function good(){
    var output = "id 이름 총점 평균 <br><hr>";
    var students2 = students.sort(function(a,b){
        return b.getSum() - a.getSum();
    }).slice(0,3)
    for(var i in students2){
        output += (Number(i)+1) + " : " + students2[i].toString() + "<br>";
    }
    output += "<hr>"
    list.innerHTML = output;
}
function bad(){
    var output = "id 이름 총점 평균 <br><hr>";
    var students2 = students.sort(function(a,b){
        return a.getSum() - b.getSum();
    }).slice(0,3)
    for(var i in students2){
        output += (Number(i)+1) + " : " + students2[i].toString() + "<br>";
    }
    output += "<hr>"
    list.innerHTML = output;
}
function jang(){
    var output = "id 이름 총점 평균 <br><hr>";
    var students2 = students.sort(function(a,b){
        return b.getSum() - a.getSum();
    }).slice(4,7)
    for(var i in students2){
        output += (Number(students2.length + Number(i) + 1)) + " : " + students2[i].toString() + "<br>";
    }
    output += "<hr>"
    list.innerHTML = output;
}


function Student(name,html,css,js,java){
    this.name = name;
    this.html = html;
    this.css = css;
    this.js = js;
    this.java = java;
    
    this.getSum = function(){
        return this.html + this.css + this.js + this.java;
    }
    this.getAvg = function(){
        return this.getSum() / 4;
    }
    this.toString = function(){
        return this.name + " " + this.getSum() + " " + this.getAvg();
    }
}

function del(){
    students.splice(0,1);
    var output = "id 이름 총점 평균 <br><hr>";
    for(var i in students){
        output += (Number(Number(i)+1)) + " : " + students[i].toString() + "<br>";
    }
    output += "<hr>"
    list.innerHTML = output;
}

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var 요일 = date.getDay(); //일요일 0
switch(요일){
    case 0 : 요일 = "일요일"
    break;
    case 1 : 요일 = "월요일"
    break;
    case 2 : 요일 = "화요일"
    break;
    case 3 : 요일 = "수요일"
    break;
    case 4 : 요일 = "목요일"
    break;
    case 5 : 요일 = "금요일"
    break;
    case 6 : 요일 = "토요일"
}

time.innerHTML = year + "년" + month + "월" + day + "일" + 요일;