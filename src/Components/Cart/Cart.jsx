import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";

const Cart = () => {
    const cartData= useLoaderData();
    return (
        <div>
         <CartProduct cartData={cartData}></CartProduct>
        </div>
    );
};

export default Cart;