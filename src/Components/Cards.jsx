import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"
function Cards({data, reference}) {
    console.log('data:', data);
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-gray-300 px-9 py-10 overflow-hidden'>
      <FaRegFileAlt />
      <p className='mt-5 text-sm font-semibold leading-tight'>
       {data.desc}
      </p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between py-3 px-8'>
          <h5>{data.filesize}</h5>
          <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoIosCloseCircleOutline/>:<MdOutlineFileDownload size="1.5em" color='white' />}
          </span>
        </div>
        {
            data.tag.isOpen && (
                 <div className={`tag w-full py-4 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
          <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>
            ) 
        }
       
      </div>
    </motion.div>
  )
}
export default Cards;
