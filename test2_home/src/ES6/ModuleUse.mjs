import {name, job, gender, getInfo} from "./MyMod1.mjs";
import {num1, num2, sum} from "./MyMod2.mjs";
import sub from "./MyMod2.mjs";


console.log(name);
console.log(job);
console.log(gender);
console.log(getInfo());

console.log("\n----- MyMod2 import -----\n")

console.log(`첫번째 숫자 : ${num1}, 두번째 숫자 : ${num2}의 합 : ${sum()}`);
console.log(`export default로 지정된 sub() 실행 : ${sub()}`);