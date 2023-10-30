import React from 'react';
import FoodCart from '../../../Components/FoodCart/FoodCart';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div className=''>


            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10 p-16'>
                        {
                            items.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderTab;