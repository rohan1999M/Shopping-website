import './checkout-Styles.scss'
import { useContext } from "react";
import { CartContext } from "../Context/Cart-context";
import CheckoutItem from '../Components/checkOut-Items/CheckOut-Items';

const Checkout =()=>{
const {cartItems ,cartTotal} = useContext(CartContext);

    return(
        <div className='checkout-container'>
        <div className='checkout-header'>
        <div className='header-block'>
            <span>Product</span>

        </div>
        <div className='header-block'>
          <span> Description</span>
        </div>
        <div className='header-block'>
           <span>Quantity</span>
        </div>
        <div className='header-block'>
         <span>Price</span>
        </div>
        <div className='header-blockr'>
         <span>Remove</span>
        </div>
        </div>
    
        {
            cartItems.map((cartItem)=>{
                const {id,name,quantity,price} = cartItem;
                return(

                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    // <div>
                    //    <h4>{name}</h4>
                    //    <span>{quantity}</span>
                    //    <br></br>
                    //    <span onClick={()=>addItemToCart(cartItem)}>+</span>
                    //    <br></br>
                    //    <span onClick={()=>removeItemToCart(cartItem)}>Decrement</span>
                    //    <br></br>
                    // </div>
                )
            })
        }
        <span className='total'> Total: Rs: {cartTotal}</span>
        </div>
      
    )
}

export default Checkout;