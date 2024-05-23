import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/shoppingCart.css';

function Cart() {
    return (
        <Container id="cartContainer" style={{ height: '40vw' }} className="cart-container mt-5">
            <h1 className="cart-title">Shopping Cart</h1>
            <hr className="divider" />
            <Row>
                <Col>
                        <p className="empty-cart">Your cart is empty.</p>

                            <h5 className="total-price">Total Price: </h5>
                    <Button className="clear-cart-btn">Clear Cart</Button>
                    <div className="buttonsCart">
                        <Button className="homeButtonCart">Home</Button>
                        <Button className="payButtonCart">PAY NOW!</Button>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
