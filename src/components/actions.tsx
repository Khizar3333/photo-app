"use server"
import { SearchResult } from "@/app/gallery/page";
import {v2 as cloudinary} from "cloudinary"

cloudinary.config({ 
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.NEXT_PUBLIC_API_KEY, 
  api_secret: process.env.NEXT_PUBLIC_API_SECRET,
  secure: true
});

export async function addImageToAlbum(image:SearchResult,album:string,) {
    await cloudinary.api.create_folder(album);
    let parts=image.public_id.split("/")
    if(parts.length>1){
      parts=parts.slice(1)
    }
    const publicId=parts.join('/')

    await cloudinary.uploader.rename(image.public_id,`${album}/${publicId}`)
}