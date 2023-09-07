// 엘리먼트 : 리액트 앱의 가장 작은 빌드 블록
// - 웹페이지의 정보를 담고 있는 DOM에서 사용하는 용어('HTML 태그'를 뜻함)
// - 리액트에서는 엘리먼트를 리액트 엘리먼트라고 함
// - 리액트는 Virtual DOM을 사용하고 리액트 엘리먼트는 Virtual DOM 안에 존재함
// - 리액트 엘리먼트는 DOM 엘리먼트의 가상 표현
// - 리액트에서 엘리먼트는 자바스크립트의 object 타입으로 존재함
// - createElement() 함수가 아래와 같이 만들어준다

React.createElement(
  type, // type : html tag 종류
  [props], // props : html 태그 속성
  [...children] // 하위 태그 입력
)


// JSX 문법을 사용하여 작성한 코드
const element = <h1>hello world!!</h1>;

// 실제로 생성된 JS Object 타입
{
  type: 'button',
  props: {
    className: 'bg-green',
    children: {
      type: 'b',
      props: {
        children: 'hello, world'
      }
    }
  }
}

// 위의 object 타입이 구현된 모습
<button class="bg-green">
  <b>hello, world</b>
</button>

