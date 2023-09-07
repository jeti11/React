import {useEffect, useState} from "react";

// 커스텀 훅 생성하기(접두사 'use' 붙여야 함)
function useUserStatus(userId) {
  const [isOnline, setIsOnline] = useState(null);
  
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOline);
    }
    
    ServerAPI.subscribeStatus(userId, handleStatusChange);
  })
  
  return isOnline;
}


export default useUserStatus;