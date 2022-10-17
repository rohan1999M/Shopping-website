import React ,{useContext} from "react";
// import Shop_Data from '../shop-data.json'
import { ProductsContext } from "../Context/ProductContext";
import ProductCard from "../Products/Product-Card";
import './shopStyles.scss';
 const Shop = () =>{

    const {products}=useContext(ProductsContext);

    return(
        <div className="products-container">
        {products.map((product)=>{
            return(
               <ProductCard key={product.id} product={product}/>
            )
        })}
        </div>
    )
}
export default Shop;