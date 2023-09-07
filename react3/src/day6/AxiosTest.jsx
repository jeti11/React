import React, {useEffect} from 'react';
import axios from "axios";

function AxiosTest(props) {
  
  useEffect( () => {
    axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230719')
    .then(req => {
      alert('통신 성공');
      console.log(req);
      
      const list = req.data.boxOfficeResult.dailyBoxOfficeList;
      
      // return() 외부에서는 일반적인 for문 사용가능(자바스크립트 문법적용)
      for (let i = 0; i < list.length; i++) {
        let str = `순번 : ${list[i].rnum}`;
        str += `순위 : ${list[i].rank}`;
        str += `제목 : ${list[i].movieNm}`;
        str += `개봉일 : ${list[i].openDt}`;
        str += `관람객 : ${list[i].audiAcc}`;
        console.log(`${str}\n`);
      }
    })
      .catch(err => {
        alert('통신 실패');
        console.log(err);
      })
  }, []);
  
  return (
    <div>
    
    </div>
  )
}

export default AxiosTest;