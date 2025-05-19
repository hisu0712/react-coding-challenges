// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: "신희수", hobby: "테니스"},
    {name: "김효빈", hobby: "테니스"},
    {name: "홍길동", hobby: "독서"},
];

const tennisPeople = arr1.filter((item) => {
    if (item.hobby === "테니스") return true;
});
const tennisPeople단축 = arr1.filter(
    (item) => item.hobby === "테니스" // 단축 코드
);

console.log(tennisPeople); // {name: '신희수', hobby: '테니스'}, {name: '김효빈', hobby: '테니스'} 


// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item*2; // -> forEach 문과 다른점, 반환값들을 모아서 새로운 배열로 반환
});

console.log(mapResult1); // [2, 4, 6] 원본값들을 변형한 새로운 배열 생성

let names = arr1.map((item) => item.name);

console.log(names); // ['신희수', '김효빈', '홍길동']


// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3); // ['a', 'b', 'c'] *숫자는 안됨

let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
    if ( a > b ) {
        return 1;          // 양수를 반환하면, b 가 a 앞에 와라
    } else if ( a < b) {
        return -1;         // 음수를 반환하면, a 가 b 앞에 와라
    } else {
        return 0;          // 0이면 자리를 그대로 유지
    }
});

console.log(arr4); // [3, 5, 10]


// 4. toSorted 
// sort는 원본 배열 정렬, toSorted는 정렬된 새로운 배열을 반환하는 메서드

let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);   // ['c', 'a', 'b']
console.log(sorted); // ['a', 'b', 'c']


// 5. Join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winter"];
const joined = arr6.join(" ");  // -> 공백 삽입

console.log(joined); // hi im winter