import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-marketplace-server-red.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, []);

    const filterToysBySubcategory = (subcategory) => {
        const filteredToys = toys.filter(toy => toy.subCategory === subcategory);
        return filteredToys.slice(0, 2); // Show only 2 items
    };

    return (
        <div className='mb-5' data-aos="zoom-out-left">
            <h2 className='text-center text-4xl font-bold my-5'>Shop By Category</h2>
            <div className='w-4/5 mx-auto'>
                <Tabs>
                    <TabList className='lg:flex justify-center bg-gray-200 rounded-lg p-4'>
                        <Tab className='px-4 py-2 mx-2 text-gray-800 hover:bg-gray-300 rounded-lg'>MathToys</Tab>
                        <Tab className='px-4 py-2 mx-2 text-gray-800 hover:bg-gray-300 rounded-lg'>LanguageToys</Tab>
                        <Tab className='px-4 py-2 mx-2 text-gray-800 hover:bg-gray-300 rounded-lg'>EngineeringToys</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid lg:grid-cols-2 gap-4'>
                            {filterToysBySubcategory('MathToys').map((toy, index) => (
                                <div key={index} className='card bg-base-100 shadow-xl'>
                                    <figure className='px-10 pt-10'>
                                        <img src={toy.photoUrl} alt='Toy' className='rounded-xl' />
                                    </figure>
                                    <div className='card-body items-center text-center'>
                                        <h2 className='card-title'>{toy.name}</h2>
                                        <p>Price: {toy.price}</p>
                                        <div className='card-actions'>
                                            <Link to={`toy/${toy._id}`}><button className='btn btn-primary'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid lg:grid-cols-2 gap-4'>
                            {filterToysBySubcategory('LanguageToys').map((toy, index) => (
                                <div key={index} className='card bg-base-100 shadow-xl'>
                                    <figure className='px-10 pt-10'>
                                        <img src={toy.photoUrl} alt='Toy' className='rounded-xl' />
                                    </figure>
                                    <div className='card-body items-center text-center'>
                                        <h2 className='card-title'>{toy.name}</h2>
                                        <p>Price: {toy.price}</p>
                                        <div className='card-actions'>
                                            <Link to={`toy/${toy._id}`}><button className='btn btn-primary'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid lg:grid-cols-2 gap-4'>
                            {filterToysBySubcategory('EngineeringToys').map((toy, index) => (
                                <div key={index} className='card bg-base-100 shadow-xl'>
                                    <figure className='px-10 pt-10'>
                                        <img src={toy.photoUrl} alt='Toy' className='rounded-xl' />
                                    </figure>
                                    <div className='card-body items-center text-center'>
                                        <h2 className='card-title'>{toy.name}</h2>
                                        <p>Price: {toy.price}</p>
                                        <div className='card-actions'>
                                            <Link to={`toy/${toy._id}`}><button className='btn btn-primary'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Category;
