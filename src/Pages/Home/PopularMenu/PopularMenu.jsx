import SectonTitle from '../../../Components/SectonTitle';
import MenuCard from '../../Shared/MenuCard/MenuCard';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu]=useMenu();
    const popular=menu.filter(item => item.category === 'popular')
    return (
        <section className='mb-12'>
            <SectonTitle
                heading={'Our recipes'}
                subHeading={'Most Popular Items'}
            >
            </SectonTitle>
            <div className='grid md:grid-cols-2 gap-4 p-6 '>
                {
                    popular.map(item => <MenuCard key={item._id} item={item}>

                    </MenuCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline border-0 border-b-4 text-black mt-6">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;