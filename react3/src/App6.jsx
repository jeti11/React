import React from 'react';
import Toolbar from "./day6/Toolbar";
import ThemeContext from "./day6/ThemeContext";
import Toolbar2 from "./day6/Toolbar2";

function App6(props) {
  return (
    <div className={'container my-4'}>
      {/*-------------------컨텍스트 미사용--------------*/}
      <Toolbar theme={'warning'} />
      <hr/>
      {/*-------------------컨텍스트 사용----------------*/}
      {/*Context의 Provider 에 value라는 이름으로 데이터를 저장함*/}
      {/*실제로 직계 자손 컴포넌트는 해당 데이터를 사용하지 않음 */}
      {/*여러 단계 아래의 자손 컴포넌트에서 해당 데이터를 사용함*/}
      <ThemeContext.Provider value={'dark'}>
        <Toolbar2 />
      </ThemeContext.Provider>
    </div>
  )
}

export default App6;