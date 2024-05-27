// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// //////////////////////////////////////

const array = [1,2];
// const one = array[0];
// const two = array[1];

const [one,two] = array;

console.log(one); // 1
console.log(two); // 2

// /////////////////////////////////////

const state = {
    username: 'name',
    message: 1234
}
/* 할당할 때 state와 키값이 같아야 함 */
const {username, message} = state;
console.log(username); // name
console.log(message);  // message

const {u,m} = state;
console.log(u); // undefined
console.log(m); // undefined
// const [username1, message1] = state; // error : state is not iterable

// //////////////////////////////////////

let rest;
let [a,b] = [10,20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10,20,30,40,50];
console.log(a);     // 10
console.log(b);     // 20
console.log(rest);  // [30,40,50]

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
console.log(rest.c); // 30

// //////////////////////////////////////

let x = [1,2,3,4,5];
let [y,z] = x;
console.log(y); // 1
console.log(z); // 2

// ///////////////////////////////////////

let q,w;

[q=4, w=7] = [1];

console.log(q); // 1
console.log(w); // 7, w=7이 default

// ///////////////////////////////////////
// 변수값 두개 서로 바꾸기 (temp변수 안쓰고)
let t = 1;
let p = 4;
[t,p] = [p,t];
console.log(t);// 4
console.log(p);// 1

// ////////////////////////////////////////
// 객체 복사
const info = {
    username: 'name',
    message: 'msg'
}
const nextInfo = {...info, };
console.log(nextInfo); // { username: 'name', message: 'msg' }
console.log(info);     // { username: 'name', message: 'msg' }

// /////////////////////////////////////////

let people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith",
      },
      age: 35,
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones",
      },
      age: 25,
    },
  ];
for( let {
    name: n,
    family: {father: f}
} of people) {
    console.log('Name: ' + n + 'Father: ' + f)
    // Name: Mike SmithFather: Harry Smith
    // Name: Tom JonesFather: Richard Jones
}