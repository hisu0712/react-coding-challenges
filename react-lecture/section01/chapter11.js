// 함수
/* 
function greeting() {
    console.log("안녕하세요!");
}

console.log("호출 전");
greeting();
console.log("호출 후");
*/


// 함수
function getArea(width, height) {  // (매개변수)로 선언하면 따로 선언안해도 된다.
    // let width = 10;  
    // let height = 20;
    let area = width * height; 

    function another() {  // (중첩 함수)
        console.log("함수 안 다른 함수");
    }
    another();

    return area;  // (반환값) = 함수 호출의 결과값
    // console.log("return 뒤에 선언되었기 때문에 실행되지 않음");
}

getArea(10, 20);   // (인수)

let area1 = getArea(120, 200);
console.log(area1);


// 호이스팅
// -> 끌어올리다 라는 뜻
// function getArea() {} -> 이런식으로 함수 선언을 호출 밑에 해도 상관없다.