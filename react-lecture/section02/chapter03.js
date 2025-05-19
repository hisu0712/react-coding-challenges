// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

/* 
let one = arr[0];
let two = arr[1];
let three = arr[2];
 */

let [one, two, three, four = 4] = arr;

// let [one, two] = arr;  -> 가능

// let [one, two, three, four] = arr; -> four는 존재하지 않지만 오류는 나지 않고, undefined가 적용



// 2. 객체의 구조 분해 할당
let person = {
    name: "신희수",
    age: 25,
    hobby: "테니스",
};

let { name, age: myAge, hobby, extra = "hello" } = person;  // {} 중괄호 사용, 각 변수에 할당됨


// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra)
};

func(person);


