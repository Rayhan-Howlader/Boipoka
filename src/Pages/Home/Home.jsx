import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import Book from '../Book/Book';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>Hello I am Home</h1>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;