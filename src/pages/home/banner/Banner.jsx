import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full mb-16">
            <div id="slide1" className="carousel-item relative h-[600px] w-full">
                <img src={img1} className="w-full rounded-lg" />
                <div className='absolute rounded-lg flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] w-full h-full'>
                    <div className='max-w-[400px] px-5 md:pl-24 space-y-8 text-white'>
                        <h2 className='text-4xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <button className="btn btn-warning mr-5">Warning</button>
                        <button class="btn btn-outline btn-warning">Warning</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative h-[600px] w-full">
                <img src={img2} className="w-full rounded-lg" />
                <div className='absolute bg-gradient-to-r rounded-lg flex items-center from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] w-full h-full'>
                    <div className='max-w-[400px] px-5 md:pl-24 space-y-8 text-white'>
                        <h2 className='text-4xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <button className="btn btn-warning mr-5">Warning</button>
                        <button class="btn btn-outline btn-warning">Warning</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative h-[600px] w-full">
                <img src={img3} className="w-full rounded-lg" />
                <div className='absolute bg-gradient-to-r rounded-lg flex items-center from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] w-full h-full'>
                    <div className='max-w-[400px] px-5 md:pl-24 space-y-8 text-white'>
                        <h2 className='text-4xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <button className="btn btn-warning mr-5">Warning</button>
                        <button class="btn btn-outline btn-warning">Warning</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative h-[600px] w-full">
                <img src={img4} className="w-full rounded-lg" />
                <div className='absolute bg-gradient-to-r rounded-lg flex items-center from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] w-full h-full'>
                    <div className='max-w-[400px] px-5 md:pl-24 space-y-8 text-white'>
                        <h2 className='text-4xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <button className="btn btn-warning mr-5">Warning</button>
                        <button class="btn btn-outline btn-warning">Warning</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;