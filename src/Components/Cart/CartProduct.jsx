import MyCart from "./myCart";

const CartProduct = (cartData) => {
    return (
        
        <div>
            <h1 className="text-4xl font-bold text-center my-10 dark:text-white">Your Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 m-5 md:m-20">
                {
                    cartData?.cartData?.map(item => <MyCart key={item.id} item={item}></MyCart>)
                }
            </div>
        </div>
    );
};

export default CartProduct;