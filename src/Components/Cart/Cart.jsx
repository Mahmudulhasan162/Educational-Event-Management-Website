
import { useContext, useEffect, useState } from "react";
import { Context } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";
import CartRow from "./CartRow";
import congrats from '../../assets/congrats-gif-5.gif'
const Cart = () => {
    const {user} = useContext(Context)
    const [orders, setOrders] = useState([]);

    const url = `https://educational-website-server-nu.vercel.app/cart?email=${user?.email}`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, [url]);

    const handleDelete = (id) => {
        Swal.fire({
          title: "Do you want to remove this product?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Yes",
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://educational-website-server-nu.vercel.app/cart/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.acknowledged == true) {
                  Swal.fire("Removed!", "", "success");
    
                  const remaining = orders.filter((order) => order._id !== id);
                  setOrders(remaining);
                }
              });
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      };

      const handleBuyNow = () =>{
        Swal.fire({
            title:"Congratulations",
            text: "You purchased the product.",
            imageUrl: `${congrats}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
      }

    return (
        <div className=" overflow-x-auto max-w-[1100px] mx-auto md:min-h-[60vh]">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center my-5 dark:text-white"><span className="text-[#075E54]">Your</span> Cart</h2>
            <table className="table">
              <tbody>
              {
              orders.map(order =>(
                <CartRow
                key={order._id}
                order= {order}
                handleDelete= {handleDelete}
                handleBuyNow= {handleBuyNow}
                ></CartRow>
              ))
            }
              </tbody>
            </table>
        </div>
    );
};

export default Cart;