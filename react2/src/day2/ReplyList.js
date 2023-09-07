import React from "react";
import Reply from "./Reply";
import reply from "./Reply";


const replys = [
  {name: '김채원', content: '첫번째 댓글입니다.'},
  {name: '카즈하', content: '두번째 댓글입니다.'},
  {name: '최예나', content: '2번 뺐겼네ㄷㄷ'},
];

function ReplyList(props) {
  return (
    <div>
      {
        // for문 써서 해도 상관없음
        // map 쓰면 반환값이 존재함
        replys.map((reply) => {
          return (
            <Reply name={reply.name} content={reply.content} />
          );
        })
      }
    </div>
  )
    // <div>
    //   <Reply name={replys[0].name} content={replys[0].content}/>
    //   <Reply name={replys[1].name} content={replys[1].content}/>
    //   <Reply name={replys[2].name} content={replys[2].content}/>
    // </div>
}

export default ReplyList;