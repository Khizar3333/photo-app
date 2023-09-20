"use client"

import React from 'react'
import CloudinaryImage from '../../components/cloudinary-image'
import { ImageGrid } from '@/components/image-grid'
import { SearchResult } from './page'


const Gallerygrid = ({images}:{images:SearchResult[]}) => {

  return (
    
    <ImageGrid 
    images={images}
    getImage={(imageData:SearchResult)=>{
      return <CloudinaryImage

        key={imageData.public_id}
        imagedata={imageData}
        width="400"
        height="300"
        alt="an image of something" />
    }}
    />
   
  )
}

export default Gallerygrid
