import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';
const ServiceCart = ({ service }) => {
    const { title, img, price, _id } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex text-red-400 justify-between items-center">
                    <p className=''>Price: {price}</p>
                    <Link to={`/bookings/${_id}`}>
                        <button className="btn btn-circle btn-outline btn-warning">
                            <AiOutlineArrowRight></AiOutlineArrowRight>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;