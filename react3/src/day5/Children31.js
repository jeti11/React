import React, {useState} from "react";

function Children31 (props) {
  const recData = props.data;
  const recFunc = props.func;
  
  return (
    <div className={'border border-2 rounded-3 p-2'}>
      <h4>자식 컴포넌트</h4>
      <h5>부모 컴포넌트에서 전달된 데이터 : {recData}</h5>
      {/*자식 컴포넌트의 버튼 클릭 시 recFunc 함수를 실행*/}
      <button type={'button'} className={'btn btn-primary'} onClick={recFunc}>클릭</button>
    </div>
  )
}

export default Children31;