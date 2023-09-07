import React, {useContext} from 'react';

const ThemeContext = React.createContext('light');
const UserContext = React.createContext('Guest');
UserContext.displayName = '컨텍스트';

function App8(props) {
  const {theme, signedInUser} = props;
  
  return (
    <div className={'container my-4'}>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          {/*컨텍스트를 사용할 자손 컴포넌트 지정*/}
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

// 부모 컴포넌트가 직접 전달한 데이터가 없으므로 props가 비었음
function Layout(props) {
  return (
    // 자식 컴포넌트 호출, 전달할 데이터 없음
    <Content />
  )
}

// 부모 컴포넌트가 전달한 데이터가 없음, props가 비었음
// useContext hooks 사용(Consumer 미사용) 하여 컨텍스트 데이터 가져옴 
function Content(props) {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  
  return (
    // 자식 컨텍스트 호출 시 컨텍스트를 props로 함께 전달시켜줌
    <ProfilePage theme={theme} user={user} />
  )
}

function ProfilePage(props) {
  return (
    <div>
      <p>{props.user}</p>
      <p>{props.theme}</p>
    </div>
  )
}
export default App8;