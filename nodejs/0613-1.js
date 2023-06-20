// 파일다루기
// 동기식과 비동기식
// Sync -> 동기식 없으면 비동기
// readFile
// readFileSync
// writeFile
// wirteFileSync   
// https://nodejs.dev
// nodejsdev readfile

const fs = require('fs');

fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// 비동기식 readFile -> callback
// 파일 입출력은 예외처리구문이 반드시 들어간다.
// ry{readfile , throw err} catch

// 파일쓰기
fs.writeFileSync("output.txt","오늘은화요일");
console.log("파일쓰기가 완료되었습니다.");
var out1 = fs.readFileSync("output.txt","utf-8");
console.log(out1);

try{
    var out1 = fs.readFileSync("outasdput.txt");
    console.log(out1.toString());
} catch(e){
    console.log("파일 에러발생");
}

// 비동기방식 파일쓰기
var str1 = "hellow world happy new year";
fs.writeFile("hello.txt",str1,function(err){
    if(err) console.log(err);
});
console.log("비동기식 파일쓰기");

// var data = fs.readFile('hello.txt');

// 비동기방식은 return이 없다. 콜백에서 처리한다.
fs.readFile('hello.txt','utf-8',function(err,data){
    console.log(data);
});

// 파일을 직접 열고 닫으면서 읽고쓰기
// open, read, write, close
// fs.open fs.read fs.write fs.close
fs.open("./output.txt","w",function(err,fd){
    var buf = new Buffer("안녕이라고 말하지마\n");
    fs.write(fd,buf,0,buf.length,null,function(err,write,buffer){
        console.log(err,write,buffer);
        fs.close(fd,function(){
            console.log("파일 열고 쓰기완료");
        });
    });
});
// new Buffer(글자) Buffer.alloc("텍스트");
// 파일을 직접열고읽기
fs.open("./output.txt","w",function(err,fd){
    var buf = new Buffer("안녕이라고 말하지마\n");
    fs.read(fd,buf,0,buf.length,null,function(err,read,buffer){
        var inStr = buffer.toString('utf8',0,read);
        console.log("파일에서 읽은 데이터 : ",inStr);
        fs.close(fd,function(){
            console.log("파일 열고 읽기완료",inStr);
        });
    });
});

// 버퍼사용하기
var output = "안녕이라고 말하지마세요";
var buffer1 = new Buffer(10);
var len = buffer1.write(output,'utf8');
console.log(buffer1.toString());


// 새 디렉토리 만들고 삭제하기
fs.mkdir("./새폴더",777,function(err){
    console.log("새폴더 생성됨");
});
setTimeout(function(){
    fs.rmdir("./새폴더",function(err){
        console.log("폴더 지워짐");
    });
},10000);


const a = fs.readFileSync('hello.txt','utf8');
const b = fs.readFileSync('output.txt','utf8');
const c = fs.readFileSync('text.txt','utf8');
console.log(a,b,c);
