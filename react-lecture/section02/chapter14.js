// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() {
    // return {
    //     name: "신희수",
    //     id: "hisu"
    // };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "신희수",
                id: "hisu",
            });
        }, 1500);
    });
}

console.log(getData());


// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    // getData().then((result) => {    // 기존 방식
    //     console.log(result);
    // });

    const data = await getData();  // 비동기 작업을 동기 작업을 처리하는 것처럼 사용할 수 있다.
    console.log(data);
}

printData();