console.log("fetch로 통신하기");

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        document.write("<hr><hr>");
        for(var i in data){
        document.write(`${data[i].name}'s phone : ${data[i].phone} <br>이메일 : ${data[i].email}<br><br>`);
        }
      });

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // 스파게티 코드
      .then(data => {
          var output = "<hr><hr>";
          output += "<table border='1'>";
          output += "<tr>";
          output += "<th>이름</th><th>전화번호</th><th>이메일</th>";
          output += "</tr>";
          for(var i in data){
         output += "<tr><td>"+ data[i].name + "</td><td>" + data[i].phone + "</td><td>" + data[i].email +"</td></tr>";
          }
          output += "</table>";
          document.write(output);
          console.log(data);
        });

  fetch('https://jsonplaceholder.typicode.com/albums?userId=5')
        .then(response => response.json()) // 스파게티 코드
        .then(data => {
            var output = "<hr><hr>";
            output += "<table border='1'>";
            output += "<tr>";
            output += "<th>UserId</th><th>ID</th><th>Title</th>";
            output += "</tr>";
            for(var i=0; i<10;i++){
           output += "<tr><td>"+ data[i].userId + "</td><td> " + data[i].id + "</td><td>" + data[i].title +"</td></tr>";
            }
            output += "</table>";
            document.write(output);
            console.log(data);
          });

console.log("fetch로 통신하기 끝");