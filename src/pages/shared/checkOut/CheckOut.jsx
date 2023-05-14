import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import checkout from '../../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
const CheckOut = () => {
    const service = useLoaderData()
    const { price, title, _id, img} = service
    const { user } = useContext(AuthContext)
    // console.log(service)
    const handlBookService = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const email = form.email.value
        // console.log(name, email, date)
        const booking = {
            customerName: name,
            email,
            date,
            img,
            service_id: _id,
            price: price,
            service: title
        }
        // console.log(booking)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'order confirm',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className='mb-10 md:mb-20'>
            {/* {service.title}
            checkout  */}
            <div className='relative'>
                <img className='w-full' src={checkout} alt="" />
                <div className='absolute rounded-lg w-full h-full flex items-center top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]'>
                    <h1 className='text-3xl md:text-5xl pl-10 md:pl- text-white font-bold'>Check Out</h1>
                </div>
                <div className='absolute bottom-0 left-1/2 right-1/2'>
                    <p className='w-fit h-7 px-4 block text-white bg-[#FF3811]'> Home/Checkout</p>
                </div>
            </div>
            <div className='bg-base-200 mt-10 md:mt-16 lg:mt-24'>
                <form onSubmit={handlBookService} className='p-10 md:m-16 space-y-6'>
                    <div className='flex gap-6 flex-col md:flex-row'>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Enter Name" className="input md:w-1/2" />
                        <input type="date" name='date' className="input md:w-1/2" />
                    </div>
                    <div className='flex gap-6 flex-col md:flex-row'>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Enter Email" className="input md:w-1/2" />
                        <input type="text" name='price' defaultValue={`$ ${price}`} placeholder="Enter price" className="input md:w-1/2" />
                    </div>
                    <input type="submit" className='btn btn-block' value="Order Confirm" />

                    {/* <div className='flex gap-8'>
                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div> */}
                </form>
            </div>
        </div>
    );
};

export default CheckOut;