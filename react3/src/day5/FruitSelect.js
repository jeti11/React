import React, {useState} from "react";

function FruitSelect(props) {
  // select에 multiple 사용 시 기본값 설정
  const [value, setValue] = useState(['수박', '사과']);
  
  // select에 multiple 미사용 시 기본값 설정
  // const [value, setValue] = useState('수박');
  
  const handleChange = e => setValue(e.target.value);
  
  const handleSubmit = e => {
    alert(`선택한 과일 : ${value}`);
    e.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label for={'fruit'} className={'form-label'}>과일을 선택하세요</label>
      {/*html의 select는 자식태그인 option에 selected 속성을 추가하여 기본값을 설정하였으나,
      리액트의 제어컴포넌트의 select는 selected 속성을 사용하지 않고, select 태그에 value 속성을 추가하여 기본값을 설정함*/}
      {/*<select id={'fruit'} className={'form-control'} value={value} onChange={handleChange}>*/}
      
      {/*여러개 선택 시 select에 multiple 속성을 true로 설정, 기본값을 여러개 설정 시 배열로 지정*/}
      <select id={'fruit'} className={'form-control'} value={value} multiple={true} onChange={handleChange}>
        <option value={'사과'}>사과</option>
        <option value={'복숭아'}>복숭아</option>
        <option value={'수박'}>수박</option>
        <option value={'포도'}>포도</option>
        <option value={'참외'}>참외</option>
      </select>
      <button type={'submit'} className={'btn btn-primary mt-2'}>확인</button>
    </form>
  )
}

export default FruitSelect;