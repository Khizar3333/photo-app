
import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import { v2 as cloudinary } from 'cloudinary'
import Cloudinarycon from './cloudinary';
// import cloudinarycon from "./cloudinary";

export type UploadResult={
  info:{
    public_id:string;
  };
  event:"success";

  
};
cloudinary.config({ 
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.NEXT_PUBLIC_API_KEY, 
  api_secret: process.env.NEXT_PUBLIC_API_SECRET,
  secure: true
});
export default function Home() {
  return <Cloudinarycon/>

}
