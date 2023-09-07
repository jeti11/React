import React, {useState} from "react";

// 커스텀 훅 생성
function useCounter(initValue) {
  // useState 사용하여 변수 count를 state로 설정
  const [count, setCount] = useState(initValue);
  
  const incrementCount = () => setCount((count) => count + 1);
  // 위의 코드는 아래 코드와 같음
  // const incrementCount = () => {
  //   return setCount((count) => {
  //     return count + 1;
  //   });
  
  
  const decrementCount = () => setCount((count) => Math.max(count - 1, 0));
  // Math.max() 최대값을 반환하는 자바스크립트 함수
  // const decrementCount = () => {
  //   return setCount((count) => {
  //     return Math.max(count - 1, 0)
  //   })
  // }
  
  // 배열로 반환, 0번 index는 현재 count값, 1번 index는 카운트 올리는 함수, 2번 index는 카운트 내리는 함수
  return [count, incrementCount, decrementCount];
}

export default useCounter;