function task() {
    setTimeout(() => {
         console.log("안녕하세요");
    }, 3000);
}

// task();

function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);  // 매개변수로 받은 콜백함수를 호출
    }, 3000);
}

add(1, 2, (value) => {  // 콜백함수를 같이 넘겨주면 외부에서 실행 가능
    console.log(value);
});


// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood)
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {  // 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 전달
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => { // 동일
            console.log(freezedFood);
        });
    });
});