fetch("http://localhost:3000/comments?postId=1")
.then((response) => response.json())
.then((json) => console.log(json));

// fetch("http://localhost:3000/posts",{
//     method: "POST", // HTTP 요청방법
//     body: JSON.stringify({
//         title: "The Great",
//         author: "Jeremy",
//     }),
//     headers:{
//         "content-type": "application/json; charset=UTF-8",
//     },
// })
// .then((response) = response.json())
// .then((json) => console.log(json));

// fetch("http://localhost:3000/posts/2",{
//     method: "PUT",
//     body: JSON.stringify({
//         id: 2,
//         title: "The Great Jeremy",
//         author: "Jeremy",
//     }),
//     headers:{
//         "content-type": "application/json; charset=UTF-8",
//     },
// })
// .then((response) => response.json)
// .then((json) => console.log(json));

fetch("http://localhost:3000/posts/2",{method: "DELETE"});