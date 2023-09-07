import React, {useState} from 'react';
import axios from "axios";
import UserList from "./UserList";

function UserJoin(props) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  
  const userIdChange = (e) => setUserId(e.target.value);
  const userPwChange = (e) => setUserPw(e.target.value);
  const userNameChange = (e) => setUserName(e.target.value);
  const userEmailChange = (e) => setUserEmail(e.target.value);
  
  const handleClick = (e) => {
    axios.post('http://localhost:8080/quiz/insertUser', null, {
      params: {
        userId: userId,
        userPw: userPw,
        userName: userName,
        userEmail: userEmail
      }
    })
      .then(res => {
        console.log('axios 통신 성공');
      })
      .catch(err => {
        console.log('axios 통신 오류가 발생했습니다.');
      })
  }
  
  return (
    <div className={'row mt-5'}>
      <div className={'col-sm-8 mx-auto'}>
        <h3 className={'text-center'}>회원가입 하기</h3>
        <div className={'my-3'}>
          <label htmlFor="user-id" className={'form-label'}>아이디</label>
          <input type="text" id={'user-id'} className={'form-control'} value={userId} onChange={userIdChange} />
        </div>
        <div className={'my-3'}>
          <label htmlFor="user-pw" className={'form-label'}>비밀번호</label>
          <input type="password" id={'user-pw'} className={'form-control'} value={userPw} onChange={userPwChange} />
        </div>
        <div className={'my-3'}>
          <label htmlFor="user-name" className={'form-label'}>이름</label>
          <input type="text" id={'user-name'} className={'form-control'} value={userName} onChange={userNameChange} />
        </div>
        <div className={'my-3'}>
          <label htmlFor="user-email" className={'form-label'}>email</label>
          <input type="email" id={'user-email'} className={'form-control'} value={userEmail} onChange={userEmailChange} />
        </div>
        <div className={'d-grid'}>
          <button type={'button'} className={'btn btn-primary'} onClick={handleClick}>회원가입</button>
        </div>
      </div>
    </div>
  )
}

export default UserJoin;