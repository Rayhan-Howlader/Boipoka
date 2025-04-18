import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadList] =useState([])
    const [sort, setSort] = useState("")

    const data = useLoaderData();
    console.log(data);

    useEffect(()=> {
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id=>parseInt(id))
        const myReadList = data.filter(book=>ConvertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    },[])


    const handleSort = (type) => {
        setSort(type)
        if (type === "pages") {
            const sortedByPage = [...readList].sort((a,b) =>a.totalPages - b.totalPages);
            setReadList(sortedByPage)
        }
        if(type === "ratings") {
            const sortedByRatings =[...readList].sort((a,b) =>a.rating - b.rating);
            setReadList(sortedByRatings)
        }
    }


    return (
        <div>

                            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                {/* For TSX uncomment the commented types below */}
                <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                sort by : {sort ? sort : "" }
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
                <li><a onClick={()=>handleSort("pages")}>pages</a></li>
                <li><a onClick={()=>handleSort("ratings")}>Ratings</a></li>
                </ul>






                        <Tabs>
                <TabList>
                <Tab>Read Book List</Tab>
                <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                <h2>Booked I read {readList.length}</h2>
                    {
                        readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;