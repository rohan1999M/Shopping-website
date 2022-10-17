import './cart-items-Styles.scss';

export const CartItem =({cartItem})=>{
    const {name,imageUrl ,quantity,price} = cartItem;
    return(
        <div className='cart-item-container'>
        <img src={imageUrl} alt={`${name}`}></img>
        <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x  Rs{price}</span>
        </div>
        </div>
    )
}
