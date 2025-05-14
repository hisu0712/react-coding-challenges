// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1; // undefined  
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // var4는 var1이 undefined이므로 10이 된다.
let var5 = var1 ?? var3;
let var6 = var2 ?? var3; // 이럴 경우 앞에 있는 값 출력 20

// 요구사항 : 이름이 없으면 닉네임 출력
let userName = "신희수";
let userNickName = "hisu0712";

let displayName = userName ?? userNickName;


// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello"; // 초기의 숫자로 선언된 변수 타입 변경 가능

let t1 = typeof var7; // t1 = string


// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짖일 때의 값을 다르게 반환

let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수"; // 조건식 ? 참일때 : 거짓일때
