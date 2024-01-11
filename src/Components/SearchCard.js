import React from 'react'

const searchCard = [
    {
        title: "Photographer",
        img_url: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Florist",
        img_url: "https://images.unsplash.com/photo-1491994336086-44f5d76dd8f2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Caterers",
        img_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Bridal Shop",
        img_url: "https://images.unsplash.com/photo-1665783126947-8c98c7b7ac72?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Makeup Artist",
        img_url: "https://images.unsplash.com/photo-1621691553102-66d4ecdb1be2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "DJ",
        img_url: "https://images.unsplash.com/photo-1513866942102-cfdd82745c6a?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

function SearchCard() {
  return (
    <>
        <div>
            <h1>{searchCard[0].title}</h1>
            <img src={searchCard[0].img_url} alt={searchCard[0].title} />

        </div>
      
    </>
  )
}

export default SearchCard
