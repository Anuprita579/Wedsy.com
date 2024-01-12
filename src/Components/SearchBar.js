import React from 'react';
import { useState } from 'react';
import SearchCard from './SearchCard';

function SearchBar() {
    const [searchText, setSearchText] = useState("");
  return (
    <>
        <div className='flex flex-col items-center align-middle bg-purple-100 w-full' >
          <div className='w-full text-center'>
            <input className='w-3/5 h-10 rounded-l-full px-5 mt-4 outline-purple-200' type="text" value={searchText} placeholder='Search' onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button className='bg-purple-700 font-bold text-white px-2 h-10 mt-4' >Search</button>
          </div>
            
            <div>
              <SearchCard />
            </div>

            
        </div> 

        
    </>
  )
}

export default SearchBar
