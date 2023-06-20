console.log('hellow world'); // 일반적인 로그
console.log('hello %s','world'); // 일반적인 로그, %s를 사용해서 문자열 데이터를 파라미터로 전달

const world = 'world';
console.log(`hello ${world}`); // 자바스크립트의 템플릿 리터럴 문법을 사용

console.error(new Error('에러 메시지 출력')); // 에러로그 출력

const arr = [
    {name: 'John Doe', email: 'john@mail.com'},
    {name: 'Jeremy Go',email: 'jeremy@mail.com'}
];
console.table(arr);

const obj = {
    students: {
        grade1:{class1:{}, class:{}},
        grade2:{class1:{}, class:{}},
        teachers:['John Doe', 'Jeremy Go']
    }
}

console.dir(obj, {depth:1, colors:true});

console.time('time for for-loop');

for(let i = 0; i<999999;i++){}
console.timeEnd('time for for-loop');
