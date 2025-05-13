//  1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

/*console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);*/

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; /*불가능한 연산을 시킬 경우의 나오는 값: NaN*/


// 2. String Type
let myName = "신희수"; /* let myName = 신희수; 이러면 신희수 가 변수명인줄 암*/
let myLocation = "목동"
let introduce = myName + myLocation; /*String Type 덧셈 연산 지원*/

// 2-1. 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다`; 


// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;


// 4. Null Type (아무것도 없다)
let empty = null;


// 5. Undefined Type
let none; /*변수를 선언하고 아무것도 넣지 않았을 때 자동으로 할당되는 값: undefined*/

/*null은 지정, undefined 지정X = 비슷한 의미*/
