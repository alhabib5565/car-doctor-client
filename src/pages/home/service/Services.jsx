import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    // console.log(services)
    return (
        <div>
            <div className='text-center space-y-2'>
            <h3 className='text-2xl text-red-400 font-bold'>Service</h3>
            <h2 className='text-3xl font-bold'>Our Service Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;