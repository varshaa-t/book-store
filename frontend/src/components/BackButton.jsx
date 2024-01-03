import { Link } from 'react-router-dom';
import { BsArrowLeftSquareFill } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
        <Link
        to={destination}
        className='bg-sky-blue-800 text-black px-4 py-1 rounded-lg w-fit'
        >
            <BsArrowLeftSquareFill className='text-3xl' />
        </Link>
    </div>
  )
}

export default BackButton