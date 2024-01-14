import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StorefrontIcon from '@mui/icons-material/Storefront';

const bridal = [
    {
        id:"001",
        name: "Gown Glow",
        profile_img: "https://images.unsplash.com/photo-1489924076954-11f4c4dd37f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdlZGRpbmclMjBnb3duJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4.5",
        experience: "7",
        price: "30000",
        available: "yes",
    },
    {
        id:"002",
        name: "Silk Style",
        profile_img: "https://images.unsplash.com/photo-1623053491914-36c4591897b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlZGRpbmclMjBnb3duJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4.7",
        experience: "10",
        price: "25000",
        available: "no",
    },
    {
        id:"003",
        name: "Bliss Bride",
        profile_img: "https://images.unsplash.com/photo-1591253368336-a4409e39df7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlZGRpbmclMjBnb3duJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4",
        experience: "12",
        price: "30000",
        available: "yes",
    },
    {
        id:"004",
        name: "Veil Vogue",
        profile_img: "https://images.unsplash.com/photo-1676132068643-9ebacec267e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlZGRpbmclMjBnb3duJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4.2",
        experience: "6",
        price: "25000",
        available: "yes",
    },
    {
        id:"005",
        name: "Vogue Vows",
        profile_img: "https://images.unsplash.com/photo-1667580385419-fd00f32b3265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdlZGRpbmclMjBnb3duJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4.3",
        experience: "8",
        price: "40000",
        available: "no",
    },
]

function BridalShop() {
  return (
    <>
        <div className='bg-purple-100 w-full h-full'> 
            <div className='flex flex-wrap'>
                {bridal.map((bride)=>{
                    return(
                        <div className='bg-purple-200 m-4 p-10 rounded-xl flex flex-col justify-center align-middle '>
                            <img src={bride.profile_img} alt='profile' className='h-40 w-40 rounded-full border-2 border-purple-900'/>
                            <h2 className='text-xl text-center p-4 font-semibold'>{bride.name}</h2>
                            <div className='flex justify-between align-middle text-center items-center'> 
                                <h2><StarIcon fontSize='small' className='text-green-800'></StarIcon> {bride.rating}</h2>
                                <h2 className=' text-purple-950'> <StorefrontIcon fontSize='small'></StorefrontIcon> {bride.experience}</h2>
                                {bride.available==="yes"? <div className='h-3 w-3 bg-green-500 rounded-full'></div>:<div className='h-3 w-3 bg-red-500 rounded-full'></div>}
                            </div>
                            <h2 className=' text-purple-950 text-xl font-semibold'>  ₹ {bride.price} <span className='text-sm'>~approx</span> </h2>
                            <button className='bg-purple-900 text-white p-2 px-4 m-2'>View Menu</button>
                        </div>
                    )
                })}    
            </div>   
        </div>
    </>
  )
}

export default BridalShop
