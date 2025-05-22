import Box from "./Box";

function Props01() {
    let titleArr = ['아침', '점심', '저녁', '야식',];
    let contentArr = ['시리얼', '햄버거', '삼겹살', '치킨'];


    return (
        <div>
            <p></p>

            <Box title={titleArr[0]} content={contentArr[0]} /> {/* Box 컴포넌트에 매개변수 전달 */}
            <Box title={titleArr[1]} content={contentArr[1]} />
            <Box title={titleArr[2]} content={contentArr[2]} />
            <Box title={titleArr[3]} content={contentArr[3]} />


        </div>
    );

}
export default Props01;