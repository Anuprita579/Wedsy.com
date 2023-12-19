import React from 'react';
import { useState } from 'react';

function SearchBar() {
    const [searchText, setSearchText] = useState("");
  return (
    <>
        <div className='flex justify-center align-middle'>
            <input className='w-1/5 h-10 rounded-l-full px-5' type="text" value={searchText} placeholder='Search' onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button className='bg-purple-700 font-bold text-white px-2' >Search</button>
        </div> 
    </>
  )
}

export default SearchBar
