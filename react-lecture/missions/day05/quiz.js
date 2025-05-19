// Quiz 1. 영화 리뷰 정보 출력하기 (feat. 하얼빈 & 위키드)

/*
목표: 영화 리뷰 정보가 담긴 객체를 매개변수로 받아 출력하는 함수 printMovieReview를 완성하세요
다음 요구사항을 만족하는 코드를 작성하세요

  - 함수 printMovieReview는 구조 분해 할당을 통해 인수로 전달된 영화 정보 객체의 프로퍼티들을 각각 제공받습니다.
  - 매개변수로 제공된 영화 정보들을 다음과 같이 출력합니다.
    -- 영화 제목은 "제목 : {제목}" 형태로 출력합니다.
    -- 영화 개봉 연도는 "개봉 : {개봉연도}" 형태로 출력합니다.
    -- 첫 번째 리뷰어를 "첫 번째 리뷰어 : {이름}" 형태로 출력합니다.
       --- 배열의 비 구조화 할당을 이용하세요
*/

function printMovieReview({title, releaseYear, reviewers}) {
    console.log(`제목: ${title}`);
    console.log(`개봉 : ${releaseYear}`);
    if (reviewers[0]) {
        console.log(`첫 번째 리뷰어 : ${reviewers[0]}`);
    } else {
        console.log("리뷰어 미정");
    }
}

printMovieReviewA({
    title: "하얼빈",
    releaseYear: 2024,
    reviewers: ["박정민", "김효빈", "이정환"],
});

// 출력 결과 :
// 제목 : 하얼빈
// 개봉 : 2023
// 첫 번째 리뷰어 : 박정민

printMovieReviewA({
    title: "위키드",
    releaseYear: 2024,
    reviewers: [],
});

// 출력 결과 :
// 제목 : 위키드
// 개봉 : 2024
// 첫 번째 리뷰어 : 리뷰어 미정


// 코드 리뷰
// '구조 분해 할당을 이용해 첫번째 리뷰어 출력하기' 실패
function printMovieReviewA({title, releaseYear, reviewers}) {
    // ...

    // const [firstReviewer] = reviewers;    -> reviewers[0] 값을 firstReviewer에 할당하는 것과 동일
    // const [firstReviewer = "리뷰어 미정"]  -> 만약 reviewers[0]이 undefined거나 배열이 비어있다면 기본값 할당
    const [firstReviewer = "리뷰어 미정"] = reviewers;
    console.log(`첫 번째 리뷰어 : ${firstReviewer}`);
}




//   Quiz 2. 평균 성적 출력하기

/*
목표: 학생들의 평균 성적을 출력합니다.
다음 요구사항을 만족하는 함수 printAvgScore의 코드를 완성하세요

  - 매개변수 students로 객체 형태의 학생 데이터를 제공받습니다.
  - 반복문을 활용하여 모든 학생의 개별 성적 평균을 출력합니다.
    -- "{이름}: {평균}" 형태로 출력합니다.
*/

function printAvgScore(students) {
    const student = Object.keys(students);
    let avg = 0;

    for (let k = 0; k < student.length; k++) {

        for (let i = 0; i < students[student[k]].scores.length; i++) {
            avg += students[student[k]].scores[i];    
        }
        avg = avg / students[student[k]].scores.length;
        console.log(`${student[k]}: ${avg}`);
        avg = 0;
    }
}

printAvgScoreA({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});

// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58


// 코드 리뷰 
// //for of, for in 사용
function printAvgScoreA(students) {
    
    for (let name in students) {
        let sum = 0;
        // let scores = students[name].scores; // 구조 분해 할당 사용
        const { scores } = students[name];  // students[name]라는 객체 안에 있는 scores라는 속성을 꺼내는 코드(객체 구조 분해)
        
        for (let score of scores) {
            sum += score;
        }
        const avg = sum / scores.length;
        console.log(`${name}: ${avg}`);
    }
}