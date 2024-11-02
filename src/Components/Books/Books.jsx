import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'

export default function Books() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json()
                .then(data => setBooks(data)))
    }, [])
    return (
        <div className='mb-20'>
            <h2 className="text-3xl md:text-4xl text-center font-bold mb-20">Books</h2>
            <div className='grid md:grid-cols-2 gap-8 lg:grid-cols-3'>
                {
                    books.map((book, idx) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    )
}
