// 1. 콜백함수
function main(value) {
    console.log(value); // 서브 함수 문장 자체로 출력
    value();            // 서브 함수 출력
};

function sub() {
    console.log("I am sub"); 
};

main(sub); // sub는 콜백함수: 뒷전에 실행되는 함수

main(function sub() {
    console.log("I am sub"); 
});

main(function() {
    console.log("I am sub"); 
});

main(() => {
    console.log("I am sub"); 
});


// 2. 콜백함수의 활용
function repeat(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx);
    }
}

function repeatDouble(count) {  // repeat과 비슷한 함수
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx*2);
    }
}

repeat(5);
repeatDouble(5);


function repeat1(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat1(5, (idx) => {    
    console.log(idx);
});

repeat1(5, (idx) => {
    console.log(idx*2);  // repeatDouble() 과 같은 중복 코드를 제거하고 훨씬 효율적
});
