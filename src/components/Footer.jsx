import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Footer = ({ currentPage, setCurrentPage }) => {

    const navigate = useNavigate();
    
    const totalPages = 10;


    const PreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            navigate(`/page/${currentPage - 1}`);
        }
    };

    const NextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            navigate(`/page/${currentPage + 1}`);
        }
    };

    return (
        <div className='mt-4 bg-slate-200 shadow-xl py-3.5 rounded-3xl px-5 flex justify-end w-full'>
            <button
                onClick={PreviousPage}
                className='bg-gray-300 px-3 py-1.5 rounded-xl '
                
            >
                <AiOutlineArrowLeft className='text-black' />
            </button>
            <div className='px-5'>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Link
                        key={index + 1}
                        to={`/page/${index + 1}`}
                        className={`btn ${currentPage === index + 1 ? " text-white " : ""
                            } mr-2`}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        <button className='bg-gray-300 px-3 py-1.5 rounded-xl '>
                            {index + 1}
                        </button>
                    </Link>
                ))}
            </div>

            <button
                onClick={NextPage}
                className='bg-gray-300 px-3 py-1.5 rounded-xl '
            >
                <AiOutlineArrowRight />
            </button>
        </div>
    )
}

export default Footer