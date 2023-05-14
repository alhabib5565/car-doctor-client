import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <div className="hero mb-10 md:mb-20 rounded-lg bg-base-200">
            <div className="hero-content  flex-col lg:flex-row">
                <div className='lg:w-1/2 relative px-2 pb-8 lg:p-0'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className=" w-1/2 absolute top-1/2 right-8  border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-2'>
                    <h3 className='text-3xl text-red-400 font-bold'>About Us</h3>
                    <h2 className="text-5xl font-bold">We are qualified <br />
                        & of experience <br />
                        in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
                    </p>
                    <button className="btn btn-warning">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;