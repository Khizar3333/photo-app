import React from 'react'
// import cloudinary from 'cloudinary'
import { v2 as cloudinary } from 'cloudinary'
import { CldImage } from 'next-cloudinary'
import CloudinaryImage from '../../components/cloudinary-image'
import { ImageGrid } from '@/components/image-grid'
import { Albumcard } from './albums-card'
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
export type Folder={name:string; path:string}
const Albumspage = async() => {

  const {folders}=(await cloudinary.api.root_folders()) as {
    folders:Folder[]
  }
    // .expression('resource_type:image')
    // .sort_by('created_at', 'desc')
    // .with_field('tags')
    // .max_results(30)
    //   .execute()) as unknown as {resources: SearchResult[]}
//   console.log(folders)
 

  return (
    <section>
    <div className='flex flex-col gap-8'>
      <div className='flex justify-between'>
    <h1 className='text-4xl font-bold'>Albums</h1>
      
    </div>
   <div className='grid grid-cols-3 gap-8'>
   {folders.map((folder)=>(
    <Albumcard key={folder.path} folder={folder}   />
   ))}
   </div>
    </div>
    </section>
  )
}

export default Albumspage
