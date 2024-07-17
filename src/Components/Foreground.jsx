
import Cards from './Cards'
import React, { useRef } from 'react';


function Foreground() {
    const ref=useRef(null);
  const data=[
    {
        desc:"Hi this is card component ,here you can write anything whatever you want",
        filesize: ".9mb",
        close: true,
        tag:{
            isOpen: false, tagTitle:"Download Now", tagcolor:"green"
        },
    },
    {
        desc:"Hi this is card component ,here you can write anything whatever you want",
        filesize: ".9mb",
        close: true,
        tag:{
            isOpen: true, tagTitle:"Download Now", tagcolor:"blue"
        },
    },
    {
        desc:"Hi this is card component ,here you can write anything whatever you want",
        filesize: ".9mb",
        close: true,
        tag:{
            isOpen: true, tagTitle:"Upload", tagcolor:"green"
        },
    }
  ]
  
  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap flex-shrink-0 p-5'>
          {data.map((item, index)=>(
            <Cards data={item} reference={ref}/>
          ))}
          
      </div>
    </>
  )
}

export default Foreground
