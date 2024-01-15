import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StorefrontIcon from '@mui/icons-material/Storefront';

function FloristBanner(){
    return(
        <div className='bg-gradient-to-r from-black via-pink-500  to-black flex flex-col justify-center align-middle items-center p-6 py-10'>
            <h1 className='text-5xl font-semibold text-white p-2'>Find a Makeup Artist! </h1>
            <p className='text-yellow-400'>Connecting hearts through wedding memories ❣️</p>
        </div>
    )
}

const florist = [
    {
        id:"001",
        name: "Bloom Bazaar",
        profile_img: "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4.5",
        experience: "5",
        price: "400",
        available: "yes",
    },
    {
        id:"002",
        name: "Elegant Petals",
        profile_img: "https://images.unsplash.com/photo-1589244159943-460088ed5c92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4.7",
        experience: "7",
        price: "500",
        available: "no",
    },
    {
        id:"003",
        name: "Dazzling Daisies",
        profile_img: "https://images.unsplash.com/photo-1558861122-40aa75d3a841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
        rating: "4",
        experience: "2",
        price: "300",
        available: "yes",
    },
    {
        id:"004",
        name: "Petit Marche",
        profile_img: "https://images.unsplash.com/photo-1616614992443-72324b4f83c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlciUyMHNob3B8ZW58MHx8MHx8fDA%3D",
        rating: "4.2",
        experience: "4",
        price: "450",
        available: "yes",
    },
    {
        id:"005",
        name: "Vibrant Violets",
        profile_img: "https://images.unsplash.com/photo-1600104197373-c07cc35e4f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb3dlciUyMHNob3B8ZW58MHx8MHx8fDA%3D",
        rating: "4.3",
        experience: "6",
        price: "400",
        available: "no",
    },
]

function Florist() {
  return (
    <>
        <div className='bg-purple-100 w-full h-full'> 
        <FloristBanner />
            <div className='flex flex-wrap'>
                {florist.map((flower)=>{
                    return(
                        <div className='bg-purple-200 m-4 p-10 rounded-xl flex flex-col justify-center align-middle'>
                            <img src={flower.profile_img} alt='profile' className='h-40 w-40 rounded-full border-2 border-purple-900'/>
                            <h2 className='text-xl text-center p-4 font-semibold'>{flower.name}</h2>
                            <div className='flex justify-between align-middle text-center items-center'> 
                                <h2><StarIcon fontSize='small' className='text-green-800'></StarIcon> {flower.rating}</h2>
                                <h2 className=' text-purple-950'> <StorefrontIcon fontSize='small'></StorefrontIcon> {flower.experience}</h2>
                                {flower.available==="yes"? <div className='h-3 w-3 bg-green-500 rounded-full'></div>:<div className='h-3 w-3 bg-red-500 rounded-full'></div>}
                            </div>
                            <h2 className=' text-purple-950 text-xl font-semibold'>  ₹ {flower.price} <span className='text-sm'>/kg</span> </h2>
                            <button className='bg-purple-900 text-white p-2 px-4 m-2'>View Shop</button>
                        </div>
                    )
                })}    
            </div>   
        </div>
    </>
  )
}

export default Florist
