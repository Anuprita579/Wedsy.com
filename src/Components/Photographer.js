import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';

const photographer = [
    {
        id:"001",
        name: "Alex Sterling",
        profile_img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "4.5",
        experience: "5",
        price: "4000",
        available: "yes",
    },
    {
        id:"002",
        name: "Daniel Mitchell",
        profile_img: "https://images.unsplash.com/photo-1596502059330-be10388e3ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBtYW58ZW58MHx8MHx8fDA%3D",
        rating: "4.7",
        experience: "7",
        price: "5000",
        available: "no",
    },
    {
        id:"003",
        name: "Ethan Wells",
        profile_img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4",
        experience: "2",
        price: "3000",
        available: "yes",
    },
    {
        id:"004",
        name: "Jacob Thomas",
        profile_img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "4.2",
        experience: "4",
        price: "4500",
        available: "yes",
    },
    {
        id:"005",
        name: "Samuel Hayes",
        profile_img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "4.3",
        experience: "6",
        price: "4000",
        available: "no",
    },
]

function Photographer() {
  return (
    <>
        <div className='bg-purple-100 w-full h-full'> 
            <div className='flex flex-wrap'>
                {photographer.map((photograph)=>{
                    return(
                        <div className='bg-purple-200 m-4 p-10 rounded-xl flex flex-col justify-center align-middle'>
                            <img src={photograph.profile_img} alt='profile' className='h-40 w-40 rounded-full border-2 border-purple-900'/>
                            <h2 className='text-xl text-center p-4 font-semibold'>{photograph.name}</h2>
                            <div className='flex justify-between align-middle text-center items-center'> 
                                <h2><StarIcon fontSize='small' className='text-green-800'></StarIcon> {photograph.rating}</h2>
                                <h2 className=' text-purple-950'> <WorkIcon fontSize='small'></WorkIcon> {photograph.experience}</h2>
                                {photograph.available==="yes"? <div className='h-3 w-3 bg-green-500 rounded-full'></div>:<div className='h-3 w-3 bg-red-500 rounded-full'></div>}
                            </div>
                            <h2 className=' text-purple-950 text-xl font-semibold'>  ₹ {photograph.price} <span className='text-sm'>/hr</span> </h2>
                            <button className='bg-purple-900 text-white p-2 px-4 m-2'>View Profile</button>
                        </div>
                    )
                })}    
            </div>   
        </div> 
    </>
  )
}

export default Photographer
