import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { FaBook } from "react-icons/fa"

const BookModal = ({ book, onClose }) => {
    return (
        <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className="w-[300px] max-w-full h-[250px] bg-white rounded-xl p-4 flex flex-col relative"
            >
                <AiOutlineClose
                    className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                    onClick={onClose}
                />
                <h2 className='w-fit px-4 py-1 bg-lime-200 rounded-lg'>
                    {book.publishYear}
                </h2>
                <div className='flex my-2 justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-violet-600 text-2xl' />
                    <h2 className='my-1 text-xl'>{book.title}</h2>
                </div>
                <div className='flex my-2 justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-violet-500 text-2xl' />
                    <h2 className='my-1 text-xl'>{book.author}</h2>
                </div>
                <div className='flex my-2 justify-start items-center gap-x-2'>
                    <FaBook className='text-violet-500 text-xl' />
                    <h2 className='my-1 text-xl'>{`${book.noOfPages} pages`}</h2>
                </div>
            </div>
        </div>
    )
}

export default BookModal