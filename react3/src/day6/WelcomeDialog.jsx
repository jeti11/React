import React from 'react';
import FancyBorder from "./FancyBorder";

// 부모 컴포넌트에서 자식 컴포넌트를 호출하여 UI 구성
function WelcomeDialog(props) {
  // 컴포넌트 합성의 '포함'이라는 개념
  return (
    // 자식 컴포넌트를 호출 시 자식 컴포넌트의 children 부분에 html 태그를 추가하여 전달할 수 있음
    // props를 통해서 자식 컴포넌트로 넘어가게 됨
    <div className={'border border-2 border-primary p-3'}>
      <h3>부모 컴포넌트 영역</h3>
      <FancyBorder color={'blue'}>
        <h1 className={'Dialog-title'}>어서오세요</h1>
        <p className={'Dialog-message'}>우리 사이트에 방문하신 것을 환영합니다.</p>
      </FancyBorder>
    </div>
  );
}

export default WelcomeDialog;