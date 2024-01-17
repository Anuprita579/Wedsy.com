import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StorefrontIcon from '@mui/icons-material/Storefront';

function CatererBanner(){
    return(
        <div className='bg-gradient-to-r from-black via-pink-500  to-black flex flex-col justify-center align-middle items-center p-6 py-10'>
            <h1 className='text-5xl font-semibold text-white p-2 max-md:text-3xl'>Find a Caterer! </h1>
            <p className='text-yellow-400'>Connecting hearts through wedding memories ❣️</p>
        </div>
    )
}

const caterers = [
    {
        id:"001",
        name: "Fusion Flavors",
        profile_img: "https://images.unsplash.com/photo-1636906227221-01445098448b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdGVyZXJzfGVufDB8fDB8fHww",
        rating: "4.5",
        experience: "7",
        price: "400",
        available: "yes",
    },
    {
        id:"002",
        name: "Supreme Palate",
        profile_img: "https://images.unsplash.com/photo-1638704890058-841a4a376654?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0ZXJlcnN8ZW58MHx8MHx8fDA%3D",
        rating: "4.7",
        experience: "10",
        price: "250",
        available: "no",
    },
    {
        id:"003",
        name: "Divine Tastes",
        profile_img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRpc2glMjB3ZWRkaW5nfGVufDB8fDB8fHww",
        rating: "4",
        experience: "12",
        price: "300",
        available: "yes",
    },
    {
        id:"004",
        name: "Savory Bites",
        profile_img: "https://images.unsplash.com/photo-1625108952144-6304ffc543b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGRpc2glMjB3ZWRkaW5nfGVufDB8fDB8fHww",
        rating: "4.2",
        experience: "6",
        price: "250",
        available: "yes",
    },
    {
        id:"005",
        name: "Culinary Canvas",
        profile_img: "https://images.unsplash.com/photo-1463183547458-6a2c760d0912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHxkaXNoJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        rating: "4.3",
        experience: "8",
        price: "400",
        available: "no",
    },
]

function Caterers() {
  return (
    <>
        <div className='bg-purple-100 w-full h-full'> 
        <CatererBanner />
            <div className='flex flex-wrap'>
                {caterers.map((cat)=>{
                    return(
                        <div className='bg-purple-200 m-4 p-10 rounded-xl flex flex-col justify-center align-middle '>
                            <img src={cat.profile_img} alt='profile' className='h-40 w-40 rounded-full border-2 border-purple-900'/>
                            <h2 className='text-xl text-center p-4 font-semibold'>{cat.name}</h2>
                            <div className='flex justify-between align-middle text-center items-center'> 
                                <h2><StarIcon fontSize='small' className='text-green-800'></StarIcon> {cat.rating}</h2>
                                <h2 className=' text-purple-950'> <StorefrontIcon fontSize='small'></StorefrontIcon> {cat.experience}</h2>
                                {cat.available==="yes"? <div className='h-3 w-3 bg-green-500 rounded-full'></div>:<div className='h-3 w-3 bg-red-500 rounded-full'></div>}
                            </div>
                            <h2 className=' text-purple-950 text-xl font-semibold'>  ₹ {cat.price} <span className='text-sm'>/dish</span> </h2>
                            <button className='bg-purple-900 text-white p-2 px-4 m-2 hover:bg-purple-950'>View Menu</button>
                        </div>
                    )
                })}    
            </div>   
        </div> 
    </>
  )
}

export default Caterers
