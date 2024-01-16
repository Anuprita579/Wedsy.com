import React from 'react';
import CommunityBanner from './CommunityBanner';
import Testimonials from './Testimonials';

const gallery = [
    {
        gal_id:"001",
        gal_img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gal_id:"002",
        gal_img: "https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gal_id:"003",
        gal_img: "https://images.unsplash.com/photo-1522333323-32663f141b57?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gal_id:"004",
        gal_img: "https://images.unsplash.com/photo-1625486117932-7d17778bc482?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzMwfHx3ZWRkaW5nJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
        gal_id:"005",
        gal_img: "https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        gal_id:"006",
        gal_img: "https://images.unsplash.com/photo-1594397856557-75aca2e35b00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"007",
        gal_img: "https://images.unsplash.com/photo-1517456215183-9a2c3a748d0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjcxfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"008",
        gal_img: "https://images.unsplash.com/photo-1594814797031-cedbaec230fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY0fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"009",
        gal_img: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        gal_id:"010",
        gal_img: "https://images.unsplash.com/photo-1525272149490-82288cb110a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzYwfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"011",
        gal_img: "https://images.unsplash.com/photo-1586439189876-63957906f3fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDgwfHx3ZWRkaW5nJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
        gal_id:"012",
        gal_img: "https://images.unsplash.com/photo-1599256613621-1a8141903031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDA3fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"013",
        gal_img: "https://images.unsplash.com/photo-1537274385128-70bd700a529c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDYxfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"014",
        gal_img: "https://images.unsplash.com/photo-1600164913117-2125c1f60b01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDc0fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"015",
        gal_img: "https://images.unsplash.com/photo-1611106211090-8f3c79eb8552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        gal_id:"016",
        gal_img: "https://images.unsplash.com/photo-1549997966-5dd46b8e2b06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTQ2fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"017",
        gal_img: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        gal_id:"018",
        gal_img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        gal_id:"019",
        gal_img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        gal_id:"020",
        gal_img: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        gal_id:"021",
        gal_img: "https://images.unsplash.com/photo-1550784718-990c6de52adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        gal_id:"022",
        gal_img: "https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        gal_id:"023",
        gal_img: "https://images.unsplash.com/photo-1583939411023-14783179e581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"024",
        gal_img: "https://images.unsplash.com/photo-1576694667642-6f289dd54187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"025",
        gal_img: "https://images.unsplash.com/photo-1622117470265-61eb5daff3a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"026",
        gal_img: "https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"027",
        gal_img: "https://images.unsplash.com/photo-1612599542650-3b98fd99f96a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"028",
        gal_img: "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"029",
        gal_img: "https://images.unsplash.com/photo-1460364157752-926555421a7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"030",
        gal_img: "https://images.unsplash.com/photo-1505944357431-27579db47558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"031",
        gal_img: "https://images.unsplash.com/photo-1549997966-5dd46b8e2b06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMwfHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"032",
        gal_img: "https://images.unsplash.com/photo-1558006662-4ecd54aaece3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg0fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"033",
        gal_img: "https://images.unsplash.com/photo-1622979581361-23296b7b3ad2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc2fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"034",
        gal_img: "https://images.unsplash.com/photo-1571984129381-41d698ebca6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg4fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"035",
        gal_img: "https://images.unsplash.com/photo-1543556154-22e2cfecff69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkxfHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"036",
        gal_img: "https://images.unsplash.com/photo-1549997965-a0cb188487f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA3fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"037",
        gal_img: "https://images.unsplash.com/photo-1600096194735-ec70b8463112?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE0fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"038",
        gal_img: "https://images.unsplash.com/photo-1588963200960-44cf8e2b6fed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQ4fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"039",
        gal_img: "https://images.unsplash.com/photo-1576694700950-47ff95f5ec81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzUwfHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    {
        gal_id:"040",
        gal_img: "https://images.unsplash.com/photo-1580824456624-90e7ebe08d4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzk0fHx3ZWRkaW5nfGVufDB8fDB8fHww"
    },
    
]

function Community() {
  return (
    <>
    <div className='bg-purple-200 w-full h-full'>
        <CommunityBanner />

        <Testimonials />
        <h2 className='font-sans font-bold text-3xl pl-3 mt-4 text-purple-800 bg-gradient-to-b from-purple-200 to-purple-300 p-5 underline underline-offset-8 text-center'>Gallery &mdash; <span className='italic font-semibold text-blue-700 text-2xl'>Wedding Moment Wall</span></h2>
        <div className='flex flex-wrap justify-center align-middle'>
            {gallery.map((gal)=>{
                return(
                    <div key={gal.gal_id} className='m-2'>
                        <img src={gal.gal_img} alt='gallery' className='object-cover h-full w-full'/>
                    </div>
                )
            })}
        </div>
        
    </div>
      
    </>
  )
}

export default Community
