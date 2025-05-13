// 1. 변수
let age;

age = 30; 


// 2. 상수
const birth = "1997.01.07";

/* const birth;  초기화 없이 선언 불가능 
birth = "123"; 이런식으로 다시 변수 선언 불가능*/


// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
// 3.3 예약어를 사용할 수 없다.


// 4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a - b;

/* 의미있는 변수명 사용(협업 고려) */
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;