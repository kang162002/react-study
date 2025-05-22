import Box from "./Box";
import { useState } from "react";

function Props02() {

    //데이터 변경 > 변경된 데이터가 유지 > 화면에 표시
    // 재 렌더링에서도 데이터 유지
    //상태변수 (state)w
    let [titleArr, setTitleArr] = useState(['아침', '점심', '저녁', '야식']);
    let [contentArr, setContentArr] = useState(['시리얼', '햄버거', '삼겹살', '치킨']);




    return (
        <div>
            <p></p>

            <button onClick={() => {
                //setTitleArr(['아침', '점심', '저녁', '야식']);
                // setContentArr(['시리얼', '햄버거', '삼겹살', '치킨']);
                /* 
                titleArr.push('추가야식');
                 contentArr.push('곱창');
                 console.log(titleArr);
                 console.log(contentArr);
 
                 setTitleArr(titleArr);
                 setContentArr(contentArr);
                 */
                //얕은복사(주소만) 깊은복사 (값까지 통째로 )
                //let temp = titleArr; // 얕은복사

                // let temp = [...titleArr,'추가야식']; // [...]한번 분해하는것 

                // 만약 추가조건이 최대 6개까지만 가능하다
                if (titleArr.length < 6) {

                    let temp = [...titleArr];
                    temp.push('추가야식');
                    setTitleArr(temp) // 새로운 주소의 배열 => state 변수 값 바뀜 인식 > 재렌더링

                    contentArr.push('곱창');
                }
                

                // let temp = [...titleArr];
                // temp.push('추가야식' );
                // setTitleArr(temp) // 새로운 주소의 배열 => state 변수 값 바뀜 인식 > 재렌더링

                // contentArr.push('곱창'); //이상태로도 그냥 바로 값은 바로 들어감
                // let temp2 = [...contentArr];
                // temp2.push('곱창');
                // setContentArr(temp);

            }}>컴포넌트 추가</button>
            {/* Box 컴터넌트 매개변수  */}
            {
                titleArr.map((item, index) => {
                    // return<Box title={item}content={contentArr[index]}/>;
                    return <Box title={titleArr[index]} content={contentArr[index]} s />;
                })
            }


        </div>
    );

}
export default Props02;