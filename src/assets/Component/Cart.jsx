import React from 'react';

const Cart = ({ carts }) => {

    const totalPrice = carts.reduce((sum, item) => {
        return sum + Number(item.price.replace('$', ''))
    }, 0)

    console.log(totalPrice);

    return (
        <div className='max-w-[80%] mx-auto p-10 mb-20 ring-1 ring-gray-200 shadow-md rounded-lg'>
            <h1 className='text-2xl font-bold pb-6'>Your Cart</h1>

            {
                carts.map(item => <div className='bg-gray-200 p-6 rounded-lg mb-5' key={item.id}>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='h-12 w-12 rounded-full p-2 ' src={item.image} alt="" />
                        </div>
                        <div>
                            <h2 className='font-bold text-xl'>{item.name}</h2>
                            <h5 className='font-semibold text-gray-600'>{item.price}</h5>
                        </div>
                    </div>
                </div>)
            }

            <div className='flex justify-between pt-6'>
                <div className='font-semibold text-xl text-gray-500'>Total</div>
                <div className='font-semibold text-xl'>0</div>
            </div>
            <div>
                <button className="btn btn-primary w-full mt-10 rounded-full font-semibold">Proceed to Checkout</button>
            </div>

        </div>
    );
};

export default Cart;