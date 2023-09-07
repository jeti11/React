import React, {useState} from "react";

// 함수 컴포넌트 사용
function SetStateFunc (props) {
  // hooks 중 useState를 사용함
  // stateString : 초기값('click')이 담겨있는 변수, setStateString : 함수
  
  // 함수 컴포넌트에서는 state의 값을 변경하고자 할 경우 반드시 useState를 사용해야 함
  let [stateString, setStateString] = useState('click'); 
  
  function StateChange(e) {
    // 직접 수정이기 때문에 화면 update가 되지 않음
    console.log(`원본 내용 : ${stateString}`);
    stateString = 'useState로 수정 클릭';
    console.log(`수정 내용 : ${stateString}`);
    
    e.preventDefault();
    
  }
  return (
    <div>
      {/*marginRight 부분이 {}가 2개인 이유 : JSX 문법에서 문자열이 아닐 경우 {}가 사용되어야 함*/}
      {/*{} 사용 시 자바스크립트 코드라는 것으 뜻함*/}
      {/*JSX 문법에서 css속성 사용 시 '-' 기호를 생략하고, 카멜명명법 사용*/}
      {/*JSX 문법에서 클릭 이벤트가 onclick -> onClick 로 변경*/}
      <button style={{marginRight: '20px'}} onClick={(e) => StateChange(e)}>state 직접 수정</button>
      
      {/*useState() 사용하여 setStateString() 함수 실행*/}
      <button onClick={(e) => setStateString('클릭')}>setState로 변경</button>
      <br/>
      [state 변경하기] StateString: {stateString}
    </div>
  )
}

export default SetStateFunc;