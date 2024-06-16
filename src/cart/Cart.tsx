import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { BookData } from "../data/BookData";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "../style/shoppingCart.css";

export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1 className="yourCartItems">Your Cart Items</h1>
            </div>
            <div className="cart">
                {BookData.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p className="subtotalPrice"> Subtotal: ${totalAmount} </p>
                    <button className="continueShopping" onClick={() => navigate("/")}>Still Shopping</button>
                    <button
                        className="checkoutButton"
                        onClick={() => {
                            checkout();
                            navigate("/checkout");
                        }}
                    >
                        {" "}
                        Checkout{" "}
                    </button>
                </div>
            ) : (
                <h1 className="yourCartEmpty"> Your Shopping Cart is Empty</h1>
            )}
        </div>
    );
};

export default Cart;