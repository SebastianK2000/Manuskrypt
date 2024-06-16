import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import "../style/shoppingCart.css";


export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={productImage} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p> Price: ${price}</p>
                <div className="countHandler">
                    <button className="addMoreItemCart" onClick={() => removeFromCart(id)}> - </button>
                    <button className="addMoreItemCart" onClick={() => addToCart(id)}> + </button>
                    <input
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem;