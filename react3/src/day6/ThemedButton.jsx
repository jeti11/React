import React from 'react';
import Button from "./Button";

function ThemedButton(props) {
  
  return (
    // 부모 컴포넌트의 theme 속성값을 사용하지는 않고 자식 컴포넌트로 전달하기만 함
    <Button theme={props.theme} />
  )
}

export default ThemedButton;