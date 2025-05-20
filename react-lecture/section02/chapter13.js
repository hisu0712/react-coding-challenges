function add10(num) {
    const promise = new Promise((resolve, reject) => {  // resolve 성공, reject 실패
        // 비동기 작업 실행하는 함수
        // executor
    
        setTimeout(() => {
    
            if(typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
    
            // resolve("안녕");                 // 비동기 작업 성공, 인수로 결과값 전달 가능
            // reject("왜 실패했는지 이유...");  // 비동기 작업 실패, 인수로 결과값 전달 가능
        }, 2000);
    });

    return promise;
}

// const p = add10(0);

add10(0)
    .then((result) => {
        console.log(result);

        const newP = add10(result);
        return newP; // 새로운 promise 값 반환
    })
    .then((result) => {
        console.log(result);
        return add10(result);  // 축약 
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


// console.log(promise);

// setTimeout(() => {
//     console.log(promise);
// }, 3000);


// then 메서드 
// -> 그 후에

// promise
//     .then((value) => {  // 성공했을 때만, 결과값 이용
//         console.log(value);
//     })
//     .catch((error) => { // 연결해서 사용 가능
//         console.log(error);
//     })

// promise.catch((error) => { // 실패했을 때만, 결과값 이용
//     console.log(error);
// });