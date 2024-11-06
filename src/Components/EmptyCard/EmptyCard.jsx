import React from 'react';

const EmptyCard = ({ ImgSrc, message }) => {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      {typeof ImgSrc === 'string' ? (
        <img src={ImgSrc} alt='No Notes' className='w-60' />
      ) : (
        <imgSrc className="w-60" />
      )}
      <p className='w-1/2 text-sm text-slate-200 text-center leading-7 mt-5'>
        {message}
      </p>
    </div>
  );
};

export default EmptyCard;
