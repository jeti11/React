import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BoardList from "./quiz1/BoardList";
import BoardWrite from "./quiz1/BoardWrite";
import BoardDetail from "./quiz1/BoardDetail";

function App2(props) {
  
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route>밑에 <Route>를 입력하는 방법 사용 시(중첩 Route 사용), 자식 Route인 boardList, boardWrite, boardDetail 이 <outlet>이 된다.*/}
        <Route path={'/quiz'}>
          <Route path={'boardList'} element={<BoardList />} />
          <Route path={'boardWrite'} element={<BoardWrite />} />
          <Route path={'boardDetail/:num'} element={<BoardDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App2;