import React from 'react'

const invitationCard = [
    {
        invitation_id: "1630300727355-27b9216fcf30",
        title:"View Templates",
        img_url: "https://images.unsplash.com/photo-1630300727355-27b9216fcf30?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        invitation_id: "1661657777704-8aacfc70692e",
        title:"Customize Card",
        img_url: "https://plus.unsplash.com/premium_photo-1661657777704-8aacfc70692e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

function InvitationCard() {
  return (
    <>
        <div className='flex w-full justify-center align-middle items-center'>
            {invitationCard.map((inviteCard)=>{
                return(
                    <div key={inviteCard.invitation_id} className='bg-purple-300 m-4 p-4 text-center flex flex-col align-middle justify-center rounded-xl'>
                        <h1 className='text-xl font-bold'>{inviteCard.title}</h1>
                        <img src={inviteCard.img_url} alt={inviteCard.title} className='h-20'/>
                    </div>
                    
                )
            })}    
        </div> 
    </>
  )
}

export default InvitationCard
