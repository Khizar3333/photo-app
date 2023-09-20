// "use client"
import React, { useState } from 'react'
import { v2 as cloudinary } from 'cloudinary'
import { CldImage } from 'next-cloudinary'
import CloudinaryImage from '../../components/cloudinary-image'
import Forcerefresher from "../../components/force-refreseher";
import Favoritecom from './fac-com';
export type SearchResult={
  public_id:string,
  tags:string[]
}


// const results=()=>{
//   // const res = await fetch('https://api.cloudinary.com/v1_1/'+process.env.NEXT_PUBLIC_CLOUDINARY


//   await cloudinary.search
//   .expression('resource_type:image AND tags=favorite')
//   .sort_by('created_at', 'desc')
//   .with_field('tags')
//   .max_results(30)
//     .execute()) as unknown as {resources: SearchResult[]}
// }}
cloudinary.config({ 
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.NEXT_PUBLIC_API_KEY, 
  api_secret: process.env.NEXT_PUBLIC_API_SECRET,
  secure: true
});

const Favoriteslist = async({InitialResources}:{InitialResources:SearchResult[]}) => {
const results=(await cloudinary.search
  .expression('resource_type:image AND tags=favorite')
  .sort_by('created_at', 'desc')
  .with_field('tags')
  .max_results(30)
    .execute()) as unknown as {resources: SearchResult[]}

    return(
  <Favoritecom InitialResources={results.resources}/>
    )

}

export default Favoriteslist


