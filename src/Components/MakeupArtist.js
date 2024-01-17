import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';

function MakeupBanner(){
    return(
        <div className='bg-gradient-to-r from-black via-pink-500  to-black flex flex-col justify-center align-middle items-center p-6 py-10'>
            <h1 className='text-5xl font-semibold text-white p-2 max-md:text-3xl'>Find a Makeup Artist! </h1>
            <p className='text-yellow-400'>Connecting hearts through wedding memories ❣️</p>
        </div>
    )
}

const artist = [
    {
        id:"001",
        name: "Emily Johnson",
        profile_img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHByZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4.5",
        experience: "5",
        price: "4000",
        available: "yes",
    },
    {
        id:"002",
        name: "Ava Davis",
        profile_img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        rating: "4.7",
        experience: "7",
        price: "5000",
        available: "no",
    },
    {
        id:"003",
        name: "Lily Taylor",
        profile_img: "https://images.unsplash.com/photo-1536087785043-34ac3b6dfdff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
        rating: "4",
        experience: "2",
        price: "3000",
        available: "yes",
    },
    {
        id:"004",
        name: "Sophia Harris",
        profile_img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
        rating: "4.2",
        experience: "4",
        price: "4500",
        available: "yes",
    },
    {
        id:"005",
        name: "Aria Jackson",
        profile_img: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
        rating: "4.3",
        experience: "6",
        price: "4000",
        available: "no",
    },
]

function MakeupArtist() {
  return (
    <>
        <div className='bg-purple-100 w-full h-full'> 
        <MakeupBanner />
            <div className='flex flex-wrap'>
                {artist.map((art)=>{
                    return(
                        <div className='bg-purple-200 m-4 p-10 rounded-xl flex flex-col justify-center align-middle'>
                            <img src={art.profile_img} alt='profile' className='h-40 w-40 rounded-full border-2 border-purple-900'/>
                            <h2 className='text-xl text-center p-4 font-semibold'>{art.name}</h2>
                            <div className='flex justify-between align-middle text-center items-center'> 
                                <h2><StarIcon fontSize='small' className='text-green-800'></StarIcon> {art.rating}</h2>
                                <h2 className=' text-purple-950'> <WorkIcon fontSize='small'></WorkIcon> {art.experience}</h2>
                                {art.available==="yes"? <div className='h-3 w-3 bg-green-500 rounded-full'></div>:<div className='h-3 w-3 bg-red-500 rounded-full'></div>}
                            </div>
                            <h2 className=' text-purple-950 text-xl font-semibold'>  ₹ {art.price} <span className='text-sm'>/hr</span> </h2>
                            <button className='bg-purple-900 text-white p-2 px-4 m-2 hover:bg-purple-950'>View Profile</button>
                        </div>
                    )
                })}    
            </div>   
        </div> 
    </>
  )
}

export default MakeupArtist
