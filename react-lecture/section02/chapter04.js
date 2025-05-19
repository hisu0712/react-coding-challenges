// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];

// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];  
// -> 이런식의 동작을 하려면?
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 1,
    d: 2,
};
console.log(obj2);  // {a: 1, b: 2, c: 1, d: 2}

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);  // 1, 2, 3
}

funcA(...arr1);


// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(...rest) {  // ! 이때의 ... 은 Spread 연산자가 아닌 Rest 매개변수 이다.
// function funcB(one, ...rest) { -> 첫번째는 one 변수 저장
// function funcB(one, two, ...rest) {  -> 두번째도 가능 단, ...rest 뒤에 오는 것은 안됨 
    console.log(rest);  // [1, 2, 3]
}

funcB(...arr1);