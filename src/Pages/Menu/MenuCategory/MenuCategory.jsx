import React from 'react';
import MenuCard from '../../Shared/MenuCard/MenuCard';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>
            {
                title && <Cover img={coverImg} title={title}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-4 p-6 my-16 '>
                {
                    items.map(item => <MenuCard key={item._id} item={item}>

                    </MenuCard>)
                }
            </div>
            <div className='text-center p-2'>
                <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 text-black mt-6 ">Order now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;