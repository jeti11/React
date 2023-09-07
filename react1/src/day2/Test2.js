
// JSX 문법으로 구성한 화면
function Button(props) {
  return (
    <button className={`bg-${props.color}`}>
      <b>{props.children}</b>
    </button>
  )
}


function ConfirmDialog(props) {
  return (
    <div>
      <p>내용을 확인하셨으면 확인 버튼을 클릭하세요</p>
      <Button color={'green'}>확인</Button>
    </div>
  )
}

// Button 컴포넌트를 활용하여 여러 엘리먼트 생성 가능함
function ConfirmDialog2(props) {
  return (
    <div>
      <p>내용을 확인하셨으면 확인 버튼을 클릭하세요</p>
      <Button color={'green'}>확인</Button>
      <Button color={'red'}>취소</Button>
    </div>
  )
}

// 실제로 생성되는 js object
{
  type: 'div',
  props: {
    children: [
      { // p태그 생성
        type: 'p',
        props: {
          children: '내용을 확인하셨으면 확인 버튼을 클릭하세요'
        }
      },
      { // Button 컴포넌트 부분
        type: 'button',
        props: {
          className: 'bg-green',
          children: {
            type: 'b',
            props: {
              children: '확인'
            }
          }
        }
      }
    ]
  }
}