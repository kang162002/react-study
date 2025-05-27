
import { useNavigate } from 'react-router';
import { Card, Button } from 'react-bootstrap';



function FoodCard(props) {

    const navigate = useNavigate();
    // 컴포넌트로 정리만들기
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + props.food.imgPath} />
            <Card.Body>
                <Card.Title>{props.food.title}</Card.Title>
                <Card.Text>
                    {props.food.content}
                </Card.Text>
                <Card.Text>
                    {props.food.price}
                </Card.Text>

                <Button variant="primary" onClick={() => {
                    navigate("/detail/" + props.food.id);
                }}>상세보기</Button>
            </Card.Body>
        </Card>


    )
}
export default FoodCard;