"use client"
import Heart from '@/components/icons/heart'
import { CldImage, CldImageProps } from 'next-cloudinary'
import React, { ComponentProps, useState, useTransition } from 'react'
import setasFavoriteAction from '../app/gallery/actions'
import { SearchResult } from '../app/gallery/page'
import FullHeart from '@/components/icons/full-heart'
import { ImageMenu } from './image-menu'

const CloudinaryImage = (props:  {imagedata:SearchResult;onUnheart?:(unheartedResource:SearchResult)=>void;
}&Omit<CldImageProps, "src">) => {
    const[transition,startTransition]=useTransition()
    const {imagedata,onUnheart}=props
    const [isFavorited,setIsFavorited]=useState(imagedata.tags.includes("favorite"))
 return (
   <>
    <div className="relative">
     <CldImage  {...props} src={imagedata.public_id} />
     {isFavorited?
         <FullHeart
         onClick={()=>{
            onUnheart?.(imagedata)
            setIsFavorited(false)
          startTransition(()=>{
             setasFavoriteAction(imagedata.public_id,false)
         })
         }}
         className='absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer'/>     
     :
     <Heart
     onClick={()=>{
      setIsFavorited(true)
      startTransition(()=>{
         setasFavoriteAction(imagedata.public_id,true)
      })
     }}
     className='absolute top-2 left-2 hover:text-red-700 cursor-pointer'/>
   }
      <ImageMenu
      image={imagedata}
      />
   
   </div>
   </>
 )
  
}

export default CloudinaryImage
