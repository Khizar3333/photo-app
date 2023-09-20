import React from 'react'
import { v2 as cloudinary } from 'cloudinary'
import Albumgrid from './album-grid'
import { SearchResult } from '../page'
import Forcerefreseher from '@/components/force-refreseher';


cloudinary.config({ 
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.NEXT_PUBLIC_API_KEY, 
  api_secret: process.env.NEXT_PUBLIC_API_SECRET,
  secure: true
});

const Gallery = async({params:{albumName}}:
    {params:{
        albumName:string
    }}
    ) => {

  const results=(await cloudinary.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
      .execute()) as unknown as {resources: SearchResult[]}
  // console.log("result",results)
 

  return (
    <section>
      <Forcerefreseher/>
    <div className='flex flex-col gap-8'>
      <div className='flex justify-between'>
    <h1 className='text-4xl font-bold'>Album {albumName}</h1>
      
    </div>
    <Albumgrid images={results.resources}/>
   
   
    </div>
    </section>
  )
}

export default Gallery
