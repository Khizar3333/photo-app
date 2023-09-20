"use client"
import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

export function ImageGrid({images,getImage}:{images:SearchResult[],
getImage:(imageData:SearchResult)=>ReactNode

}) {
  const MAX_COLUMN=4

    function getColumns(colindex:number) {
        return images.filter((resource,idx)=> idx %MAX_COLUMN===colindex
        )
      }
    return(
        <div className='grid grid-cols-4 gap-4'>
        {[
          getColumns(0),
          getColumns(1),
          getColumns(2),
          getColumns(3)
        ].map((column,idex)=>(
          <div className='flex flex-col gap-4' key={idex}>
              {column.map(getImage)}
               
          </div>
        )
        )
        }
      
      </div>

    )
}