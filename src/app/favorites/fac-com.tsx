"use client"
import React, { useEffect, useState } from 'react'
import { v2 as cloudinary } from 'cloudinary'
import { CldImage } from 'next-cloudinary'
import CloudinaryImage from '../../components/cloudinary-image'
import Forcerefresher from "../../components/force-refreseher";
import { ImageGrid } from '@/components/image-grid'
export type SearchResult={
  public_id:string,
  tags:string[]
}




const Favoritecom = ({InitialResources}:{InitialResources:SearchResult[]}) => {
    const [resources, setResources] = useState(InitialResources)
    useEffect(() => {
      
    setResources(InitialResources)
      
    }, [InitialResources])
    
      
    
      return (
        <ImageGrid 
        images={resources}
        getImage={(imageData:SearchResult)=>{
          return <CloudinaryImage
          key={imageData.public_id}
          imagedata={imageData}
          width="400"
          height="300"
          alt="an image of something"
          onUnheart={(unheartedResource) => {
            setResources((currentResources) =>
              currentResources.filter(
                (resource) =>
                  resource.public_id !== unheartedResource.public_id
              )
            );
          }}
        />
        }}
        />
      )
    }
    
    export default Favoritecom