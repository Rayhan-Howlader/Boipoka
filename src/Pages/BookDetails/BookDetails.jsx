import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';

const BookDetails = () => {
    const {id} =useParams();
    const bookId = parseInt(id)
    const data =useLoaderData();
    const singleBook = data.find(book =>book.bookId === bookId);
    const {bookName,image,author,category,review,tags,totalPages,publisher,yearOfPublishing,rating} = singleBook;

    const handleMarkAsRead = id => {
        addToStoredDB(id);
    }

    return (
        <div className='mx-auto'>
            <div className='flex'>
                <div className='bg-gray-100 p-16 rounded-xl mr-6'>
                <img className='w-6xl mt-20' src={image} alt="" />
                </div>
                <div>
                    <h2 className='text-4xl font-semibold'>{bookName}</h2>
                    <span>By : {author}</span>
                    <hr />
                    <span>{category}</span>
                    <hr />
                    <span>
                         <span className='font-bold'>Review :</span> {review}
                    </span>

                    <br />

                    <span className='font-bold mr-4'>Tag </span>

                                    {
                                    tags.map(tag => <button className='mr-4 text-green-500'>#{tag}</button>)}

                    <br />
                    <hr />
                    <span>Number of Pages : {totalPages}</span>
                    <br />
                    <span> Publisher : {publisher}</span>
                    <br />
                    <span>Year of Publishing : {yearOfPublishing}</span>
                    <br />
                    <span>Rating : {rating}</span>
                    <br />

                        <button onClick={() => handleMarkAsRead (id)} className='btn btn-ghost m-2'>Mark as Read</button>
                        <button className='btn btn-info m-2'> Add to WishList</button>
                </div>
                
            </div>
        </div>
    );
};

export default BookDetails;