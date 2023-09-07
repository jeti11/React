import React from 'react';

function SplitPane(props) {
  
  return (
    <div className={'SplitPane row'}>
      <div className={'SplitPane-left col-sm border border-primary'}>
        {/*엘리먼트 변수라고 보면 됨*/}
        {props.left}
      </div>
      <div className={'SplitPane-right col-sm border border-success'}>
        {/*자식 컴포넌트에서 다른 컴포넌트를 자식 컴포넌트를 호출하여 출력하는 것이 기본*/}
        {/*부모 컴포넌트에서 전달받은 컴포넌트를 출력하여 사용하는 것도 상관없음*/}
        {props.right}
      {/*  <Chat />*/}
      </div>
    </div>
  )
}

export default SplitPane;