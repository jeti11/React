import React, {useState} from "react";

function Children32(props) {
  const [inputValue, setInputValue] = useState('');
  const changeInput = e => setInputValue(e.target.value);
  const sendData = e => {
    props.func(inputValue);
  }
  
  return (
    <div className={'my-3 border border-2 rounded-3 p-3'}>
      <h4>자식 컴포넌트</h4>
      <input type="text" className={'form-control'} value={inputValue} onChange={changeInput}/>
      <button type={'button'} className={'btn btn-primary mt-3'} onClick={sendData}>부모 컴포넌트로 데이터 전달</button>
    </div>
  )
}

export default Children32;