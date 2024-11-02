
export default function Book({book}) {
    console.log('book frm book comp', book)
    const {image, tags ,category, bookName, author, rating  } = book;
  return (
    <div className="border flex flex-col justify-center p-4 rounded-xl ">
      <div className="bg-base-200 rounded-xl flex justify-center">
      <img className="w-[200px] lg:w-[280px] lg:h-[350px] h-[250px] p-5 " src={image} alt="Book Image" />
      </div>
      <span className="flex justify-center gap-10">
      {
      tags.map(tag=><p className="bg-green-200 px-5 py-1 rounded-xl my-5">{tag}</p>)
      }
      </span>
      <h3 className="text-2xl font-bold">{bookName}</h3>
      <h4>By - {author}</h4>
      <hr className="my-3" />
     <div className="flex justify-between">
     <p>{category}</p>
     <p>Rating - {rating}
</p>
     </div>


    </div>
  )
}
