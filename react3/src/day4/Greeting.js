import React from "react";

// 함수 컴포넌트(자식)
function UserGreeting(props) {
  return <h1>방문해 주셔서 감사합니다.</h1>
}

// 함수 컴포넌트(자식)
function GuestGreeting(props) {
  return <h1>회원가입이 필요합니다.</h1>
}


// 함수 컴포넌트(부모)
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  // 조건부 랜더링
  if (isLoggedIn) {
    return <UserGreeting />
  }
  
  return <GuestGreeting />
}

export default Greeting;