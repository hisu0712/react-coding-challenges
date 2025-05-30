// Quiz 1. 책 정보 확인하기

/* 
목표: 주어진 책 정보 객체에서 특정 속성이 존재하는지 확인하고, 그 결과를 출력합니다.

다음 요구사항을 만족하는 코드를 작성하세요

 - book 객체 내에 '출판년도(publishedYear)' 속성이 있는지 확인해 결과에 따라 다음과 같이 출력합니다.

    -- 속성이 있으면: "출판년도는 ${출판년도}입니다."
    -- 속성이 없으면: "출판년도 정보가 없습니다." 
*/

const book = {
    title: "한 입 크기로 잘라먹는 리액트",
    author: "이정환",
    // publishedYear 속성은 이 객체에는 없습니다.
};


function isPublishedYear(year) {
    book.publishedYear = year;

    if(!book.publishedYear) {
        console.log("출판년도 정보가 없습니다.");
        return;
    }
    console.log(`출판년도는 ${book.publishedYear}입니다.`);
}

// isPublishedYear();
// isPublishedYear("2025년도");



// 코드 리뷰 : 문제 의도와 맞지 않음
// in 함수 사용
if("publishedYear" in book) {
    console.log(`출판년도는 ${book.publishedYear}입니다.`);
} else {
    console.log("출판년도 정보가 없습니다.");
}