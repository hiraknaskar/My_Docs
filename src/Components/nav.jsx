import React, { useState } from 'react';
import ProfileInfo from './Cards/ProfileInfo';
import { useNavigate } from 'react-router-dom';
import SearchBar from './searchBar/SearchBar';

const Navbar = ({UserInfo,onSearchNote,handleClearSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Call useNavigate as a function

  const onLogout = () => {
    console.log("Logout function triggered");
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    onSearchNote(searchQuery.trim() || "");
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch()
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 drop-shadow">
      <h2 className='text-xl font-medium text-black py-2'>Docs</h2>
       
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => { // Corrected target
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo UserInfo={UserInfo} onLogout={onLogout}/>
    </div>
  );
};

export default Navbar;
