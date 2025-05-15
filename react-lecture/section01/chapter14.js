// 스코프
// -> 전역 스코프 / 지역 스코프
// -> 전역 스코프: 전체 영역에서 접근 가능
// -> 지역 스코프: 특정 영역에서 접근 가능

let a = 1;       // 전역 스코프

function funcA() {
    let b = 2;   // 지역 스코프
    console.log(a);

    function funcB() {}  // 지역 스코프(단, 다른문에서는 전역 스코프)
}

funcA();
// console.log(b); -> 오류 발생

if(true) {
    // 블록 내에 선언
    let c = 1;   // 지역 스코프
}

for(let i = 0; i < 10; i++) {  // i 변수도 지역 스코프
    let d = 1;   // 지역 스코프
}

