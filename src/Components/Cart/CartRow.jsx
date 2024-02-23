/* eslint-disable react/prop-types */


const CartRow = ({order, handleDelete, handleBuyNow}) => {
    const {_id, image, service_name,price}= order || {}
    return (
        <div>
            <table className="table my-6">
        <tr>
          <td>
              <div className="avatar">
                <div className="mask rounded-xl w-16 md:w-36 h-16 md:h-36">
                  <img src={image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
          </td>
          <td className="text-sm md:text-xl font-bold dark:text-white">{service_name}</td>
          <td className="text-sm md:text-xl font-semibold dark:text-white">Price: ${price}</td>
          <td>
            <button onClick={handleBuyNow} className="px-2 md:px-6 text-xs md:text-medium py-1 md:py-2 bg-[#075E54] text-white font-medium rounded my-5 text-center">Buy Now</button>
          </td>
          <td>
            <button onClick={()=> handleDelete(_id)} className=" px-2 md:px-6 text-xs md:text-medium py-1 md:py-2 bg-[#075E54] text-white font-medium rounded my-5 text-center">Remove</button>
          </td>
        </tr>
      </table>
        </div>
    );
};

export default CartRow;