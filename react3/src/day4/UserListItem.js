// 실제 동작하지 않는 소스코드
import React, {useEffect, useState} from "react";
import useUserStatus from "./useUserStatus";

// 사용자의 상태에 따라 사용자 id의 색상을 변경하는 컴포넌트
function UserListItem(props) {
  // 커스텀 훅 미사용 시
  // const [isOnline, setIsOnline] = useState(null);
  //
  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }
  //   // 서버에 접속하여 지정한 사용자가 온라인인지 아닌지 확인하는 로직
  //   ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
  // })
  
  // 커스텀 훅 사용 시
  const isOnline = useUserStatus(props.user.id);
  
  return (
    <li style={{color: isOnline ? 'green' : 'black'}}>props.user.name</li>
  )
}

export default UserListItem;