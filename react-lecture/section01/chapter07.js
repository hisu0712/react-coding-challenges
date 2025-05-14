// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; // 21

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20; // num7 = num7 + 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
++num8;
num8++; 

console.log(++num8); // 11 전위 연산
console.log(num8++); // 10 후위 연산(다음줄에서 연산 진행)


// 5. 논리 연산자
let or = true || false; // true

let and = true && false; // false

let not = !true; // false


// 6. 비교 연산자
let comp1 = 1 === 2;  // false 동등 비교    /* == 이면 자료형까지 비교 못함, 따라서 === 권장 */
let comp2 = 1 !== 2;  // true  비동등 비교

let comp3 = 2 > 1; // true
let comp4 = 2 <= 1; // false

