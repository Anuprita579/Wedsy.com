import React from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import { useState } from 'react';
import SearchCard from './SearchCard';
import FilterBox from './FilterBox';

const wedDest = [
  {id: "001",destination: "Agra"},
  {id: "002",destination: "Allahabad"},
  {id: "003",destination: "Ahemdabad"},
  {id: "004",destination: "Amritsar"},
  {id: "005",destination: "Alibagh"},
  {id: "006",destination: "Aurangabad"},
  {id: "007",destination: "Badrinath"},
  {id: "008",destination: "Banglore"},
  {id: "009",destination: "Bhopal"},
  {id: "010",destination: "Bhubneshwar"},
  {id: "011",destination: "Calicut"},
  {id: "012",destination: "Chennai"},
  {id: "013",destination: "Chandigarh"},
  {id: "014",destination: "Chiplun"},
  {id: "015",destination: "Coorg"},
  {id: "016",destination: "Darjeeling"},
  {id: "017",destination: "Delhi"},
  {id: "018",destination: "Dehradun"},
  {id: "019",destination: "Daman"},
  {id: "020",destination: "Diu"},
  {id: "021",destination: "Faridabad"},
  {id: "022",destination: "Goa"},
  {id: "023",destination: "Gandhinagar"},
  {id: "024",destination: "Gurgaon"},
  {id: "025",destination: "Guwahati"},
  {id: "026",destination: "Gwalior"},
  {id: "027",destination: "Hampi"},
  {id: "028",destination: "Haridwar"},
  {id: "029",destination: "Hyderabad"},
  {id: "030",destination: "Igatpuri"},
  {id: "031",destination: "Indore"},
  {id: "032",destination: "Imphal"},
  {id: "033",destination: "Jabalpur"},
  {id: "034",destination: "Jaipur"},
  {id: "035",destination: "Jalgaon"},
  {id: "036",destination: "Jaisalmer"},
  {id: "037",destination: "Jammu"},
  {id: "038",destination: "Jodhpur"},
  {id: "039",destination: "Jhansi"},
  {id: "040",destination: "Kanpur"},
  {id: "041",destination: "Kochin"},
  {id: "042",destination: "Kedarnath"},
  {id: "043",destination: "Kolhapur"},
  {id: "044",destination: "Kullu"},
  {id: "045",destination: "Leh"},
  {id: "046",destination: "Lonavala"},
  {id: "047",destination: "Lucknow"},
  {id: "048",destination: "Ludhiana"},
  {id: "049",destination: "Leh"},
  {id: "050",destination: "Ladakh"},
  {id: "051",destination: "Mahabaleshwar"},
  {id: "052",destination: "Manali"},
  {id: "053",destination: "Malwan"},
  {id: "054",destination: "Manglore"},
  {id: "055",destination: "Matheran"},
  {id: "056",destination: "Mount Abu"},
  {id: "057",destination: "Mumbai"},
  {id: "057",destination: "Mysore"},
  {id: "058",destination: "Nainital"},
  {id: "059",destination: "Nashik"},
  {id: "060",destination: "Nagpur"},
  {id: "061",destination: "Noida"},
  {id: "062",destination: "Ooty"},
  {id: "063",destination: "Patna"},
  {id: "064",destination: "Pune"},
  {id: "065",destination: "Patiala"},
  {id: "066",destination: "Pondicherry"},
  {id: "067",destination: "Ratnagiri"},
  {id: "068",destination: "Rajkot"},
  {id: "069",destination: "Ranchi"},
  {id: "070",destination: "Raipur"},
  {id: "071",destination: "Satara"},
  {id: "072",destination: "Shimla"},
  {id: "073",destination: "Srinagar"},
  {id: "074",destination: "Tirupati"},
  {id: "075",destination: "Thane"},
  {id: "076",destination: "Udupi"},
  {id: "077",destination: "Ujjain"},
  {id: "078",destination: "Varanasi"},
  {id: "079",destination: "Vellore"},
  {id: "080",destination: "Vadodara"}
];

function SearchBar() {
    const [searchText, setSearchText] = useState("");
    const [filterBox, setFilterBox] = useState(false);
    const toggleFilterBox = () => {
      setFilterBox(!filterBox);
    }
  return (
    <>
        <div className='flex flex-col items-center align-middle bg-purple-100 w-full' >
          <div className='w-full text-center'>
            <input className='w-3/5 h-10 rounded-l-full px-5 mt-4 outline-purple-200' type="text" value={searchText} placeholder='Search for wedding destinations' onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button className='bg-purple-700 font-bold text-white px-2 h-10 mt-4' >Search</button>
            <button value={filterBox} onClick={toggleFilterBox} ><TuneIcon  className='ml-4' fontSize='medium'/></button>
            <div>
              {filterBox? <FilterBox /> : null}
            </div>
          </div>
            
            <div>
              <SearchCard />
            </div>

            <ul className='bg-purple-50 w-3/5 max-h-32 overflow-hidden'>
              {wedDest.map((dest)=>{
                return(
                  <div key={dest.id}>
                    <p>{dest.destination}</p>
                  </div>
                )
              })}
            </ul>

            
        </div> 

        
    </>
  )
}

export default SearchBar
