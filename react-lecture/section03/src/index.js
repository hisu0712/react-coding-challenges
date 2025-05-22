// // Common JS

// const moduleData = require("./math");

// console.log(moduleData);

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));


// // 객체 분해 할당 사용하면 코드 축약 가능

// const { add, sub } = require("./math");

// console.log(add(1, 2));
// console.log(sub(1, 2));



// ES Module
// import mul from "./math.js";
// import { add, sub } from "./math.js";  // 확장자 붙여야함

// import 문 합쳐도 괜찮음
import mul, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(1, 2));


import randomColor from "randomcolor"; // randomColor 라이브러리

const color = randomColor(); 
console.log(color);