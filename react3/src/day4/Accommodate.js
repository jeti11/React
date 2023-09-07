import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";

// 최대값 설정
const MAX_CAPACITY = 10;
function Accommodate(props) {
  // isFull을 state로 설정
  const [isFull, setIsFull] = useState(false);
  // 커스텀 훅 사용
  // ES6 문법의 전개 연산자 사용 ( '=' 오른쪽의 배열 요소들이 순서대로 '='왼쪽의 배열에 들어감)
  const [count, increaseCount, decreaseCount] = useCounter(0);
  
  // useEffect hook 사용, 의존성 배열을 생략하여 무조건 화면 재랜더링 하도록 함
  useEffect(() => {
    console.log('--------------------------------');
    console.log('useEffect() 호출!');
    console.log(`isFull : ${isFull}`);
  })
  
  // useEffect hook 사용, 의존성 배열에 지정한 count의 값이 변경 시 화면 재랜더링 하도록 함
  useEffect(() => {
    // 변수 isFull의 값을 수정하기 위한 setState
    // 변수 count의 값이 MAX_CAPACITY의 값과 같으면 true, 아니면 false 
    setIsFull(count >= MAX_CAPACITY);
    console.log(`현재 count 값 : ${count}`); // 현재 count값 출력
  }, [count]);
  
  return (
    <div className={'container p-3'}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button type={'button'} className={'btn btn-primary mt-3'} onClick={increaseCount} disabled={isFull}>입장</button>
      <button type={'button'} className={'btn btn-warning ms-2 mt-3'} onClick={decreaseCount}>퇴장</button>
  
      {/*isFull과 p태그(항상 true)가 모두 true 일 경우에만 p태그가 화면에 그려지는 형태*/}
      {isFull && <p className={'text-danger'}>정원이 가득찼습니다.</p> }
    </div>
  )
}

export default Accommodate;