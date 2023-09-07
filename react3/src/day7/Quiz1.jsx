import React from 'react';
import UserList from "./UserList";
import UserJoin from "./UserJoin";

// 문제 1) axios 사용하여 회원정보 목록을 출력하는 페이지를 작성하세요
// 화면 로드시 바로 회원 목록 정보를 가져와야 함 (=> useEffect 사용해야 됨)
// 문제 2) 동일한 페이지에서 axios를 사용하여 사용자를 추가하는 페이지를 작성하세요
function Quiz1(props) {
  
  return (
    <div>
    {/*  1. 회원 목록 출력하는 부분*/}
      <UserList />
    {/*  2. 회원가입 하는 부분*/}
      <UserJoin />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default Quiz1;