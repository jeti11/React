import React from 'react';
import WelcomeDialog from "./day6/WelcomeDialog";
import SplitPane from "./day6/SplitPane";
import Contacts from "./day6/Contacts";
import Chat from "./day6/Chat";
import Dialog2 from "./day6/Dialog2";
import WelcomeDialog2 from "./day6/WelcomeDialog2";
import SignUpDialog from "./day6/SignUpDialog";
import ProfileCard from "./day6/ProfileCard";
import Toolbar from "./day6/Toolbar";

function App5(props) {
  
  return (
    <div className={'container my-4'}>
      <WelcomeDialog />
      <hr/>
      {/*부모 컴포넌트인 App5에서 자식 컴포넌트인 SplitPane을 호출*/}
      {/*자식 컴포넌트 호출 시 속성 left, right에 다른 자식 컴포넌트를 전달함*/}
      {/*자식 컴포넌트를 호출 시 속성에 데이터, 함수, 컴포넌트 등 모든 타입의 데이터를 저장 및 전달할 수 있음*/}
      <SplitPane left={<Contacts />} right={<Chat />}/>
      <hr/>
      <WelcomeDialog2 />
      <hr/>
      <SignUpDialog />
      <hr/>
      <ProfileCard />
      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default App5;