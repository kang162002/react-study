import { useState } from "react";
import './BoxColor.css';
import ColorBox from "./ColorBox";



/*
function BoxColor() {

    let [boxes, setBoxes] = useState([
        <div className="box" style={{ backgroundColor: 'red' }}></div>,
        <div className="box" style={{ backgroundColor: 'blue' }}></div>,
        <div className="box" style={{ backgroundColor: 'green' }}></div>,
        <div className="box" style={{ backgroundColor: 'black' }}></div>
    ]);
    //  컬러 박스 추가
    return (

        <div>
            <div>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.unshift( <div className="box" style={{ backgroundColor: 'red' }}></div>);
                    setBoxes(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.unshift(<div className="box" style={{ backgroundColor: 'blue' }}></div>);
                    setBoxes(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.unshift(<div className="box" style={{ backgroundColor: 'green' }}></div>);
                    setBoxes(temp);
                }}>앞초록박스추가</button>

                <button onClick={() => {
                    let temp = [...boxes];
                    temp.push(<div className="box" style={{ backgroundColor: 'red' }}></div>);

                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.push(<div className="box" style={{ backgroundColor: 'blue' }}></div>);
                    setBoxes(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.push(<div className="box" style={{ backgroundColor: 'green' }}></div>);
                    setBoxes(temp);
                }}>뒤초록박스추가</button>

                <button onClick={() => {
                    let temp = [...boxes];
                    temp.shift();
                    setBoxes(temp);
                }}>앞 박스 삭제</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.pop();
                    setBoxes(temp);
                }}>뒤 박스 삭제</button>

            </div>
          // <div className="box" style={{ backgroundColor: 'red' }}></div>
          // <div className="box" style={{ backgroundColor: 'blue' }}></div>
          //  <div className="box" style={{ backgroundColor: 'green' }}></div>
           // <div className="box" style={{ backgroundColor: 'black' }}></div> 

            // {boxes}
        // </div>
    )

}
*/


function BoxColor() {
    let [boxes, setBoxes] = useState([
        'red', 'blue', 'green', 'black'
    ]);

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = ['red', ...boxes];
                    setBoxes(temp);
                 }}>앞빨간박스추가</button>
                <button onClick={() => {
                     let temp = ['blue', ...boxes];
                    setBoxes(temp);
                 }}>앞파란박스추가</button>
                <button onClick={() => { 
                     let temp = ['green', ...boxes];
                    setBoxes(temp);
                }}>앞초록박스추가</button>

                <button onClick={() => { 
                     let temp = [...boxes, 'red'];
                    setBoxes(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                     let temp = [...boxes, 'blue'];
                    setBoxes(temp);
                 }}>뒤파란박스추가</button>
                <button onClick={() => {
                     let temp = [...boxes, 'green'];
                    setBoxes(temp);
                 }}>뒤초록박스추가</button>
                 <button onClick={()=>{
                    let temp =[...boxes];
                    temp.shift();
                    setBoxes(temp);
                 }}>앞 박스 삭제</button>
                  <button onClick={()=>{
                    let temp =[...boxes];
                    temp.pop();
                    setBoxes(temp);
                 }}>뒤 박스 삭제</button>
            </div>


            {
               boxes.map((item)=>{
                //   return<div className='box' style={{backgroundColor:item}}></div>
                return<ColorBox bgColor={item} />
               }) 
            }
        </div>
    )


}
export default BoxColor;