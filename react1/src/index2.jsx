import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX 문법으로 화면 구성


// index.html 파일에서 id값이 'root'인 태그를 선택
const root = ReactDOM.createRoot(document.getElementById('root'));

// 리액트를 사용하여 화면을 그려줌
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>  // return 에 들어가는 태그가 1개이기 때문에 괄호()를 안붙여도 됨
  }
  
  render() {
    return (
      <div>
        <div>Hello {this.props.toWhat}</div>
        <h1>두줄 쓰기</h1>
        <br/>
        <h2>세줄 쓰기</h2>
      </div>
    )
  }
}

// id값이 root인 태그에 아래의 내용을 그려줌
root.render(
  <Hello toWhat={"SENF!!"}/>
);



