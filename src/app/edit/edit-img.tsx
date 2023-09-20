"use client"
import { Button } from "@/components/ui/button"
import React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CldImage } from "next-cloudinary"
import { useState } from "react"


export function Editimg({searchParams: { publicId},}:
    {searchParams:{
        publicId:string
    }}
    ) {
    console.log(publicId)
    const [transformation, setTransformation] = useState<undefined | "generative-fill"|"blur"|"grayscale"|'pixelate'
    |'removebackground'
    >()
        const [prompt, setPrompt] = useState("")
        const [pendingprompt, setPendingPrompt] = useState("")
    return(
    <>
<section>
    <div className='flex flex-col gap-8'>
      <div className='flex justify-between'>
    <h1 className='text-4xl font-bold'>Edit {publicId}</h1>
      
    </div>
    <div className="flex gap-4">
    <Button variant="ghost" onClick={()=>{
    setTransformation(undefined)
    }
    }> Clear All</Button>

    <div className="flex flex-col gap-4"><Button onClick={()=>{
        setTransformation('generative-fill')
    setPrompt(pendingprompt)
        
        }}> Apply Generative fill</Button>
    <Label>Prompt</Label>
    <Input value={pendingprompt} onChange={e=>setPendingPrompt((e).currentTarget.value)}/>
    </div>
    <Button onClick={()=>setTransformation('blur')}> Apply blur</Button>
    <Button onClick={()=>setTransformation('grayscale')}> Convert to gray</Button>
    <Button onClick={()=>setTransformation('pixelate')}> Apply pixelate</Button>
    <Button onClick={()=>setTransformation('removebackground')}> Removebackground</Button>
    </div>
    <div className="grid grid-cols-2 gap-12">
   <CldImage  src={publicId}
                width="500"
                height="400" alt="image"   />
   {transformation==="generative-fill"&&(
    <CldImage  src={publicId}
    width="1400"
    height="900" alt="image" 
    crop="pad"
    fillBackground={{
        prompt,
    }}
    />
   )}
   {transformation==="blur"&&(
    <CldImage  src={publicId}
    width="1200"
    height="1400" alt="image" 
    blur='800'
    />
   )}
   {transformation==="grayscale"&&(
    <CldImage  src={publicId}
    width="1200"
    grayscale
    height="1400" alt="image" 
    />
   )}
   {transformation==="pixelate"&&(
    <CldImage  src={publicId}
    width="1200"
    pixelate
    height="1400" alt="image" 
    />
   )}
   {transformation==="removebackground"&&(
    <CldImage  src={publicId}
    width="1200"
    removeBackground
    height="700" alt="image" 
    />
   )}
   </div>
    </div>
    </section>

     </>
    )}