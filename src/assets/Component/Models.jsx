import { Check } from 'lucide-react';
import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelPromise }) => {
    const models = use(modelPromise)

    return (
        <div className='max-w-[80%] mx-auto mb-20'>
            <div className='text-center pb-10'>
                <h2 className='font-bold md:text-5xl text-4xl'>Premium Digital Tools</h2>
                <p className='text-gray-700 pt-3'>Choose from our curated collection of premium digital products <br /> designed  to boost your productivity and creativity.</p>
            </div>

            <div className="tabs tabs-box justify-center mb-10">
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Products" defaultChecked />
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Carts"  />
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {models.map((model =>

                    <ModelCard model={model} />
                ))}
            </div>


        </div>
    );
};

export default Models;