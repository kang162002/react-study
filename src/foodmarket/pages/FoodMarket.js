import './FoodMarket.css';
// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Nav, Navbar, Container, Card, Button, Row, Col } from 'react-bootstrap'

import banner_bg from '../image/banner_bg.jpg';
import food1 from '../image/food1.jpg';
import food2 from '../image/food2.jpg';
import food3 from '../image/food3.jpg';




function FoodMarket() {

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">FoodsData</Nav.Link>
                        <Nav.Link href="#pricing">Info</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/*
                이미지 사용
                1.) css 로 처리하는경우 : 이미지 경로 
                2.) React Component js 코드에서 처리하는 경우 : import 한 이후에 사용 가능
                3.) public 폴더에 이미지 저장후, 서버 경로로 접근해서 사용
                    src='/image/food1.jpg'/>
                
                      *권장방식 :  src = { process.env.PUBLIC +'/image/food1.jpg'}
                
                *기본 서비스 경로 루트 경로(/)
                서버주소 : 포트번호/

                package.json > homepage 필드 설정

            */}

            {/* <div className='main-bg' style={{background: 'url(' + banner_bg + ')'}} ></div> */}
            <div className='main-bg'></div>

            <Container>
                <Row>
                    <Col md={4} sm={6}>
                        <Card style={{ width: '18rem' }} >
                            {/* <Card.Img variant="top" src={food1} /> */}
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/food1.jpg'} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/food2.jpg'} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/food3.jpg'} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}
export default FoodMarket;