import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({ model, carts, setCarts }) => {

    const [isBuyNow, setBuyNow] = useState(false);

    const handleBuyNow = () => {
        setBuyNow(true);
        setCarts([...carts, model]);
        toast.success('Item added to Cart successfully!')
    }

    return (
        <div className='ring-1 ring-gray-200 shadow-md rounded-lg px-3 py-6'>
            <div>
                <div className='flex justify-end'>
                    <button className={`px-3 rounded-full
                                ${model.tag === "Popular"
                            ? "bg-amber-200"
                            : model.tag === "New"
                                ? "bg-green-200"
                                : model.tag === "Best Seller"
                                    ? "bg-purple-200"
                                    : "bg-gray-200"}
                        `}>{model.tag}</button>
                </div>
                <div>
                    <img className='object-contain w-14 h-14 bg-gray-100 rounded-full p-1' src={model.image} alt="" />
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

                <div>
                    <button onClick={handleBuyNow} className={`btn btn-block rounded-full text-white mt-5
                    ${isBuyNow ? 'bg-green-600' : 'btn-primary'}`}>
                        {isBuyNow ? 'Added to Cart' : 'Buy Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModelCard;