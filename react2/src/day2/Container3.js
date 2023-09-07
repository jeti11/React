import React from "react";


function Container3(props) {
  return (
    <div className={'mt-4'}>
      <h2>TITLE HEADING</h2>
      <p>Title description, Dec 7, 2020</p>
      <div style={props.style}>Fake image</div>
      <p>Some text...</p>
      <p className={'mt-4'}>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  )
}

export default Container3;