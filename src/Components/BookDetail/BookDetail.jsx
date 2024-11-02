import { useLoaderData, useParams } from "react-router-dom"
export default function BookDetail() {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)
    console.log(book)
    const { image, bookName, category, tags, author, rating, publisher, review, totalPages, yearOfPublishing } = book;


    return (
        <div className="my-20">
            <h3 className="text-3xl md:text-4xl text-center my-20 underline">Book details</h3>
            <div className="md:flex items-center">

                <div className="md:w-1/2 lg:w-1/3 mr-2 lg:mr-0 "><img src={image} alt="" /></div>

                <div className="md:w-1/2 lg:w-2/3 ml-2 lg:ml-0 space-y-3 mt-16 md:mt-0" >
                    <h3 className="text-3xl font-bold">{bookName}</h3>
                    <p className="text-lg">By - {author}</p>
                    <p className="text-lg border-y py-1">{category}</p>
                    <p><span className="text-lg font-semibold">Review :</span>
                        <span className="text-gray-600">
                            {review}</span></p>
                    <div className="flex gap-3 border-b">
                        {tags.map((tag, idx) => <p className="flex bg-green-100 mb-3 px-4 py-1 rounded-xl text-green-600" key={idx}>#{tag}</p>)}
                    </div>
                    <div className="my-4">
                        <table>
                            <tr>
                                <td>
                                    Number of Pages :
                                </td>
                                <td className="font-semibold pl-10">
                                    {totalPages}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Publisher :
                                </td>
                                <td className="font-semibold pl-10">
                                    {publisher}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Year of publishing :
                                </td>
                                <td className="font-semibold pl-10">
                                    {yearOfPublishing}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Rating :
                                </td>
                                <td className="font-semibold pl-10">
                                    {rating}
                                </td>
                            </tr>
                        </table>
                    </div>
                    {/* BUTTONS */}
                    <div className="flex gap-5">
                        <button className="w-[100px] btn btn-outline">Read</button>
                        <button className="w-[100px] btn btn-accent">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
