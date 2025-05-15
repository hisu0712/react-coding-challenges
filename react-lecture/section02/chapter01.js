// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if(!f1) {
    console.log("falsy");
}


// 2. Thuthy 한 값
// -> 7가지 Falsy 한 값을 제외한 나머지 모든 값 
let t1 = [];
let t2 = () => {};


// 3. 활용 사례

function printName(person) {
    // if (person === undefined) { -> 이런식으로 조건문을 계속 추가하는 것보다 !person 이렇게 간단히 쓸 수 있음
    if (!person) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = { name: "신희수" };
printName(person);

let person1;
printName(person1);  // 방지 코드가 없으면 undefined이기 떄문에 오류가 난다.