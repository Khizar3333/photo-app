import React from 'react'
import Uploadbutton from './Upload-button'
// import cloudinary from 'cloudinary'
import { v2 as cloudinary } from 'cloudinary'
import { CldImage } from 'next-cloudinary'
import CloudinaryImage from '../../components/cloudinary-image'
import { ImageGrid } from '@/components/image-grid'
import Gallerygrid from './gallery-grid'
import { Searchform } from './search-from'
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

const Gallery = async(
  {searchParams: { search},}:
    {searchParams:{
        search:string
    }}
) => {

  const results=(await cloudinary.search
    .expression(`resource_type:image${search? ` AND tags=${search}` : ""}`)
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
      .execute()) as unknown as {resources: SearchResult[]}
    

  return (
    <section>
    <div className='flex flex-col gap-8'>
      <div className='flex justify-between'>
    <h1 className='text-4xl font-bold'>Gallery</h1>
    <Uploadbutton
      
    />
    </div>
    <Searchform initialSearch={search}/>
    <Gallerygrid images={results.resources}/>
   
   
    </div>
    </section>
  )
}

export default Gallery
