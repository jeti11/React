import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function BasicPage(props) {
  return (
    <div>
    {/*  헤더*/}
      <Header />
    {/*  메인*/}
      <Main />
    {/*  푸터*/}
      <Footer />
    </div>
  )
}


export default BasicPage;