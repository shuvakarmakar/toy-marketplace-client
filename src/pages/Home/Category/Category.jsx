import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {

    const [toys, setToys]  = useState([]);

    useEffect(() =>{
        fetch('toydata.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div className=''>
            <h2 className='text-center text-4xl font-bold my-5'>Shop By Category</h2>
            <div className='w-4/5 mx-auto'>
                <Tabs>
                    <TabList className='flex justify-center bg-gray-200 rounded-lg p-4'>
                        <Tab className='px-4 py-2 mx-2 text-gray-800 hover:bg-gray-300 rounded-lg'>MathToys</Tab>
                        <Tab className='px-4 py-2 mx-2 text-gray-800 hover:bg-gray-300 rounded-lg'>LanguageToys</Tab>
                        <Tab className='px-4 py-2 mx-2 text-gray-800 hover:bg-gray-300 rounded-lg'>EngineeringToys</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-2xl mt-4'>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-2xl mt-4'>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-2xl mt-4'>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Category;