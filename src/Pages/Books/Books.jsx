import React, { Suspense,useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allbooks, setAllBooks] = useState([]);

    // method 1 to fetch data 
    // useEffect(()=>{
    //     fetch("booksData.json").then(res => res.json()).then(data =>{
    //         setAllBooks(data)
    //     })
    // },[])

    // method 2 to fetch data 

    // const bookPromise =fetch('booksData.json').then(res=>res.json())
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <Suspense fallback={<span>Loading.......</span>}>
                {/* <Book bookPromise={bookPromise}></Book> */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;