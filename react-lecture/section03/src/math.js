// math 모듈

// Common JS

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// module.exports = {
//     add, // add : add, 키와 값이 같은 때 하나만 씀
//     sub, // sub : sub,
// }



// ES Module
// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// export { add, sub }; 

// 이렇게도 가능

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {  // 중괄호 없이 import 가능, 이름 바꿔도 괜찮음
    return a * b;
}