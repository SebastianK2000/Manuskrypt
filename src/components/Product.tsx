import { useContext } from "react";
import { ShopContext, ContextValue } from '../context/shop-context';
import '../style/shop.css';

export const Product = (props: { data: { id: any; productName: any; price: any; productImage: any; }; }) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext) as ContextValue;

    const cartItemCount = cartItems[id];

    return (
        <div className="product">
            <img className="productImgStyle" src={productImage} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p> ${price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    );
};