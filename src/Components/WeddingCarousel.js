import React from 'react'
import { useState, useEffect } from 'react';

const images = [
    {
        id: "img01",
        img_url: "https://img.freepik.com/free-photo/groom-black-tuxedo-hugs-tender-stunning-bride-while-they-stand_8353-8050.jpg?w=1380&t=st=1702906796~exp=1702907396~hmac=3c2cddd9d291239c4b443f22d0fd070869ca8cd15596bb5a62acf28776d4c947",
        img_text: "Lovely moment between the groom and bride"
    },
    {
        id: "img01",
        img_url: "https://img.freepik.com/free-photo/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony_8353-11057.jpg?w=1060&t=st=1702906850~exp=1702907450~hmac=2b674c5beea88f99045a2f8a56ba5cc87135f7c4fd6e9bf9b7bf938b531c385d",
        img_text: "Beautiful outdoor wedding ceremony with a happy couple."
    },
    {
        id: "img01",
        img_url: "https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        img_text: "Authentic wedding ritual with intertwined hands of the Indian bride and groom."
    }
];


function WeddingCarousel() {
    const [currentImage, setCurrentImage] = useState(0);
    const prevSlide = () =>{
        setCurrentImage((prevImage) => (prevImage-1+ images.length)%images.length);
    }
    const nextSlide = () => {
        setCurrentImage((nextImage) => (nextImage +1)%images.length);
    }
    useEffect(()=>{
        const timer = setInterval(()=>{
            nextSlide();
        }, 5000);
        return ()=>{
            clearInterval(timer);
        }
    }, [currentImage]);
  return (
    <>
    <div className='flex items-center justify-center bg-purple-100'>
        <button onClick={prevSlide} className='bg-purple-300 h-80 p-5'> &lt; </button>
        
        <img src={images[currentImage].img_url} alt="weddingimage" className='w-4/5 m-5 rounded-br-full'></img>
        <button onClick={nextSlide} className='bg-purple-300 h-80 p-5'> &gt; </button>
    </div>
    <div className='relative bottom-40 left-40 font-bold font-sans text-3xl w-2/5 p-2 text-white bg-purple-400'>{images[currentImage].img_text}</div>

    </>
  )
}

export default WeddingCarousel
