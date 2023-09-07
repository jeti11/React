import React from 'react';
import Card from "./Card";

function ProfileCard(props) {
  
  return (
    // 자식 컴포넌트에 title, backgroundColor 속성에 데이터를 전달
    // 컴포넌트 합성 기법 중 포함 방식을 통해서 자식 컴포넌트에 html 태그를 전달
    <div>
      <Card title={'김채원'} backgroundColor={'DodgerBlue'}>
        <p>안녕하세요 김채원입니다.</p>
        <p>리액트 처음 해봅니다.</p>
      </Card>
      <Card title={'김채원'} backgroundColor={'DeepPink'}>
        <p>안녕하세요 김채원입니다.</p>
        <p>리액트 처음 해봅니다.</p>
      </Card>
      {/*backgroundColor가 없으면 기본값 색상인 blue 적용됨*/}
      <Card title={'김채원'} backgroundColor={''}>
        <p>안녕하세요 김채원입니다.</p>
        <p>리액트 처음 해봅니다.</p>
      </Card>
    </div>

  )
}

export default ProfileCard;