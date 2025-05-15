function returnFalse() {
    console.log("False 함수");
    // return false;
    return undefined; // Falsy 가능
}

function returnTrue() {
    console.log("True 함수");
    // return true;
    return 10;  // Truthy 가능
}

console.log(returnFalse() && returnTrue()); // F 결정되면서 단락평가 작동해서 뒤에 함수 접근 안함 (단락평가 작동)

console.log(returnTrue() && returnFalse()); // 첫번째가 T이므로 두번째 함수 실행 (단락평가 작동 안함) 

console.log(returnTrue() || returnFalse()); // (단락평가 작동)


// 단락 평가 활용 사례
function printName(person) {
    if(!person) {
        console.log("person에 값이 없음");
        return;
    }
    console.log(person.name);

    // 위에 코드를 단락 평가 사용하면? 
    console.log(person && person.name);

    // 좀 더 효율적으로 작성하면?
    const name = person && person.name;
    console.log(name || "person에 값이 없음");  //  T || T 이면 앞에 T 값이 반환
}

printName();
printName({name : "신희수"});