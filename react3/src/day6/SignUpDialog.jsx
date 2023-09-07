import React, {useState} from 'react';
import Dialog3 from "./Dialog3";

function SignUpDialog(props) {
  const [nickName, setNickName] = useState('');
  
  const handleChange = e => setNickName(e.target.value);
  
  const handleSignUp = () => {
    alert(`어서오세요, ${nickName}님`);
  }
  
  const handleCheckboxChange = () => alert(`체크되었습니다.`);
  
  return (
    <div>
      <Dialog3 title={'화성 탐사 프로그램'} message={'닉네임을 입력하세요'}>
        <input type="text" className={'form-control'} value={nickName} onChange={handleChange} />
        <button type={'button'} className={'btn btn-primary mt-3'} onClick={handleSignUp}>가입하기</button>
      </Dialog3>
  
      <Dialog3 title={'심해 탐사 프로그램'} message={'닉네임을 입력하세요'}>
        <input type="text" className={'form-control'} value={nickName} onChange={handleChange} />
        <label htmlFor="chk" className={'form-label mt-3'}>18세 이상 유무
          <input type="checkbox" id={'chk'} className={'form-check-input ms-2'} onChange={handleCheckboxChange} />
        </label><br/>
        <button type={'button'} className={'btn btn-primary mt-3'} onClick={handleSignUp}>가입하기</button>
      </Dialog3>
    </div>
  )
}

export default SignUpDialog;