import React from "react"
import { v2 as cloudinary } from 'cloudinary'
import {Editimg} from "./edit-img";

cloudinary.config({ 
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.NEXT_PUBLIC_API_KEY, 
    api_secret: process.env.NEXT_PUBLIC_API_SECRET,
    secure: true
  });


export default function Editpage({searchParams: { publicId},}:
  {searchParams:{
      publicId:string
  }}) {
    return <Editimg searchParams={{publicId}}    
       />
}