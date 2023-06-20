
// 탭메뉴에 클릭활성화하기

var LI = document.querySelectorAll('ul>li');
var DIV = document.querySelectorAll('section>div');

// 메뉴에 date-index 속성을 추가한다.
LI.forEach(function(li,i){
    li.setAttribute('data-index',i);
})

// for(var i=0;i<LI.length;i++){
//     LI[i].onclick = function(){
//         var index = this.dataset.index;
//         console.log(index);
//         LI.forEach((li)=>{
//             li.classList.remove('active');
//         });
//         this.classList.add('active'); // 클릭한메뉴만 active
//         DIV.forEach((div) => {
//             div.classList.remove('display');
//         });
//         DIV[index].classList.add('display');
//     }
// }

// 이벤트 위임 기능 추가
var UL = document.querySelector('ul');
UL.addEventListener('click',function(e){
    // 이벤트 위임(delegation)
    if(e.target.nodeName == "LI"){
        var index = e.target.dataset.index;
        console.log(index);
        LI.forEach((li)=>{
            li.classList.remove('active');
        });
        e.target.classList.add('active'); // 클릭한메뉴만 active
        DIV.forEach((div) => {
            div.classList.remove('display');
        });
        DIV[index].classList.add('display');
    }
})
