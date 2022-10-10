import React, { useState ,useContext } from 'react';
import image26 from '../assets/Email.jpeg'

// import { client, urlFor } from '../client';

const BookCard = ({name }) => {
 
  const [postHovered, setPostHovered] = useState(false);
  const [savingPost, setSavingPost] = useState(false);
  const [post, setPost] = useState(true);

  return (
    <div className=" flex flex-col justify-between m-2  border p-2 rounded-xl bg-white max-w-[200px] h-56 md:h-60 lg:h-64">
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        className="grow relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out" >
        {image26 && (
        <img className="rounded-lg w-full h-full " src={image26} alt="user-post" /> )}
        {/* <img className="rounded-lg w-full " src={(urlFor(image).width(250).url())} alt="user-post" /> )} */}
        {postHovered && (
          <div
            className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
            style={{ height: '100%' }}
          >
            <div className="flex items-center justify-between">
            <div className=" flex justify-between items-center gap-2 w-full">
                <p onClick={(e) => {  e.stopPropagation();  return false }}
                        className="w-fit bg-header text-white p-2 px-3 rounded-md   h-8 flex items-center justify-center text-dark opacity-75 hover:bg-header hover:text-white hover:opacity-100 hover:cursor-pointer outline-none">
                    Loan
                </p>
            </div>
            </div>
            <div className=" flex justify-between items-center gap-2 w-full">
                
            </div>
          </div>
        )}
      </div>
      <p  className="flex flex-col gap-[2px] mt-4 items-center overflow-hidden">
        <p className="font-medium text-sm capitalize font-headingFont text-ellipsis overflow-hidden">kakkaka</p>
      </p>
    </div>
  );
};

export default BookCard;