import React from "react";

function Container2() {
  return (
    <div className={'mt-4'}>
      <h2>Some Links</h2>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul className={'nav nav-pills flex-column'}>
        <li className={'nav-item'}>
          <a href="#" className={'nav-link active'}>Active</a>
        </li>
        <li className={'nav-item'}>
          <a href="#" className={'nav-link'}>Link1</a>
        </li>
        <li className={'nav-item'}>
          <a href="#" className={'nav-link'}>Link2</a>
        </li>
        <li className={'nav-item'}>
          <a href="#" className={'nav-link disabled'}>Disabled</a>
        </li>
      </ul>
    </div>
  )
}

export default Container2;