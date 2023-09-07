import React, {useEffect, useState} from 'react';
import axios from "axios";

function UserList(props) {
  const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/quiz/getUserList')
      .then(res => {
        console.log('get 방식 통신 성공');
        console.log(res);
        const userList = res.data;
        setUserList(userList);
      })
      .catch(err => {
        console.log('get 방식 통신 실패');
      })
  }, []);
  
  return (
    <div>
      <h3 className={'text-center'}>유저 리스트 목록</h3>
      <table className={'table table-hover table-striped text-center'}>
        <thead>
          <tr>
            <th>아이디</th>
            <th>비밀번호</th>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
        {
          userList.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.userId}</td>
                <td>{user.userPw}</td>
                <td>{user.userName}</td>
                <td>{user.userEmail}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default UserList;