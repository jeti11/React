import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import {Link} from "react-router-dom";

function BoardList(props) {
  const [boardList, setBoardList] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/quiz/boardList')
      .then(res => {
        if (res != null) {
          const boardList = res.data;
          setBoardList(boardList);
        }
        else {
          alert('데이터베이스 연결 오류');
        }
      })
      .catch(err => {
        alert('서버와 통신 중 오류가 발생했습니다.');
        console.log(err.message());
      })
  }, [])
  
  
  return (
    <div>
      <Header title={'목록 페이지'}/>
        <div className={'container my-4'}>
          <table className={'table table-hover table-striped text-center'}>
            <colgroup>
              <col width={'10%'}/>
              <col width={'40%'}/>
              <col width={'20%'}/>
              <col width={'20%'}/>
              <col width={'10%'}/>
            </colgroup>
            <thead>
              <tr className={'fw-bold'}>
                <td>글번호</td>
                <td>제목</td>
                <td>글쓴이</td>
                <td>등록일자</td>
                <td>조회수</td>
              </tr>
            </thead>
            <tbody>
            {
              boardList.map((boardList, index) => {
                return (
                  <tr key={index}>
                    <td>{boardList.num}</td>
                    <td className={'text-start'}>
                      <Link to={`/quiz/boardDetail/${boardList.num}`} className={'text-decoration-none'}>{boardList.title}</Link>
                    </td>
                    <td>{boardList.id}</td>
                    <td>{boardList.postdate}</td>
                    <td>{boardList.visitcount}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
          <div className={'d-flex justify-content-end'}>
            <Link to={'/quiz/boardWrite'}><button className={'btn btn-outline-primary'}>글쓰기</button></Link>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default BoardList;