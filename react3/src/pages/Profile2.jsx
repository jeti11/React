import React, {useState} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

function Profile2(props) {
  // 주소 뒤에 있는 파라미터를 ? 기호를 포함하여 모두 문자열로 그대로 가져옴
  // -> 사용자가 직접 파싱 작업을 진행해야 함
  const profile = useLocation();
  console.log(`useLocation()으로 가져온 데이터`);
  console.log(profile);
  const {pathname, search} = profile;
  console.log(pathname);
  console.log(search);
  
  // 파라미터 값을 자동으로 파싱하여 데이터를 가져옴
  // useSearchParams() 로 가져오는게 조금 더 편함
  const [params, setParams] = useSearchParams();
  console.log(`useSearchParams로 가져온 데이터`);
  console.log(params);
  // 실제 데이터를 출력시 get 함수를 사용해야 함
  console.log(params.get('username'));
  console.log(params.get('age'));
  
  
  return (
    <div>
      <h1>Profile2 페이지</h1>
      <h3>파라미터1 : {params.get('username')}</h3>
      <h3>파라미터2 : {params.get('age')}</h3>
    </div>
  )
}

export default Profile2;