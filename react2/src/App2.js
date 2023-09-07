import React from "react";
import WelcomeFunc from "./day2/WelcomeFunc";
import WelcomeClass from "./day2/WelcomeClass";
import Comment from "./day2/Comment";
import Comment2 from "./day2/Comment2";
import ReplyList from "./day2/ReplyList";
import BootstrapCDN from "./day2/BootstrapCDN";
import BasicPage from "./day2/BasicPage";

// 데이터 출력을 위한 object 타입의 변수
const author = {
  avatarUri: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.crowdpic.net%2Fdetail-thumb%2Fthumb_d_E477B183DAEDB7FDB5321A06B7960D31.png&type=sc960_832',
  name: '강아지',
}

function App2() {
  return (
    <div>
      {/*/!*컴포넌트 합성*!/*/}
      {/*<h1>함수 컴포넌트 사용</h1>*/}
      {/*<WelcomeFunc name={'리액트'}/>*/}
      {/*<hr/>*/}
      {/*<h1>클래스 컴포넌트 사용</h1>*/}
      {/*<WelcomeClass name={'리액트'}/>*/}
      {/*<hr/>*/}
      {/*/!*자식 컴포넌트 Comment 호출*!/*/}
      {/*/!*속성으로 author, text, date 전달*!/*/}
      {/*<Comment author={author} text={'강아지 이미지'} date={new Date()}/>*/}
      {/*<hr/>*/}
      {/*<Comment2 author={author} text={'컴포넌트 추출 해보기'} date={new Date()}/>*/}
      {/*<br/>*/}
      {/*<hr/>*/}
      {/*<br/>*/}
      
      {/*<ReplyList/>*/}
      {/*<br/>*/}
      {/*<hr/>*/}
      {/*<br/>*/}
      {/*<BootstrapCDN/>*/}
      {/*<br/>*/}
      {/*<hr/>*/}
      {/*<br/>*/}
      <BasicPage />
      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default App2;