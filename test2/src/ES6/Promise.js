
// 프로미스란? 자바스크립트에서 비동기 함수의 동기 방식으로 처리하기 위해서 제공하는 객체

// 동기 방식 : 외부리소스에 접근하여 작업 후 종료하고 다시 되돌아와서 원래 프로그램을 처리하는 방식
// 비동기 방식 : 외부리소스의 작업은 따로 작동하도록 하고, 원래 프로그램을 처리하는 방식

// 자바스크립트는 기본적으로 싱글쓰레드 방식, 비동기 방식으로 프로그램을 처리하고 있음(자바는 멀티쓰레드 방식)
// 비동기 방식의 처리 중 반드시 동기 방식으로 프로그램을 처리해야 할 경우 callback 함수를 사용하여 동기방식으로 처리함
// callback을 여러번 사용하게 될 경우 프로그램의 복잡도가 급상승함
// 이러한 콜백지옥을 처리하기 위해서 ES6에서는 프로미스를 사용함

import React from 'react';
import $ from 'jquery';

console.log("글자 출력!!"); // 1

// 이벤트 루프로 실행을 위임함
setTimeout(function () { // 2
  console.log("5초 후 출력되는 문자");
}, 5000);

console.log("타이머 실행 후 출력되는 문자"); // 3

// 자바에서는 1번, 2번(5초 대기 후) 3번 순으로 출력됨
// 자바스크립트는 비동기 방식이라 2번 작업을 이벤트큐에 던지고 원래 프로그램의 작업을 계속함
// -> 1번, 3번, 2번 순으로 출력됨

function getData1() {
  // 이벤트 루프에 실행을 위임함
  $.ajax({
    url: "http://localhost:8080/async/data1",
    type: "GET",
    success: function (data) {
      console.log(`통신 성공 :
    ${data}`);
    },
    error: function () {
      console.log("통신 중 오류가 발생했습니다.");
    }
  });
}

export { getData1 };

























