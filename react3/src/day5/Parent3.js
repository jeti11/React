import React, {useState} from "react";
import Children31 from "./Children31";
import Children32 from "./Children32";

function Parent3(props) {
  // state 설정
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  
  // 일반 함수
  const parentFunc1 = () => {
    alert('부모 컴포넌트에서 실행하는 알림창');
  }
  
  // 엘리먼트 변수 선언
  
  // 각종 이벤트 시 동작하는 함수들
  const inputChange1 = e => setData1(e.target.value);
  
  return (
    <div className={'row my-4'}>
      <div className={'col-sm border border-2 rounded-3 p-3'}>
        <h2>Parent3 파일</h2>
        <div className={'my-3'}>
          <input type="text" className={'form-control'} value={data1} onChange={inputChange1}/>
        </div>
        {/*자식 컴포넌트로 함수 전달 시 일반 함수를 전달함*/}
        <Children31 data={data1} func={parentFunc1}/>
      </div>
      <div className={'col-sm border border-2 rounded rounded-3 p-3'}>
        <div className={'my-3'}>
          <h4>자식 컴포넌트에서 전달된 데이터2 : {data2}</h4>
          {/*자식 컴포넌트로 함수 전달 시 state 값을 변경하는 setState 함수를 전달함*/}
          <Children32 data={data2} func={setData2} />
        </div>
      </div>
    </div>
  )
}

export default Parent3;