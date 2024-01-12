import React from 'react'
import InvitationCard from './InvitationCard'
import BrowseTemplates from './BrowseTemplates'

function Invitation() {
  return (
    <>
        <div className='bg-purple-100 w-full h-full'>
            <InvitationCard />
            <BrowseTemplates />
        </div>
        
    </>
  )
}

export default Invitation
