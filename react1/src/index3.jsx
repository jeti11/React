import React from "react";
import ReactDOM from "react-dom";


// 순수 자바스크립트로 화면 구성
class Hello extends React.Component {
  render() {
    // 태그생성 (태그타입, 매개변수, 하위태그(여기서는 글자출력))
    return React.createElement("div", null, `Hello ${this.props.toWhat}`);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(Hello, {toWhat: "World"}, null),
  document.getElementById("root")
);