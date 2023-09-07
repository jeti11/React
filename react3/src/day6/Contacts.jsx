import React from 'react';

function Contacts(props) {
  
  return (
    <ul className={'nav flex-column p-3'}>
      <li className={'nav-item'}><a href="#" className={'nav-link'}>링크1</a></li>
      <li className={'nav-item'}><a href="#" className={'nav-link'}>링크2</a></li>
      <li className={'nav-item'}><a href="#" className={'nav-link'}>링크3</a></li>
    </ul>
  )
}

export default Contacts;