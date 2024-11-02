import React from 'react'
import HeroBg from '../assets/books.jpg'

export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-screen mb-20 rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={HeroBg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl md:text-4xl font-bold">Books to freshen up your Bookshelf</h1>
      <button className="btn btn-success text-white mt-5">View the list</button>
    </div>
  </div>
</div>
  )
}
