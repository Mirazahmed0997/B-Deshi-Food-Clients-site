import React from 'react';
import SectonTitle from '../../../Components/SectonTitle';
import featuredimg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white bg-fixed font-semibold pt-8'>
            <SectonTitle
             heading={'Featured Item'}
             subHeading={'Check it out'}
            ></SectonTitle>
            <div className='md:flex justify-center items-center py-20 px-36 pt-12 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>
                        Feb 08, 2023
                    </p>
                    <p className='uppercase'>
                        Where I can get some
                    </p>
                    <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod numquam reiciendis aspernatur accusamus vero minus sapiente eaque error commodi ratione! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id culpa doloribus aut, quos nulla expedita delectus eveniet perferendis nihil sunt!
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-6">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;