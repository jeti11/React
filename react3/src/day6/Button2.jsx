import React from 'react';
import button from "bootstrap/js/src/button";

// 컨텍스트를 사용하는 컴포넌트
function Button2(props) {
  
  return (
    // 부모 컴포넌트에서 전달한 데이터가 props에 저장되어 있음
    <button type={'button'} className={`btn btn-${props.theme}`} onClick={() => {
      alert(`사용한 테마 : ${props.theme}`);
    }}>{props.theme} 테마 버튼</button>
  )
}

export default Button2;