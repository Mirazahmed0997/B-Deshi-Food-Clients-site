import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome ,FaUtensils,FaUsers} from 'react-icons/fa';
import useCart from '../Hooks/useCart';


const Dashboard = () => {
    const [cart] = useCart();

    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>


            </div>
            <div className="drawer-side bg-[#A1A054]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full">

                    {
                        isAdmin ? <>
                            <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                            <li className='flex '><Link to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
                                <span className="badge badge-secondary">+{cart?.length || 0}</span>
                            </Link>

                            </li>

                            <li><Link to='/dashboard/history'><FaWallet></FaWallet>Payment History</Link></li>
                            <li><Link to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt>Reservsation</Link></li>

                            <div className="divider"></div>

                            <li><Link to='/dashboard/home'><FaHome></FaHome>Admin Home</Link></li>
                            <li><Link to='/menu'><FaUtensils></FaUtensils>Add Items</Link></li>
                            <li><Link to='/order/salad'><FaWallet></FaWallet>Manage Items</Link></li>
                            <li><Link><FaCalendarAlt></FaCalendarAlt>Manage Bookings</Link></li>
                            <li><Link to='/dashboard/users'><FaUsers></FaUsers>Users</Link></li>
                        </> :
                            <>
                                <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                                <li className='flex '><Link to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </Link>

                                </li>

                                <li><Link to='/dashboard/history'><FaWallet></FaWallet>Payment History</Link></li>
                                <li><Link to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt>Reservsation</Link></li>

                                <div className="divider"></div>

                                <li><Link to='/dashboard/home'><FaHome></FaHome>User Home</Link></li>
                                <li><Link to='/menu'><FaShoppingCart></FaShoppingCart>Recepies</Link></li>
                                <li><Link to='/order/salad'><FaWallet></FaWallet>To_Order</Link></li>
                                <li><Link><FaCalendarAlt></FaCalendarAlt>Reservsation</Link></li>
                            </>
                    }

                    {/* Sidebar content here */}


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;