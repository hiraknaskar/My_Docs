import React from 'react';
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({ UserInfo, onLogout }) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
        {getInitials(UserInfo ? UserInfo.fullName : '')} {/* Pass UserInfo to getInitials */}
      </div>

      <div>
        <p className='text-sm font-medium'>{UserInfo ? UserInfo.fullName : 'Guest'}</p> {/* Display user's full name */}
        <button className='text-sm text-slate-700 underline' onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default ProfileInfo;
