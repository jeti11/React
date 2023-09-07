import React from 'react';
import ThemedButton from "./ThemedButton";

// 컨텍스트 미사용하는 경우
function Toolbar(props) {
  
  return (
    // 부모 컴포넌트의 theme 속성값을 사용하지는 않고 자식 컴포넌트로 전달하기만 함
    <ThemedButton theme={props.theme} />
  )
}

export default Toolbar;