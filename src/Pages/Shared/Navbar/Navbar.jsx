import React from 'react';
import logo from '../../../assets/logo1.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../ContextProviders/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../../Hooks/useCart';


const Navbar = () => {

    const { user, logout } = useContext(AuthContext)
    const [cart] = useCart();

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/menu'>Recipes</Link></li>
        <li><Link to='/order/salad'>Order_Now</Link></li>
        <li><Link to='/dashboard/mycart'>

            <div className="indicator">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">{cart?.length || 0}</div>
            </div>


        </Link></li>
        {
            user ? <>
                <li><span>{user?.displayName}</span></li>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <li><button onClick={handleLogout} className=''>Logout</button></li>
            </> :
                <><li><Link to='/login'>Login</Link></li></>
        }

    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-40 bg-black max-w-screen-2xl text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case mb-6"><img className='w-16 ' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            {/* <div className="navbar-end ">
                <a className="btn">Sign With google</a>
            </div> */}
        </div>
    );
};

export default Navbar;