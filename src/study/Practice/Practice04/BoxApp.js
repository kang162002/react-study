import React, { useState } from "react";
import '../Practice04/BoxCss.css';



function BoxApp() {
    
    let [boxes, setBoxes] = useState([ <div className="box">박스</div>, <div className="box">박스</div>]);

        let[arr, setArr] =useState([1,1]);  // 갯수만 채워준다

    return (
        <div>
            <button onClick={()=>{
                // let temp = [...boxes];
                // temp.push( <div className="box">박스</div>);
                // setBoxes(temp);

                // ar 배열에다가 아무 값이나 추가 -> arr 길이만큼 반복하면서 box 를 그림
                let temp = [...arr, 1];// 갯수만 일단 채우는것
                setArr(temp); 
                

            }}>추가</button>
            {/* <div style={{margin: '10px'}}></div> */}
            {/* <div className="box">박스</div> */}
        {/* {boxes} */}

        {

            //arr 배열의 갯수만큼 반복
            // for(let i=0; i<arr.length; i++) 
            arr.map(()=>{
                return  <div className="box">박스</div>;
                //  <Box/> 컴터넌트로 할수도있다
            })
        }

        </div>
    )

}
export default BoxApp;