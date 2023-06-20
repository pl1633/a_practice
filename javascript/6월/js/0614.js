// $.ajax(url, {options});
$.ajax("https://jsonplaceholder.typicode.com/todos/1",{
    success:function(data){
        // $('body').append(JSON.stringify(data));
        console.log(data);
    }
});

$.ajax({
    url:'https://jsonplaceholder.typicode.com/users',
    type:"GET",
    data:{
        "id":9
    },
    success:function(data){
        // $('body').append(JSON.stringify(data));
        console.log(data);
    }
})

$('#one').load('/data.html');

