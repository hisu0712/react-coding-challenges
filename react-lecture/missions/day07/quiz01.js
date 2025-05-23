// Quiz 1. 우승자는? 광고 시청하고 오시겠습니다!

/*

목표 : 우승자를 긴장감 있게 발표하기 위해 시간을 끌어줄 비동기 함수가 필요합니다.

다음 요구사항을 만족하는 delay 함수를 구현하세요

 1. 매개변수 ms로 밀리세컨즈 초를 제공받습니다.
 2. 제공받은 ms만큼 대기했다가 resolve를 호출해 비동기 작업을 완료합니다.

 힌트: Promise를 반환하는 함수는 비동기 함수가 됩니다.
 힌트: setTimeout을 이용하면 특정 ms 만큼 기다렸다가 코드를 실행할 수 있습니다.

*/

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

async function main() {
    console.log("3초 후 결과를 공개하겠습니다!");
    await delay(3000);
    console.log("승자는 이정환!");
}

main();
// 출력 결과 :
// 3초 후 결과를 공개하겠습니다!
// 승자는 이정환!