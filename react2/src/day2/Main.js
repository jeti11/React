import React from "react";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";

const styles = {
  height: 200,
  backgroundColor: '#aaa',
};

function Main() {
  return(
  <div className={'container'}>
    <div className={'row'}>
      <div className={'col-sm-4'}>
        <Container1 style={styles}/>
        <Container2 />
      </div>
      <div className={'col-sm-8'}>
        <Container3 style={styles}/>
        <Container4 style={styles}/>
      </div>
    </div>
  </div>
  )
}

export default Main;