import './NewsBlog.css';
import { useState } from 'react';




function NewsBlog() {

    let title = "React Study";
    let [news1, setNews1] = useState('오늘의뉴스')
    let [news2, setNews2] = useState('어제의뉴스')
    let [news3, setNews3] = useState('내일의뉴스')

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스'])
    // 배열

    let [cnt1, setCnt1] = useState(0);
    let [cnt2, setCnt2] = useState(0);
    let [cnt3, setCnt3] = useState(0);

    let [ likeArr, setLikeArr] =useState ([0,0,0]);




    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={{ color: "orange", fontSize: '20px' }}>{title}</p>
            </div>


            {/* 
            <div className='post-list'>
                
                <h4 onClick={() => {

                    setCnt(cnt + 1);

                }}>{news[0]}<span>❤</span>{cnt}</h4>
                <p>내용 무</p>
                <button onClick={() => {
                    // setNews('Today News')
                    // ['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']
                    // news[0] = 'Today News';
                    let temp = [...news];
                    temp[0] = 'Today News';
                    setNews(temp);
                }}>제목 변경</button>
            </div> */}

            <div className='post-list'>
                {/* <h4>{news2}</h4> */}
                <h4 onClick={() => {


                    let temp = [...likeArr];
                    temp[0] +=1;
                    setLikeArr(temp);


                }}>{news[0]}<span>❤</span>{likeArr[0]}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                {/* <h4>{news2}</h4> */}
                <h4 onClick={() => {


                let temp = [...likeArr];
                temp[1] += 1;
                setLikeArr(temp)
                }}>{news[1]}<span>❤</span>{likeArr[1]}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4 onClick={() => {
                    let temp =[...likeArr];
                    temp [2] += 1;
                    setLikeArr(temp);
                }}>{news[2]}<span>❤</span>{likeArr[2]}</h4>
                <p>내용 무</p>
            </div>

        </div>
    );
}

export default NewsBlog;