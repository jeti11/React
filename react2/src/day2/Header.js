import React from "react";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

function Header(props) {
  return (
    <div>
      <HeaderTop title={'리액트로 만든 부트스트랩 페이지'} />
      <Navbar />
    </div>

  )
}

export default Header;