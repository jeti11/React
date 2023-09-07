import React, {useState} from "react";

function RequestForm(props) {
  const [value, setValue] = useState('');
  
  // 매개변수가 1개일 경우 () 생략 가능 + 실행할 코드가 한줄이라 {} 생략 가능
  const handleChange = e => setValue(e.target.value);
  
  
  const handleSubmit = e => {
    alert(`입력한 요청사항 : ${value}`);
    e.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label for={'comment'} className={'form-label'}>요청사항 :</label>
      <textarea rows={5} className={'form-control'} id={'comment'} onChange={handleChange}
      placeholder={'요청 사항을 입력하세요'}>{value}</textarea>
      <button type={'submit'} className={'btn btn-primary mt-2'}>확인</button>
    </form>
  )
  
}

export default RequestForm;