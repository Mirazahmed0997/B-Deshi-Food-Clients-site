import React from 'react';

const MenuCard = ({item}) => {
    const {image,price,name, recipe}=item
    return (
        <div className='flex space-x-4 p-6'>
            <div className='w-24 mask mask-squircle'>
            <img className='' src={image} alt="" />
            </div>
            <div className='font-semibold'>
                <h3 className='text-yellow-600'>{name}------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500 font-bold'>${price}</p>
        </div>
    );
};

export default MenuCard;