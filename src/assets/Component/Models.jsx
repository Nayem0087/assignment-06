import { Check } from 'lucide-react';
import React, { use } from 'react';

const Models = ({ modelPromise }) => {
    const models = use(modelPromise)
    console.log(models);

    return (
        <div className='max-w-[80%] mx-auto mb-20'>
            <div className='text-center pb-10'>
                <h2 className='font-bold md:text-5xl text-4xl'>Premium Digital Tools</h2>
                <p className='text-gray-700 pt-3'>Choose from our curated collection of premium digital products <br /> designed  to boost your productivity and creativity.</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {models.map(model =>

                    <div className='ring-1 ring-gray-200 shadow-md rounded-lg p-6'>
                        <div>
                            <div className='flex justify-end'>
                                <button className={`px-3 rounded-full
                                ${
                        model.tag === "Popular"
                        ? "bg-amber-200"
                        : model.tag === "New"
                        ? "bg-green-200"
                        : model.tag === "Best Seller"
                        ? "bg-purple-200"
                        : "bg-gray-200"}
                        `}>{model.tag}</button>
                            </div>
                            <div>
                                <img className='w-14 h-14 bg-gray-100 rounded-full p-1' src={model.image} alt="" />
                            </div>
                            <div>
                                <h3 className='text-2xl font-semibold pt-3'>{model.name}</h3>
                                <p className='text-gray-600 pt-2'>{model.description}</p>
                            </div>
                            <div className='flex py-2'>
                                <h2 className='text-xl font-bold'>{model.price}</h2>
                                <p className='text-gray-600'>/{model.period}</p>
                            </div>
                            <div className='text-gray-600'>
                                <p className='flex gap-2 items-center'>
                                    <Check size={18} className="text-green-500" />
                                    {model.features[0]}</p>
                                <p className='flex gap-2 items-center'>
                                    <Check size={18} className="text-green-500" />
                                    {model.features[1]}</p>
                                <p className='flex gap-2 items-center'>
                                    <Check size={18} className="text-green-500" />
                                    {model.features[2]}</p>
                            </div>

                            <div className='btn btn-primary btn-block rounded-full text-white mt-5'>
                                {model.btnType}
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
};

export default Models;