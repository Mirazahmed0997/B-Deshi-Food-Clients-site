import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import catagory1 from '../../../assets/home/slide1.jpg'
import catagory2 from '../../../assets/home/slide2.jpg'
import catagory3 from '../../../assets/home/slide3.jpg'
import catagory4 from '../../../assets/home/slide4.jpg'
import catagory5 from '../../../assets/home/slide5.jpg'
import SectonTitle from '../../../Components/SectonTitle';



const Catagories = () => {
    return (
        <div>
            <SectonTitle
                subHeading={'From 11am to 10.00pm'}
                heading={'Order Online'}
            >

            </SectonTitle>

            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide><img src={catagory1} alt="" />
                <h3 className='text-4xl uppercase text-center -my-16 text-white'>Salad</h3>
            </SwiperSlide>
            <SwiperSlide><img src={catagory2} alt="" />
                <h3 className='text-4xl uppercase text-center -my-16 text-white'>Pizza</h3>
            </SwiperSlide>
            <SwiperSlide><img src={catagory3} alt="" />
                <h3 className='text-4xl uppercase text-center -my-16 text-white'>Soups</h3>
            </SwiperSlide>
            <SwiperSlide><img src={catagory4} alt="" />
                <h3 className='text-4xl uppercase text-center -my-16 text-white'>Desserts</h3>
            </SwiperSlide>
            <SwiperSlide><img src={catagory5} alt="" />
                {/* <h3 className='text-4xl uppercase text-center -my-16'>Salad</h3> */}
            </SwiperSlide>

        </Swiper>
        </div>
      
    );
};

export default Catagories;