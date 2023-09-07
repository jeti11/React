const fruits = ["사과", "배", "복숭아"];
console.log(fruits);

console.log("\n----- for문 사용 시 -----\n");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("\n----- for ~ in 문 사용 시 -----\n");
for (const item in fruits) {
  console.log(fruits[item]);
}

console.log("\n----- forEach 문 사용 시 -----\n");
fruits.forEach(function (item) {
  console.log(item);
});

console.log("\n----- 화살표 함수로 표현한 forEach -----\n");
fruits.forEach(item => console.log(item));

console.log("\n----- forEach 매개 변수 2개 사용 -----\n");
fruits.forEach(function (item, index) {
  console.log(`index : ${index}, value : ${item}`);
});

console.log("\n----- 화살표 함수로 표현한 forEach (변수 2개) -----\n");
fruits.forEach((item, index) => console.log(`index : ${index}, value : ${item}`));

console.log("\n----- forEach 매개 변수 3개 사용 -----\n");
fruits.forEach(function (item, index, arrName) {
  console.log(`current Array : ${arrName}, index : ${index}, value : ${item}`);
});

const numbers = [4, 9, 16, 25];
console.log(`원본 배열 : `);
console.log(numbers);

let data = numbers.map(function (item){
  console.log(`현재값 : ${item}`);
  return item * 2;
});
console.log(`map() 사용 후 데이터 : `);
console.log(data);





















