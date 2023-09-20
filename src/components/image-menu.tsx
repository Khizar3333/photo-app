import {User,FolderPlus, Pencil} from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu } from "./icons/menu"
import { AddToAlbumDialog } from "./add-to-album-dialog"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"
import Link from "next/link"
  
  export function ImageMenu({image}:{image:SearchResult}) {
    const [open, setOpen] = useState(false)
    return (
        <div className="absolute right-2 top-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          
            <DropdownMenuItem asChild >
                <AddToAlbumDialog image={image} onClose={()=>setOpen(false)}/>
            </DropdownMenuItem>
            <DropdownMenuItem asChild >
        <Button asChild variant="ghost" className="cursor-pointer flex justify-start pl-2">

                <Link  href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}> 
                <Pencil className="mr-2 w-4 h-4"/>
                Edit
                </Link>
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    )
  }
  