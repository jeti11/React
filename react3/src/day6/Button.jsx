import React from 'react';
import button from "bootstrap/js/src/button";

function Button(props) {
  
  return (
    // 부모 컴포넌트에서 전달된 theme 속성값을 이번 컴포넌트에서 처음 활용함
    <button type={'button'} className={`btn btn-${props.theme}`} onClick={() => {
    alert(`사용한 테마 : ${props.theme}`);
    }}>{props.theme} 테마 버튼</button>
  )
}

export default Button;