// 1. if 조건문 (if문)
let num = 10;

if(num >= 10) {
    console.log("num은 10 이상입니다");
    console.log("조건이 참 입니다!");
} else if (num > 5) {
    console.log("num은 5 이상입니다");
} else if (num > 3) {
    console.log("num은 3 이상입니다");
} else {
    console.log("조건이 거짓입니다!");
}


// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

switch (animal) {
    case "cat": {
        console.log("고양이"); // 맞는 코드가 나오면 밑에는 모두 출력
        break;                // 단, break가 있으면 여기에서 끝남
    }
    case "dog": {
        console.log("강아지");
        break;  
    }
    case "bear": {
        console.log("곰");
        break;  
    }    
    case "snake": {
        console.log("뱀");
        break;  
    }  
    default: { // if문의 else와 동일
        console.log("그런 동물은 모릅니다");
    }     
}


/* 복잡한 여러 개의 조건: if문
   어떠한 변수의 값을 기준으로 여러 개의 값: switch문 */

