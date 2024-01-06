/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";

const MyCart = ({item}) => {
    const {_id,id, image, service_name,price}= item || {}

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          console.log(result);
          if(result.isConfirmed){
            fetch(`http://localhost:5000/cart/${_id}`,{
              method: "DELETE"
            })
            .then(res=> res.json())
            .then(data =>{
              console.log(data);
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              )
            })
          }
        })
      }
      const handleBuyNow= ()=>{
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    return (
        <div>
            <div className=" h-60 border-2 border-black dark:border-white flex">
  <figure><img className="h-full" src={image} alt="Movie"/></figure>
  <div className="card-body dark:text-white">
    <h2 className="card-title">{service_name}</h2>
    <p>Price : ${price}</p>
    <div className="card-actions justify-end flex flex-col">
      <button onClick={handleBuyNow} className="text-white bg-[#075E54] px-3 py-2 rounded">Buy Now</button>
    <button onClick={ ()=> handleDelete(_id) }  className="text-white bg-[#075E54] px-3 py-2 rounded">Remove</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyCart;