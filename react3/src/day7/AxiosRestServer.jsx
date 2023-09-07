import React from 'react';
import axios from "axios";

function AxiosRestServer(props) {
  const sendDataGet = () => {
    axios.get('http://localhost:8080/async/sendDataGet')
      .then(res => {
        if (res.data.result == "success") {
          console.log(`수신된 데이터 : ${res.data.data}`);
        }
        else {
          console.log('오류가 발생했습니다.');
        }
      })
      .catch(err => {
        errMessage('get', err);
      });
  }
  
  const sendDataGetParam = () => {
    // get, delete 는 매개변수를 전달할 때 두번째 매개변수(data) 필요없음
    axios.get('http://localhost:8080/async/sendDataGetParam', {
      params: {idx: 10}
    })
      .then(res => {
        console.log('GET 방식 비동기 통신 성공');
        console.log(res);
      })
      .catch(err => {
        errMessage('get', err);
      })
  }
  
  const sendDataPost = () => {
    axios.post('http://localhost:8080/async/sendDataPost', null, {
      params: {
        userId: 'testId',
        userPw: 'testpassword'
      }
    })
      .then(res => {
        console.log('POST 방식 비동기 통신 성공');
        console.log(res);
      })
      .catch(err => {
        errMessage('post', err);
      })
  }
  
  const sendDataPut = () => {
    axios.put('http://localhost:8080/async/sendDataPut', null, {
      params: { idx: 5 }
    })
      .then(res => {
        console.log('PUT 방식 비동기 통신 성공');
        console.log(res);
      })
      .catch(err => {
        errMessage('put', err);
      })
  }
  
  const sendDataDelete = () => {
    // delete, get은 매개변수를 전달할 때 두번째 매개변수(data) 필요없음
    axios.delete('http://localhost:8080/async/sendDataDelete', {
      params: { idx: 100 }
    })
      .then(res => {
        console.log('DELETE 방식 비동기 통신 성공');
        console.log(res);
      })
      .catch(err => {
        errMessage('delete', err);
      })
  }
  
  function errMessage(type, message) {
    console.log(`${type} 방식 통신 중 오류가 발생했습니다.`);
    console.log(message);
  }
  
  return (
    <div className={'mt-5 p-5'}>
      <h1 className={'text-center'}>Axios를 사용한 비동기 통신</h1>
      <div className={'row'}>
        <div className={'col-sm-8 mx-auto'}>
          <div></div>
          
          <div className={'my-3 d-flex justify-content-center'}>
            <button type={'button'} className={'btn btn-primary me-3'} onClick={sendDataGet}>get 방식</button>
            <button type={'button'} className={'btn btn-secondary me-3'} onClick={sendDataGetParam}>get 방식</button>
            <button type={'button'} className={'btn btn-success me-3'} onClick={sendDataPost}>post 방식</button>
            <button type={'button'} className={'btn btn-info me-3'} onClick={sendDataPut}>put 방식</button>
            <button type={'button'} className={'btn btn-warning'} onClick={sendDataDelete}>delete 방식</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AxiosRestServer;