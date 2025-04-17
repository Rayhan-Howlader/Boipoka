import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center'>
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quas.</h1>
                <button className='btn btn-primary'>Banner</button>
            </div>
            <div>
                <img src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;