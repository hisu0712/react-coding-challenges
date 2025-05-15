function funcA() {
    console.log("funcA");
};

let varA = funcA;   // 함수 자체를 변수에 담아도 된다.
console.log(varA);  // 함수 자체 문장 출력
varA();


// 1. 함수 표현식

// varB(); -> 오류 발생: 함수 표현식은 호이스팅이 되지 않는다. 

let varB = function funB() {  // 선언식이 아니다! 값으로써 선언됨
    console.log("funcB");
};

let varBb = function() {  // (익명함수)
    console.log("익명함수");
};

varB();
// funcB(); -> 오류 발생


// 2. 화살표 함수

let varC = () => {
    return 1;
}

let varD = () => 1;

let varE = (value) => value + 1;

let varF = (value) => {
    return value + 1;
};

console.log(varC());  // 1
console.log(varD());  // 1
console.log(varE(10));  // 11
console.log(varF(10));  // 11


