import React, {useState} from 'react';
import axios from "axios"; // axios 라이브러리 임포트

function AxiosDailyBoxOffice(props) {
  // useState 사용하여 화면에 출력할 데이터를 state로 설정
  // axios 통신에서 받아올 데이터인 dailyBoxOfficeList 가 배열이기 때문에 빈배열로 초기값 설정
  const [boxOffice, setBoxOffice] = useState([]);
  
  const loadBoxOffice = () => {
    // axios를 통해서 get 방식으로 비동기 통신
    axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230719')
      // 정상 통신 시
      .then(req => {
        // 통신 완료 후 전달받은 데이터 처리 부분
        // 영화진흥원 open API 의 일별박스오피스 정보 중 영화 목록만 가져옴
        const dailyBoxOffice = req.data.boxOfficeResult.dailyBoxOfficeList;
        // setState() 함수를 통해서 state로 등록된 boxOffice 변수를 수정
        setBoxOffice(dailyBoxOffice);
      })
      // 통신 오류 시
      .catch(err => {
        alert('통신 중 오류가 발생했습니다.');
        console.log(err);
      })
  }
  
  return (
    <div className={'row'}>
      <div className={'col-sm mx-auto'}>
        <table className={'table table-striped table-hover'}>
          <thead>
            <tr>
              <th>순위</th>
              <th>제목</th>
              <th>개봉일</th>
              <th>당일 관람객</th>
              <th>누적 관람객</th>
            </tr>
          </thead>
          <tbody>
            {
              // ES6 문법의 배열 관련 함수 중 map()을 사용하여 배열의 요소를 반복 출력 해준다.
              boxOffice.map(item => {
                return (
                  // 리스트 형식 들고올때 컴포넌트에서 각각의 요소를 구분하기 위한 key를 유일한 값(순번)으로 설정해줌
                  <tr key={item.rnum}>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{item.openDt}</td>
                    <td>{item.audiCnt}</td>
                    <td>{item.audiAcc}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className={'my-3 d-flex justify-content-end'}>
          <button type={'button'} className={'btn btn-primary'} onClick={loadBoxOffice}>일별박스오피스 불러오기</button>
        </div>
      </div>
    </div>
  )
}

export default AxiosDailyBoxOffice;