import { useState } from "react";

function Modal(props) {
    //props = {title:'', likCount:10, news:[], setNews:setNews함수}
    let[num, setNum] =useState(10);
    return (
        <div className="modal" style={{backgroundColor: props.bgColor}}>
            <h3>{props.title}❤{props.likeCount}</h3>
            <p>날짜</p>
            <p>상세내용</p>


            <button onClick={() => {
                //이버튼을 눌렀을때
                // 첫번째 제목 오늘의 뉴스 > Today News
                temp[0]='Today News';
                let temp = [...props.new];
                props.setNews(temp);
            }}>제목변경</button>
        </div>
    )
}

export default Modal;