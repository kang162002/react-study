import './Detail.css';

import { useParams } from 'react-router';
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import { useEffect } from 'react';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';



//function Detail(props){
function Detail({ foods }) {


    let { id } = useParams();

    let [orderCount, setOrderCount] = useState(0);
    //  foods 전체 정보 보유

    let [showModal, setShowModal] = useState(false);

    let [viewClass, setViewClass] = useState('');


    //  id  : 현재 페이지에서 표시해야하는 food의 id가 확인됨

    // foods에 들어있는 id 값 == 주소 params 에 들어있는 id 값
    let food = foods.find((food) => {
        return food.id == id;
    })

    //food.findIndex

    // console.log(food);


    // LifeCycle (생성mount, 수정update, 삭제unmount)
    //  useEffect(실행 함수, 의존성 배열)
    //  useEffect(실행 함수{ retrun ()=>{clean up function}}, 의존성 배열)
    //                             

    useEffect(() => {    // 의존성 배열X > 매번 랜더링시 실행 ( 러딩생성 mount, 수정 update)
        console.log('useEffect')
    })

    useEffect(() => {     // 의존성 빈 배열o > 로딩생성 (mount)
        console.log('useEffect, []')
    }, [])

    useEffect(() => { //  의존성 배열 >  로딩생성 Mount, 배열내에 변수가 변경될떄(수정 update)
        console.log('useEffect, [orderConut]')
        console.log(orderCount)

        return () => { console.log('use,[orderConut] 에 들어있는 retrun함수 실행 ') }

    }, [orderCount])

    /*
    useEffect(()=>{

        let cnt = 0;

      let intv =  setInterval(()=>{

            console.log(cnt++);

        }, 1000)

        return ()=>{
            clearInterval(intv);

        }
    })
*/

    // modal창 가리기
    useEffect(() => {

        setTimeout(() => {
            setShowModal(false);
        }, 2000);

    }, [])

    // conatiner opacity를 이용한 트랜지션 효과

    useEffect(() => {

        setTimeout(() => {
            setViewClass('end'); // '' > 'end'
            // 'start ' > 'start end'
        }, 2);

    }, [])                   







    if (food == undefined) {     // 잘못된 id값이 들어옴. 해당id 상품없음

        return (
            <div><h1>존재하지 않는 상품입니다. 잘못된 접근입니다</h1></div>
        )


    }


    // style 객체 단위로 관리
    const tempStyle = {
        color: "orange",
        fontSize: '20px'
    };

    const blueTextStyle = {
        color: "blue"
    }

    const styles = {
        redStyle: {
            color: "red"
        },
        blueStyle: {
            color: "blue"
        },
        fontBigBold: {
            fontSize: "2rem",
            fontWeight: "bold"
        }
    }




    //  가격 표시( food.price)
    /* 
    1만원 이상 > 빨산색
    1만원 미만 > 파란색

        food.price >= 10000

    */

    const priceTextStyle = {
        color: food.price >= 10000 ? 'red' : 'blue'
    }
    //  <p style={priceTextStyle}>{food.price}</p>
    //  <p style={{color: food.price >= 10000 ? 'red' : 'blue' }}>{food.price}</p>}}</p>

    //2) js 함수 형태

    const priceTextStyleFunc = (price) => {

        if (price >= 10000)
            return { color: "red" }
        else
            return { color: "blue" }
        //  
    }
    //    <p style={priceTextStyleFunc(food.price)}>{food.price}</p> 

    /*
        Css 클래스명 연계활용
    
        // 단일 클래스 적용 
        <p  className={food.price >= 10000 ? 'price-red' : 'price-blue'}>{food.price}</p>
    
        //  다중 클래스 적용 
        <p  className={food.price +10000 ? 'price-red text-strong' : 'price-blue  text-strong')}>{food.price}</p>
        <p  className={food.price +10000 ? 'price-red text-strong' : 'price-blue  text-strong')}>{food.price}</p>
        <p  className={'text-strong' +  (food.praice > = 10000 ? 'price-red : 'price-blue</p>)  }</p>

        + 연산
        <p className={ ' text-strong' + (food.price >=10000 ? 'price-red' : ' price-blue')}</p>)}

        // Join 함수

        <p className={['text-Strong', food.price >= 1000 ? 'price-red' : 'price-blue;].join(" ")}>{food.price}</p>
    
        변수
        const priceClassName = 'text-strong price-red';

        백틱문자 활용 `
        <p className={`text-strong ${food.price >= 10000 ? 'price-red' : 'priceblue'}`}>{food.price}</p>



        */



    return (
        //  "start end"
        <Container className={'start ' + viewClass}>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    {/* <p style={tempStyle}>{food.content}</p> */}
                    <p style={styles.fontBigBold}>{food.content}</p>

                    <p className={['text-Strong', food.price >= 10000 ? 'price-red' : 'price-blue'].join(" ")}>{food.price}</p>

                    <p>
                        <Button variant="dark" onClick={() => {
                            if (orderCount > 0)
                                setOrderCount(orderCount - 1);
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount + 1);
                        }}>+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>

            {
                // showModal &&
                // showModal == true ? : 
            }

            <Modal show={showModal} onHide={() => { setShowModal(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>환영합니다~</Modal.Title>
                </Modal.Header>
                <Modal.Body>어서 오세요 ~ Food 구경하세요~</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => { setShowModal(false) }}>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>








        </Container>
    );
}

export default Detail;