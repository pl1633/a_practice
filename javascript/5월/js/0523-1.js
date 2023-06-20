// json 파일요청 - 비동기
// fetch, ajax (jQuery), axios
// fetch().then().then()

function search(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
  var output = "<table border=1>"
  output += "<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>"
  data.forEach((ele,i) => {
      output += `<tr><td> <a href='#' onclick=detail(${i})>${ele.id}</td>`;
      output += `<td> ${ele.username}</td>`;
      output += `<td> ${ele.phone}</td>`;
      output += `<td> ${ele.email}</td></tr>`;
  })
  output += "</table><br>"
  var content1 = document.getElementById('content1');
  content1.innerHTML = output;
})}


// 순번, 사용자이름, 전화번호, 이메일
// username, email, phone

function detail(num){
    fetch('https://jsonplaceholder.typicode.com/users/'+(num+1))
      .then(response => response.json())
      .then(data => {
        var table = "<table border=1>"
        table += "<tr>";
        table += "<td>" + data.id + "</td>";
        table += "<td>" + data.username + "</td>";
        table += "<td>" + data.phone + "</td>";
        table += "<td>" + data.email + "</td>";
        table += "</tr>";
        table += "</table>";
        var content2 = document.getElementById('content2');
        content2.innerHTML = table;
    })
}

function td_search(b){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        var output = "<table border=1>"
        output += "<tr><th>UserID</th><th>ID</th><th>Title</th><th>completed</th></tr>"
        data.forEach((ele,i) => {
            if(b == ele.completed || b == null){
            output += `<tr><td> <a href='#' onclick=td_detail(${i})>${ele.userId}</td>`;
            output += `<td> ${ele.id}</td>`;
            output += `<td> ${ele.title}</td>`;
            output += `<td> ${ele.completed == true? "작업완료" : "아직미완성"}</td></tr>`;
            }
        })
        output += "</table><br>"
        var content4 = document.getElementById('content4');
        content4.innerHTML = output;
        }
    )}

    function td_detail(num){
        fetch('https://jsonplaceholder.typicode.com/todos/'+(num+1))
          .then(response => response.json())
          .then(data => {
            var table = "<table border=1>"
            table += "<tr>";
            table += "<td>" + data.userId + "</td>";
            table += "<td>" + data.id + "</td>";
            table += "<td>" + data.title + "</td>";
            table += "<td>" + data.completed + "</td>";
            table += "</tr>";
            table += "</table>";
            var content3 = document.getElementById('content3');
            content3.innerHTML = table;
        })
    }

    