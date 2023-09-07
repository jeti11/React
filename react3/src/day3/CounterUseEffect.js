import React, {useState, useEffect} from "react";

function CounterUseEffect(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  
  // useEffect hooks를 사용하여 리액트 생명주기 함수의 기능을 사용함
  // useEffect 사용 시 componentDidUpdate() 함수의 기능을 사용하고자 하면, 의존성 배열 부분에 변수를 지정해야
  // 의존성 배열을 빈 배열로 지정하면 componentDidMount() 함수로 동작
  
  // 의존성 배열을 빈 배열로 지정하면 ComponentDidMount() 실행됨
  useEffect(() => {
    setCount2(100);
    console.log('컴포넌트 mount 시 동작');
  }, []);
  
  
  // 의존성 배열 부분에 변수를 지정하면 ComponentDidUpdate() 실행됨
  useEffect(() => {
    document.title = `총 ${count} 번 클릭했습니다.`;
    console.log('컴포넌트 update 시 동작');
  }, [count]);
  
  
  // useEffect 사용 시 componentWillUnmount() 함수의 기능을 사용하고자 하면 콜백 함수에 return 부분에 콜백함수를 추가하여 사용함
  useEffect(() => {
    return () => {
      console.log("컴포넌트 unmount 시 동작함");
    }
  })
  return (
    <div className={'container'}>
      <p>총 {count} 번 클릭했습니다.</p>
      <button type={'button'} className={'btn btn-primary'} onClick={() => setCount(count + 1)}>클릭</button>
      <div className={'mt-3'}>
        <p>두번째 count2의 값 : {count2}</p>
        <button type={'button'} className={'btn btn-success'} onClick={() => setCount2(count2 + 10)}>클릭</button>
      </div>
    </div>
  );
}

export default CounterUseEffect;