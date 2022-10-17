import React from "react";
import './ProductCardStyles.scss';
import Button from "../Components/Buttons/Button";
import { useContext } from "react";
import { CartContext } from "../Context/Cart-context";

const ProductCard = ({product}) =>{
    const {name,price,imageUrl}= product;

    const {addItemToCart} = useContext(CartContext);
    const addProductToCart =()=> addItemToCart(product);

    return (
        <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}></img>
        <div className="footer">
        <span className="name">{name}</span>
        <span className="price">price : {price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;