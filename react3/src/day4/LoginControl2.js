import React, {useState} from "react";
import Greeting from "./Greeting";
// - inline if ~ else : in ~ else 문을 조건부 랜더링이 필요한 곳에 입력하는 것
// - 실제 if ~ else이 아닌 삼항연산자를 사용하여 inline if ~ else를 구현함
// - 조건문 ? 참일 경우 : 거짓일 경우;
function LoginButton(props) {
  return (
    <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그인</button>
  )
}

function LogoutButton(props) {
  return (
    <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그아웃</button>
  )
}

function LoginControl2(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }
  
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }
  
  return (
    <div className={'container'}>
      <Greeting isLoggedIn={isLoggedIn} />
      {
        isLoggedIn
        ? <LogoutButton onClick={handleLogoutClick} />
          : <LoginButton onClick={handleLoginClick} />
      }
    </div>
  )
}

export default LoginControl2;