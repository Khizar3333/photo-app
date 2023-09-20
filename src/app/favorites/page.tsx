import React from 'react'
import { v2 as cloudinary } from 'cloudinary'
import { CldImage } from 'next-cloudinary'
import CloudinaryImage from '../../components/cloudinary-image'
import Forcerefresher from "../../components/force-refreseher";
import Favoriteslist from "./favorites-list";

export type SearchResult={
  public_id:string,
  tags:string[]
}

cloudinary.config({ 
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.NEXT_PUBLIC_API_KEY, 
  api_secret: process.env.NEXT_PUBLIC_API_SECRET,
  secure: true
});

const Favoritepage = async() => {

  const results=(await cloudinary.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
      .execute()) as unknown as {resources: SearchResult[]}
  return (
    <section>
        <Forcerefresher/>
    <div className='flex flex-col gap-8'>
      <div className='flex justify-between'>
    <h1 className='text-4xl font-bold'>Favorite images</h1>
    
    </div>
<Favoriteslist
InitialResources={results.resources}
/>   
    </div>
    </section>
  )
}

export default Favoritepage
