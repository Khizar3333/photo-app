import { SearchResult } from "@/app/gallery/page"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "lucide-react"
import { useState } from "react"
import { addImageToAlbum } from "./actions"

    
export function AddToAlbumDialog({image,onClose}:{image:SearchResult;
  onClose:()=>void;
}
  ) {
    const [albumName, setAlbumName] = useState("")
    const [open, setOpen] = useState(false)
    
  return (
    <Dialog open={open} onOpenChange={(newOpenState)=>{
      setOpen(newOpenState)
      if(!newOpenState){

        onClose();
      }
    }}> 
      <DialogTrigger asChild>
        <Button variant="ghost" >
          <FolderPlus className="mr-2 h-8 w-4"/>
              <span className="w-max-content">Add to Album</span>
              </Button>
              {/* <AddToAlbumDialog/> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="w-max">Add to album</DialogTitle>
          <DialogDescription>
            Type an album you want to move this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input id="album-name" value={albumName} className="col-span-3" 
            onChange={(e)=>{
                setAlbumName(e.currentTarget.value)
            }}
            
            />
          </div>
          
        </div>
        <DialogFooter>
          <Button type="submit" 
          onClick={async()=>{
            onClose();
                setOpen(false)
                await addImageToAlbum(image,albumName)
          }}
          >
            Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
