import React from "react";

// 인라인
// - {Falsy && 조건식}을 사용 시 뒤에 있는 조건 결과를 평가하지 않기 때문에 화면에 표시하지 않지만 Falsy값이 화면에 출력될 수 있음

function Counter(props) {
  const count = 0; // Falsy
  
  return (
    <div className={'container'}>
      {
        count
        &&
        <h1>현재 카운트 : {count}</h1>
      }
    </div>
  )
}

export default Counter;