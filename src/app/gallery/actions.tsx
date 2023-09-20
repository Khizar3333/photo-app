"use server"
import {v2 as cloudinary} from "cloudinary"

cloudinary.config({ 
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.NEXT_PUBLIC_API_KEY, 
  api_secret: process.env.NEXT_PUBLIC_API_SECRET,
  secure: true
});

const setasFavoriteAction = async(
  publicid:string,
  isFavorite:boolean
  
  ) => {
    if (isFavorite) {
      
      
      await cloudinary.uploader.add_tag('favorite',[publicid]);
    }
    else{
      
      await cloudinary.uploader.remove_tag('favorite',[publicid]);
    }
   
  
}

export default setasFavoriteAction
