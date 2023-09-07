import React from "react";
import Book from "./Book";

function Library(props) {  // 매개변수에 props는 무조건 들어간다고 보면 됨
  return (
    <div>
      <Book name={'리액트 시작하기'} price={20000}></Book><br/>
      <Book name={'스프링부트 시작하기'} price={30000}/><br/>
      <Book name={'mysql 시작하기'} price={40000} />
    </div>
  )
}

export default Library;