// Quiz 1. 모든 약수찾기

/* 
다음 요구사항을 만족하는 코드를 작성하세요

- 변수 num의 모든 약수를 다 찾아서 출력하세요
*/

let num = 100;

for (let i = 1; i <= 100; i++) {
    if(num % i === 0) {
        // console.log(i);
    }
}




// Quiz 2. 소수 판별기 (에라토스테네스의 체)

/* 
다음 요구사항을 만족하는 isPrimeNumber함수를 완성하세요

- 함수 isPrimeNumber는 한개의 매개변수 num을 제공받아 소수인지 판별합니다.
- num이 소수라면 true를, 아니라면 false를 반환합니다.
- 예외적으로 1은 소수로 판별하셔도 됩니다!
*/

function isPrimeNumber(num) {
    
    let isPrime = true;
    let count = 0;

    for(let i = 1; i <= num; i++) {  // -> i를 1부터 시작하지 않아도 된다. 왜냐하면 1은 무조건 통과
        if (num % i === 0) {
            count++;
        }
    }

    if(count > 2) {
        isPrime = false;
    }
    
    return isPrime;
}

// 코드 리뷰: 굳이 isPrime, count 변수를 만들 필요가 없다.
// 정답 코드
function isPrimeNumberA(num) {
    for(let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } 
    }
    return true;
}

// console.log(isPrimeNumber(1));  // true
// console.log(isPrimeNumber(4));  // false
// console.log(isPrimeNumber(11)); // true
// console.log(isPrimeNumber(12)); // false




// Quiz 3. 계산기 만들기


/* 
콜백함수를 이용하여 다음 요구사항을 만족하는 코드를 작성하세요

 1. 두 수를 덧셈하는 함수 add, 뺄셈하는 함수 sub를 각각 구현하세요

  - 2개의 매개변수 num1, num2를 제공받습니다.
  - 연산의 결과를 반환합니다.

 2. 다음 조건을 만족하는 함수 calc를 구현하세요

  - 3개의 매개변수 num1, num2, callback을 제공받습니다.
    -- num1, num2 : 연산에 활용될 숫자
    -- callback : 실제로 연산을 수행할 함수
  - callback 함수로 전달된 연산의 결과값을 콘솔에 출력하세요
*/


function add(num1, num2) {
    console.log(num1 + num2);
}

function subtract(num1, num2) {
    console.log(num1 - num2);
}

function calculate(num1, num2, callback) {
    callback(num1, num2);
}

calculate(5, 3, add);       // 8
calculate(5, 3, subtract);  // 2


// 코드 리뷰: callback 함수에서는 return 하고 메인 함수에서 출력하는 것이 바람직하다
// 정답 코드
function addA(num1, num2) {
    return num1 + num2;
}
function subtractA(num1, num2) {
    return num1 - num2;
}
function calculateA(num1, num2, callback) {
    const result = callback(num1, num2);
    console.log(result);
}