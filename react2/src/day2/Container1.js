import React from "react";

const styles = {
  height: 200,
  background: '#aaa',
};

function Container1 (props) {
  return (
    <div className={'mt-4'}>
      <h2>About Me</h2>
      <p>Photo of me</p>
      <div style={styles}>
        Fake Image
      </div>
      <p>Some text about me in culpa qui officia deserunt mollitanim...</p>
    </div>
  )
}

export default Container1;