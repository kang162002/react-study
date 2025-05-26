import BoxColor from "./BoxColor";




function ColorBox(props) {
    return (
        <div className='box' style={{ backgroundColor: props.bgColor }}>
            <button onClick={()=>{
                let temp=[...props.boxes];  //1. props에있는 boxes를 받아온다.       // 4. 받은걸 반복? 
                temp.splice(props.index,1); //2. index에있는 boxes에있는 1개를 지운다
                props.setBoxes(temp);   //  3. props로 setBoxes안에있는 temp로올린다
                // boxes, setBoxes, index
                // props.index  // props 로 변수를 넘길수있다.
            }}>X</button>
        </div>
    );
}
export default ColorBox;