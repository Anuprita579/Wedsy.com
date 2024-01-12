import React from 'react'
const templates = [
    {
        template_id:"586b2d7f-1af0-4a15-855e-5ef5e9d2e279-Wedding11-01",
        img_url:"https://image.wedmegood.com/e-invite-images/586b2d7f-1af0-4a15-855e-5ef5e9d2e279-Wedding11-01.JPEG",
    },
    {
        template_id:"07422150-ad4e-4f48-9e1f-758ecd10051f-1_%281%29",
        img_url:"https://image.wedmegood.com/e-invite-images/07422150-ad4e-4f48-9e1f-758ecd10051f-1_%281%29.JPEG",
    },
    {
        template_id:"da33299e-b3f1-45a6-870c-93e1aaf33ad7-Wedding33-1",
        img_url:"https://image.wedmegood.com/e-invite-images/da33299e-b3f1-45a6-870c-93e1aaf33ad7-Wedding33-1.JPEG",
    },
    {
        template_id:"f16dc2ad-66f3-4452-97da-625bef790851-Wedding35-1",
        img_url:"https://image.wedmegood.com/e-invite-images/f16dc2ad-66f3-4452-97da-625bef790851-Wedding35-1.JPEG",
    },
    {
        template_id:"ef2bbbaf-4d30-4f63-b7aa-0b26b0eb3aa9-1_%2817%29",
        img_url:"https://image.wedmegood.com/e-invite-images/ef2bbbaf-4d30-4f63-b7aa-0b26b0eb3aa9-1_%2817%29.JPEG",
    },
    {
        template_id:"bc69fd21-2e1e-4839-95ca-716ca0425ad9-Wedding17-1",
        img_url:"https://image.wedmegood.com/e-invite-images/bc69fd21-2e1e-4839-95ca-716ca0425ad9-Wedding17-1.JPEG",
    },
    {
        template_id:"5deec774-e989-4465-9e72-21c19e5988ae-Wedding34-1",
        img_url:"https://image.wedmegood.com/e-invite-images/5deec774-e989-4465-9e72-21c19e5988ae-Wedding34-1.JPEG",
    },

]

function BrowseTemplates() {
  return (
    <>
        <h1 className='font-sans font-semibold text-3xl text-purple-950 pb-4 pl-4 bg-purple-200'>Browse Free Templates</h1>
        <div className='flex flex-wrap justify-center align-middle bg-purple-200'>
            {templates.map((temp)=>{
                return(
                    <div className='m-3'>
                        <img src={temp.img_url} alt='wedding template' className='h-80'/>
                    </div>
                    
                )
            })}
        </div>
        

      
    </>
  )
}

export default BrowseTemplates
