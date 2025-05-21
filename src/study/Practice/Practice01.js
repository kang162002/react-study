import { useState } from "react";

// 기본 작성
function Practice01 (){

    
    
    let [cnt1, setCnt1] = useState(0);

    return(
    <div className="App">
        <button onClick={()=>{
            setCnt1(cnt1 + 2);
        
        }}>짝수 출력</button>
        {/* <span style={{color : 'red'}}>{cnt1}</span> */}
        <span className="even-red">{cnt1}</span>
    </div>
    )


}
    

export default Practice01;