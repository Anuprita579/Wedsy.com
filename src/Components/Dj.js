import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';

function DJBanner(){
    return(
        <div className='bg-gradient-to-r from-black via-pink-500  to-black flex flex-col justify-center align-middle items-center p-6 py-10'>
            <h1 className='text-5xl font-semibold text-white p-2 max-md:text-3xl'>Find a DJ! </h1>
            <p className='text-yellow-400'>Connecting hearts through wedding memories ❣️</p>
        </div>
    )
}

const djartist = [
    {
        id:"001",
        name: "James Taylor",
        profile_img: "https://images.unsplash.com/photo-1675845929869-011079187b16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGolMjBwcm9maWxlfGVufDB8fDB8fHww",
        rating: "4.5",
        experience: "5",
        price: "4000",
        available: "yes",
    },
    {
        id:"002",
        name: "Mason Wilson",
        profile_img: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRqJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4.7",
        experience: "7",
        price: "5000",
        available: "no",
    },
    {
        id:"003",
        name: "Liam Davis",
        profile_img: "https://images.unsplash.com/photo-1517814761483-6769dab4e9c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRqJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4",
        experience: "2",
        price: "3000",
        available: "yes",
    },
    {
        id:"004",
        name: "Daniel White",
        profile_img: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGRqJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4.2",
        experience: "4",
        price: "4500",
        available: "yes",
    },
    {
        id:"005",
        name: "Henry Jackson",
        profile_img: "https://images.unsplash.com/photo-1535682215715-c5c6a5d28247?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGRqJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4.3",
        experience: "6",
        price: "4000",
        available: "no",
    },
]

function Dj() {
  return (
    <>
        <div className='bg-purple-100 w-full h-full'> 
        <DJBanner />
            <div className='flex flex-wrap'>
                {djartist.map((art)=>{
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

export default Dj
