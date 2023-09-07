import React from 'react';

// 컨텍스트 사용을 위해서 React.createContext() 실행
// 컨텍스트 2개 생성
const ThemeContext = React.createContext('light');
const UserContext = React.createContext('Guest');

function App7(props) {
  // 전개연산법으로 object타입인 props의 key와 동일한 이름의 변수에 데이터 저장
  const {theme, signedInUser} = props;
  
  return (
    <div className={'container my-4'}>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          {/*자식 컴포넌트인 Layout를 호출*/}
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

function Layout(props) {
  return (
    <Content />
  )
}

function Content() {
  return (
    // Provider를 겹쳐서 사용했기 때문에 Consumer도 겹쳐서 사용함
    <ThemeContext.Consumer>
      {/*컨텍스트에 저장된 속성명(key)은 value로 고정되어 있으므로 Consumer에서 가져올 데이터의 이름을 설정할 수 있음 */}
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
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

export default App7;


























