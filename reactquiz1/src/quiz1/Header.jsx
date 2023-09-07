import React from 'react';

function Header(props) {
  
  return (
    <div className={'container-fluid bg-secondary bg-opacity-25 text-center p-5'}>
      <h2>※{props.title}※</h2>
    </div>
  )
}

export default Header;