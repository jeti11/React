import React, {useState} from 'react';
import TemperatureInput from "./TemperatureInput";

// 자식 컴포넌트이지만 부모 컴포넌트 파일에 포함해서 생성함(내용이 간단하기(짧기) 때문에)
// 섭씨 온도를 기준으로 조건 부 렌더링을 진행
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p className={'fs-4'}>물이 끓습니다.</p>
  }
  return <p className={'fs-4'}>물이 끓지 않습니다.</p>
}

// 섭씨로 변경하는 공식
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// 화씨로 변경하는 공식
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 단위 변경
function tryConvert(temperature, convert) {
  // 실수 타입으로 변경
  const input = parseFloat(temperature);
  // 변경된 데이터가 숫자인지 아닌지 확인
  if (Number.isNaN(input)) {
    return '';
  }
  // 변환된 온도 정보가 output에 저장됨
  const output = convert(input);
  // 반올림 함수를 사용하여 소수점 아래 세번째 자리까지만 출력되도록 함
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator(props) {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');
  
  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale('c');
  }
  
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale('f');
  };
  
  // 화씨 혹은 섭씨로 단위값 변경
  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
  return (
    <div>
      {/*자식 컴포넌트 호출 시 전달하는 데이터의 이름으로 scale, temperature, onTemperatureChange 를 사용함*/}
      <TemperatureInput scale={'c'} temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale={'f'} temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;

























