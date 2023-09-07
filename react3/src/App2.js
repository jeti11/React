import React from "react";
import SetStateClass from "./day3/SetStateClass";
import SetStateFunc from "./day3/SetStateFunc";
import NotificationList from "./day3/NotificationList";
import Counter from "./day3/Counter";
import CounterUseState from "./day3/CounterUseState";
import CounterUseEffect from "./day3/CounterUseEffect";
import VolumeControl from "./day3/VolumeControl";
import TextInputWithFocusButton from "./day3/TextInputWithFocusButton";

function App2(props) {
  return(
    <div>
      {/*<SetStateClass/>*/}
      {/*<hr/>*/}
      {/*<SetStateFunc />*/}
      {/*<hr/>*/}
      {/*/!*<NotificationList />*!/*/}
      {/*<hr/>*/}
      {/*<Counter/>*/}
      {/*<hr/>*/}
      {/*<CounterUseState/>*/}
      {/*<br/>*/}
      {/*<CounterUseEffect />*/}
      <VolumeControl />
      <br/>
      <TextInputWithFocusButton />
    </div>
  )
}

export default App2;