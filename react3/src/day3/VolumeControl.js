import React, {useState, useEffect} from "react";

function VolumeControl() {
  // useState 를 사용하여 지정된 state 변수의 값을 변경할 수 있도록 지정
  const [ volume, setVolume ] = useState(0);
  
  useEffect(() => {
    setVolume(5);
    console.log('mount 시 동작');
  }, [])
  
  // useEffect 를 사용하여 의존성 배열에 지정된 값이 변경되면 effect 콜백함수를 실행
  useEffect(() => {
    console.log('update 시 동작');
  }, [volume])
  
  useEffect(() => {
    return () => {
      console.log('컴포넌트 update 시 동작');
    }
  })
  
  return (
    <div className={'container'}>
      <p>현재 볼륨은 {volume} 입니다.</p>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        if (volume == 10) {
          alert('최대 볼륨입니다.');
          setVolume(10);
        }
        else {
          setVolume(volume + 1)}
        
        }
      }>+</button>
      <button type={'button'} className={'btn btn-danger ms-3'} onClick={() => {
        if (volume == 0) {
          alert('최소 볼륨입니다.');
          setVolume(0);
        }
        else {
          setVolume(volume - 1)}
        }
      }>-</button>
    </div>
  )
}

export default VolumeControl;