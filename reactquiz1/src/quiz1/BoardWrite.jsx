import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import BoardList from "./BoardList";

function BoardWrite(props) {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState('');
  
  const navi = useNavigate();
  
  const titleChange = (e) => setTitle(e.target.value);
  const contentChange = (e) => setContent(e.target.value);
  const idChange = (e) => setId(e.target.value);
  
  
  const writeSubmit = () => {
    axios.post('http://localhost:8080/quiz/boardWrite', null, {
      params: {
        title: title,
        id: id,
        content: content,
      }
    })
      .then(res => {
        alert('글 등록을 완료했습니다.');
      })
      .catch(err => {
        alert('서버와 통신 중 오류가 발생했습니다.');
        console.log(err.message());
      })
    navi('/quiz/boardList');
  }
  
  return (
    <div>
      <Header title={'글쓰기 페이지'}/>
      <div className={'container my-4'}>
        <div className={'row'}>
          <div className={'col-sm-6 mx-auto'}>
            <form onSubmit={writeSubmit}>
              <div className={'my-3'}>
                <label htmlFor="title" className={'form-label'}>제목</label>
                <input type="text" id={'title'} className={'form-control'} value={title} onChange={titleChange} placeholder={'제목을 입력하세요'}/>
              </div>
              <div className={'my-3'}>
                <label htmlFor="id" className={'form-label'}>아이디</label>
                <input type="text" id={'id'} className={'form-control'} value={id} onChange={idChange} placeholder={'아이디를 입력하세요'}/>
              </div>
              <div className={'my-3'}>
                <label htmlFor="content" className={'form-label'}>내용</label>
                <textarea id="content" rows="10" className={'form-control'} value={content} onChange={contentChange} placeholder={'내용을 입력하세요'}></textarea>
              </div>
              <div className={'my-3 d-grid'}>
                <button type={'submit'} className={'btn btn-primary'}>등록</button>
                <Link to={'/quiz/boardList'} className={'text-decoration-none'}>
                  <div className={'my-2 d-grid'}>
                    <button className={'btn btn-secondary'}>취소</button>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BoardWrite;