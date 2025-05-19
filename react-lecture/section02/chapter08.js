// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) { // item: 값, idx: 인덱스, arr: 배열
    console.log(idx, item*2); 
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item*2);
});

console.log(doubledArr);


// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(2);

console.log(isInclude);  // true


// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

console.log(index); // 1
// 같은 값이 있으면 앞에 인덱스 출력
// 없는 값이면 -1 반환


// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
    if (item === 2) return true;
    // if (item % 2 !== 0) return true;  // 0
});

const findedIndex2 = arr4.findIndex((item) => item % 2 !== 0);

console.log(findedIndex);   // 1
console.log(findedIndex2);  // 0
// 만족하는게 없으면 -1 반환


// *indexOf vs findIndex
let objectArr = [
    {name: "신희수"},
    {name: "홍길동"},
]

console.log(
    objectArr.indexOf({name: "신희수"}) // -> -1 반환, 왜냐면 얕은 비교로는 참조값 못 찾음(객체값 못찾음)
); 
console.log(
    objectArr.findIndex(
        (item) => item.name === "신희수"
    ) // -> 0 반환, 복잡한 객체값도 가능
); 


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    {name: "신희수"},
    {name: "홍길동"},
];

const finded = arr5.find(
    (item) => item.name === "신희수"
);

console.log(finded); // {name: '신희수'} 
