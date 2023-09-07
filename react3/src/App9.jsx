import React from 'react';
import AxiosTest from "./day6/AxiosTest";
import AxiosDailyBoxOffice from "./day6/AxiosDailyBoxOffice";

function App9(props) {
  
  return (
    <div className={'container my-4'}>
      <AxiosTest />
      <hr/>
      <AxiosDailyBoxOffice />
    </div>
  )
}

export default App9;