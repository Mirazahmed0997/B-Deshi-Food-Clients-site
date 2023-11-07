import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../ContextProviders/AuthProvider';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';


const FoodCart = ({ item }) => {
    const { image, price, name, recipe,_id } = item;
    const { user } = useContext(AuthContext)
    const location=useLocation();
    // const from = location.state?.from?.pathname || '/'
    const navigate=useNavigate();
    const[,refetch]=useCart();

    const handleAddToCart = item=> {
        if (user && user.email) {
            const cartItem={menuItemId: _id,ItemName:name,image,price,email:user.email,name:user.displayName}
            fetch('http://localhost:5000/carts',
            {
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Successfully Added',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Login First',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            navigate('/login',{state:{from:location}})
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}!</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 text-black mt-6 border-orange-400">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;