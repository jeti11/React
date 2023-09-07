import React from "react";
import MainPage from "./day4/MainPage";
import Accommodate from "./day4/Accommodate";
import ToggleClass from "./day4/ToggleClass";
import ToggleFunction from "./day4/ToggleFunction";
import MyButton from "./day4/MyButton";
import ConfirmButtonClass from "./day4/ConfirmButtonClass";
import ConfirmButtonFunction from "./day4/ConfirmButtonFunction";
import Greeting from "./day4/Greeting";
import LoginControl from "./day4/LoginControl";
import Mailbox from "./day4/Mailbox";
import Counter from "./day4/Counter";
import LoginControl2 from "./day4/LoginControl2";
import LandingPage from "./LandingPage";

function App3() {
  return (
    <div className={'container mt-4'}>
      {/*<Accommodate/>*/}
      {/*<hr/>*/}
      {/*<ToggleClass/>*/}
      {/*<hr/>*/}
      {/*<ToggleFunction/>*/}
      {/*<hr/>*/}
      {/*<MyButton/>*/}
      {/*<hr/>*/}
      {/*<ConfirmButtonClass/>*/}
      {/*<hr/>*/}
      {/*<ConfirmButtonFunction/>*/}
      {/*<hr/>*/}
      {/*<Greeting isLoggedIn={true}/>*/}
      {/*<hr/>*/}
      {/*<LoginControl/>*/}
      {/*<hr/>*/}
      {/*<Mailbox unreadMessages={0}/>*/}
      {/*<br/>*/}
      {/*<Mailbox unreadMessages={10}/>*/}
      {/*<hr/>*/}
      {/*<Counter />*/}
      {/*<hr/>*/}
      <LoginControl2 />
      <hr/>
      <MainPage />
      <hr/>
      <LandingPage />
    </div>
  )
}

export default App3;