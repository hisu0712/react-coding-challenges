// Quiz 2. 클릭 이벤트 로그 처리하기
/*
목표: 배열 형태의 이벤트 로그(기록)중 "클릭" 이벤트만 특별한 형태로 출력해야 합니다.
다음 요구사항을 만족하는 printClickEventLogs 함수를 완성하세요

1. 매개변수 logs로 이벤트 로그 배열을 전달받습니다.
2. 이벤트 로그들 중 type이 "click"에 해당하는 로그만 특별한 형태로 출력합니다
  - 형태: ${이벤트아이디}: ${이벤트발생시각}
3. 이벤트 발생 시각은 toLocaleString 메서드를 사용해 알아보기 쉽게 출력하세요
*/

function printClickEventLogs(logs) {
    const clickLogs = logs.filter (
        (item) =>  item.type === "click"
    )
    clickLogs.forEach(
        (item, idx, arr) => {
            const date = new Date(item.date);
            console.log(`${item.type}: ${date.toLocaleString()}`)
        }
    )
}

printClickEventLogsA2([
    {
        type: "click",
        date: "2023-01-01T12:00:00Z",
    },
    {
        type: "hover",
        date: "2023-01-01T12:10:00Z",
    },
    {
        type: "scroll",
        date: "2023-01-01T12:15:00Z",
    },
    {
        type: "click",
        date: "2023-01-01T12:20:00Z",
    },
]);

// 출력 결과
// click :: 2023. 1. 1. 오후 9:00:00
// click :: 2023. 1. 1. 오후 9:20:00

// 코드 리뷰
// forEach 을 먼저 쓰기
function printClickEventLogsA1(logs) {
    logs
    .forEach((log) => {
        if(log.type === "click") {
            console.log(`${log.type}: ${new Date(log.date).toLocaleString()}`);        
        }
    })
}
// 콜백함수 두개 연달아 쓰기
function printClickEventLogsA2(logs) {
    logs
    .filter((log) => 
        log.type === "click"  // -> {} 쓰면 연계가 안됨, 왜냐면 {} 쓰면 본문 블록으로 인식되서 return 없이는 반환이 안됨, {} 쓰고 싶으면 return log.type === "click";
    )
    .forEach((log) => {
        console.log(`${log.type}: ${new Date(log.date).toLocaleString()}`)
    })
}
