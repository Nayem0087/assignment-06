import React from 'react';

const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item) => {
        return sum + Number(item.price.replace('$', ''))
    }, 0)

    const handlePayment = () => {
        setCarts([])
    }

    const handleRemove = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
    }

    return (
        <div className='max-w-[80%] mx-auto p-10 mb-20 ring-1 ring-gray-200 shadow-md rounded-lg'>
            <h1 className='text-2xl font-bold pb-6'>Your Cart</h1>

            {
                carts.length === 0 ? (
                    <p className='text-center text-2xl font-semibold bg-gray-200 p-10 rounded-lg'>Cart is Empty</p>
                ) : (
                    carts.map((item, index) => (
                        <div key={index} className='bg-gray-200 p-6 rounded-lg mb-5'>
                            <div className='flex justify-between'>
                                <div className='md:flex items-center gap-4'>
                                <div>
                                    <img className='h-12 w-12 rounded-full p-2' src={item.image} alt={item.name} />
                                </div>
                                <div>
                                    <h2 className='font-bold text-xl'>{item.name}</h2>
                                    <h5 className='font-semibold text-gray-600'>{item.price}</h5>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <button onClick={() => handleRemove(item)}>Remove</button>
                            </div>
                            </div>
                        </div>
                    ))
                )
            }

            <div className='flex justify-between pt-6'>
                <div className='font-semibold text-xl text-gray-500'>Total</div>
                <div className='font-semibold text-xl'>${totalPrice}</div>
            </div>
            <div>
                <button onClick={handlePayment} className="btn btn-primary w-full mt-10 rounded-full font-semibold">Proceed to Checkout</button>
            </div>

        </div>
    );
};

export default Cart;