import React from "react";

// css 파일에서의 사용은 기존 css 사용하는 방법과 100% 똑같음

// 리액트에서 CSS 사용 시 html 태그 속성인 class를 className으로 표기
// ES6 에서 class가 추가되어 class 사용 시 클래스를 뜻하는 키워드로 인식될 수 있기 때문에 className으로 변경됨
// JSX 문법에서 {} 사용 시 자바스크립트 코드를 사용할 수 있음

// 리액트 파일이 자바스크립트이므로 기존 css문법을 그대로 사용할 수 없음
// 자바스크립트 변수를 선언하고 object 타입으로 css 속성을 입력해서 사용함
// css 속성명을 카멜명명법으로 수정하여 입력해야 함
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid gray',
    borderRadius: 16,
  },
  imageContainer: {
  
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  replyText: {
    color: 'black',
    fontSize: 16,
  },
};
function Reply(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img src={'https://media.istockphoto.com/id/903053114/ko/%EB%B2%A1%ED%84%B0/%ED%94%84%EB%A1%9C%ED%95%84-%EC%9D%B5%EB%AA%85-%EC%96%BC%EA%B5%B4-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%9A%8C%EC%83%89-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%82%AC%EB%9E%8C%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%82%A8%EC%84%B1-%EA%B8%B0%EB%B3%B8-%EC%95%84%EB%B0%94%ED%83%80%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%82%AC%EC%A7%84-%EA%B0%9C%EC%B2%B4-%ED%8B%80%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98.jpg?s=170667a&w=0&k=20&c=qvhnABHD-JsdBTRE9xVhU1cxBK5Pa-GlPUKem01MNcc='} style={styles.image} />
      </div>
      
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.replyText}>{props.content}</span>
      </div>
    </div>
  )
}

export default Reply;


























