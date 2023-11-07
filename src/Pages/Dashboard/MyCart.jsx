import React from 'react';
import useCart from '../../Hooks/useCart';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart,refetch] = useCart();
    console.log(cart)
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)
    const convTotalPrice = parseFloat(totalPrice).toFixed(2)


    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });

    }

    return (
        <div className='w-full'>
            <div className='font-semibold h-10 flex justify-evenly items-center'>
                <h2>Total Items : {cart.length}</h2>
                <h2>Total Price : {convTotalPrice}</h2>
                <button className='btn btn-warning btn-sm'>Pay Now</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {
                                        item.ItemName
                                    }
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                                <th>
                                    <button className="btn btn-warning btn-sm">Pay single Cart</button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;