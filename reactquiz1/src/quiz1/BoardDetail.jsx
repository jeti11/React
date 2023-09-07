import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function BoardDetail(props) {
  // const [num, setNum] = useState('');
  const params = useParams();
  
  const num = params.num;
  
  const navi = useNavigate();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState('');
  const [postdate, setPostdate] = useState('');
  const [visitcount, setVisitcount] = useState('');
  
  const titleChange = e => setTitle(e.target.value);
  const contentChange = e => setContent(e.target.value);
  const idChange = e => setId(e.target.value);
  
  useEffect(() => {
    axios.get('http://localhost:8080/quiz/boardDetail', {
      params: {
        num: num,
      }
    })
      .then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setId(res.data.id);
        setPostdate(res.data.postdate);
        setVisitcount(res.data.visitcount);
      })
      .catch(err => {
        alert('서버와 통신 중 오류가 발생했습니다.');
        console.log(err.message());
      })
  }, [])
  
  const updateClick = () => {
    axios.put('http://localhost:8080/quiz/boardUpdate', null, {
      params: {
        num: num,
        title: title,
        content: content,
        id: id,
      }
    })
      .then(res => {
      alert('수정이 완료 되었습니다.');
      })
      .catch(err => {
        alert('서버와 통신 중 오류가 발생했습니다.');
        console.log(err.message());
      })
  }
  
  const deleteClick = () => {
    axios.delete('http://localhost:8080/quiz/boardDelete', {
      params: {
        num: num,
      }
    })
      .then(res => {
        alert('삭제가 완료 되었습니다.');
        navi('/quiz/boardList');
      })
      .catch(err => {
        alert('서버와 통신 중 오류가 발생했습니다.');
      })
  }
  
  return (
    <div>
      <Header title={'상세보기 페이지'}/>
      <div className={'container my-4'}>
        <div className={'row'}>
          <div className={'col-sm-8 mx-auto'}>
            <div className={'my-3'}>
              <label htmlFor="num" className={'form-label'}>글번호</label>
              <input type="text" id={'num'} className={'form-control'} value={num} readOnly={true}/>
            </div>
            <div className={'my-3'}>
              <label htmlFor="title" className={'form-label'}>제목</label>
              <input type="text" id={'title'} className={'form-control'} value={title} onChange={titleChange}/>
            </div>
            <div className={'my-3'}>
              <label htmlFor="content" className={'form-label'}>내용</label>
              <textarea id="content" rows="10" className={'form-control'} value={content} onChange={contentChange} ></textarea>
            </div>
            <div className={'my-3'}>
              <label htmlFor="id" className={'form-label'}>글쓴이</label>
              <input type="text" id={'id'} className={'form-control'} value={id} onChange={idChange}/>
            </div>
            <div className={'my-3'}>
              <label htmlFor="postdate" className={'form-label'}>등록일자</label>
              <input type="text" id={'postdate'} className={'form-control'} value={postdate} readOnly={true}/>
            </div>
            <div className={'my-3'}>
              <label htmlFor="visitcount" className={'form-label'}>조회수</label>
              <input type="text" id={'visitcount'} className={'form-control'} value={visitcount} readOnly={true}/>
            </div>
            <div className={'row'}>
              <div className={'col-sm'}>
                <Link to={'/quiz/boardList'}><button type={'button'} className={'btn btn-info'}>목록</button></Link>
              </div>
              <div className={'col-sm d-flex justify-content-end'}>
                <button type={'button'} className={'btn btn-success'} onClick={updateClick}>수정</button>
                <button type={'button'} className={'btn btn-secondary ms-2'} onClick={deleteClick}>삭제</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BoardDetail;