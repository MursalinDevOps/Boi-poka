import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishlist } from '../../utility/AddToDB';

export default function ListedBooks() {
    const [readBookList, setReadBookList] = useState([])
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const allBooks = useLoaderData();
    // console.log(allBooks)

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        // console.log(storedReadListInt, allBooks)

        const readList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadBookList(readList)
    }, []);

    useEffect(() => {
        const storedWishList = getStoredWishlist();
        const storedWishListInt = storedWishList.map(id => parseInt(id))
        // console.log(storedReadListInt, allBooks)

        const wishList = allBooks.filter(book => storedWishListInt.includes(book.bookId));
        setWishlistBooks(wishList)
    }, [])
    return (
        <div>
            <div className='bg-base-200 py-5 mb-10'>
                <h3 className="text-3xl text-center font-bold">Books</h3>
            </div>
            <div className='flex justify-center mb-10'>
                {/* <button className="btn btn-success text-white">Sort by</button> */}
                <details className="dropdown">
                    <summary className="btn m-1">Sort by
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>A - Z</a></li>
                        <li><a>Z - A</a></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Books i've already completed</Tab>
                    <Tab>Books i'd read later</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex flex-col gap-10 my-10'>
                        {
                            readBookList.map(book => <div className='border rounded-xl'>
                                <div className='flex gap-10'>
                                    <div className='bg-base-200 p-4 rounded-xl m-3'>
                                        <img className='w-[200px] h-[280px]' src={book.image} alt="" />
                                    </div>
                                    <div className='space-y-2 p-4'>
                                        <h4 className="text-2xl font-bold">{book.bookName}</h4>
                                        <p>By - {book.author}</p>
                                        <span className='flex gap-3'>
                                            {book.tags.map((tag, idx) => <p className='bg-green-100 text-green-800 px-2 py-1 rounded-xl' key={idx}>{tag}</p>)}
                                            <span className='bg-red-100 text-red-800 px-2 py-1 rounded-xl'>Year of Publishing - {book.yearOfPublishing}</span>
                                        </span>
                                        <div className='flex gap-5'>
                                            <p className='flex gap-1 items-center'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                            </svg>
                                            </span> Publisher - {book.publisher}</p>
                                            <p>|||</p>
                                            <p className='flex gap-1 items-center'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                            </svg>
                                            </span> Pages - {book.totalPages}</p>

                                        </div>
                                        <hr />
                                        <div className='flex gap-3'>
                                            <p className='bg-blue-100 text-blue-800 px-2 py-1 rounded-xl'>Category - {book.category}</p>

                                            <p className='bg-orange-200 text-orange-800 px-2 py-1 rounded-xl'>
                                                Rating - {book.rating}
                                            </p>
                                        </div>
                                    </div>
                                    <hr />

                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='flex flex-col gap-10 my-10'>
                        {
                            wishlistBooks.map(book => <div className='border rounded-xl'>
                                <div className='flex gap-10'>
                                    <div className='bg-base-200 p-4 rounded-xl m-3'>
                                        <img className='w-[200px] h-[280px]' src={book.image} alt="" />
                                    </div>
                                    <div className='space-y-2 p-4'>
                                        <h4 className="text-2xl font-bold">{book.bookName}</h4>
                                        <p>By - {book.author}</p>
                                        <span className='flex gap-3'>
                                            {book.tags.map((tag, idx) => <p className='bg-green-100 text-green-800 px-2 py-1 rounded-xl' key={idx}>{tag}</p>)}
                                            <span className='bg-red-100 text-red-800 px-2 py-1 rounded-xl'>Year of Publishing - {book.yearOfPublishing}</span>
                                        </span>
                                        <div className='flex gap-5'>
                                            <p className='flex gap-1 items-center'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                            </svg>
                                            </span> Publisher - {book.publisher}</p>
                                            <p>|||</p>
                                            <p className='flex gap-1 items-center'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                            </svg>
                                            </span> Pages - {book.totalPages}</p>

                                        </div>
                                        <hr />
                                        <div className='flex gap-3'>
                                            <p className='bg-blue-100 text-blue-800 px-2 py-1 rounded-xl'>Category - {book.category}</p>

                                            <p className='bg-orange-200 text-orange-800 px-2 py-1 rounded-xl'>
                                                Rating - {book.rating}
                                            </p>
                                        </div>
                                    </div>
                                    <hr />

                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}
