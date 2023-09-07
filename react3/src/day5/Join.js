import React, {useState} from "react";

// 문제1) 회원 가입 페이지를 작성하세요
// id, 비밀번호, 이름, email, 휴대폰번호, 성별 을 입력받고, 확인 버튼 클릭 시 console이나 alert로 결과를 출력하는 프로그램을 작성하세요
// id : userId, 비밀번호 : userPw, 이름 : userName, email : userEmail, 휴대폰 : userPhone, 성별 : userGender

function Join(props) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userGender, setUserGender] = useState('남성');
  
  const handleSubmit = e => {
    alert(`
    id : ${userId}
    pw : ${userPw}
    name : ${userName}
    email : ${userEmail}
    phone : ${userPhone}
    genderMale : ${userGender}`);
    e.preventDefault();
  }
  
  const handleChangeId = e => setUserId(e.target.value);
  const handleChangePw = e => setUserPw(e.target.value);
  const handleChangeName = e => setUserName(e.target.value);
  const handleChangeEmail = e => setUserEmail(e.target.value);
  const handleChangePhone = e => setUserPhone(e.target.value);
  const handleChangeGender = e => setUserGender(e.target.value);
  
  return (
    <form onSubmit={handleSubmit}>
      <label for={'user-id'} className={'form-label'}>아이디
        <input type="text" id={'user-id'} className={'form-control'} value={userId} onChange={handleChangeId}/>
      </label><br/>
      <label for={'user-pw'} className={'form-label'}>비밀번호
        <input type="password" id={'user-pw'} className={'form-control'} value={userPw} onChange={handleChangePw}/>
      </label><br/>
      <label for={'user-name'} className={'form-label'}>이름
        <input type="text" id={'user-name'} className={'form-control'} value={userName} onChange={handleChangeName}/>
      </label><br/>
      <label for={'user-email'} className={'form-label'}>email
        <input type="email" id={'user-email'} className={'form-control'} value={userEmail} onChange={handleChangeEmail}/>
      </label><br/>
      <label for={'user-phone'} className={'form-label'}>phone
        <input type="text" id={'user-phone'} className={'form-control'} value={userPhone} onChange={handleChangePhone}/>
      </label><br/>
      <label htmlFor="gender" className={'form-label'}>성별
        <select id={'gender'} className={'form-control'} value={userGender} onChange={handleChangeGender}>
          <option value="남성">남성</option>
          <option value="여성">여성</option>
        </select>
      </label><br/>
      {/*<label for={'user-gender-male'} className={'form-label'}>남성*/}
      {/*  <input type="radio" id={'user-gender-male'} name={'gender'} value={userGender} onChange={handleChangeGenderMale}/>*/}
      {/*</label>*/}
      <button type={'submit'} className={'btn btn-primary'}>확인</button>
    </form>
  )
}

export default Join;