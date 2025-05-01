import { PropsWithChildren, useEffect, useState } from "react"
import { cn } from "./timeout";


interface IModal extends PropsWithChildren{
    open?:boolean;
}

export const Modal = (props:IModal) => {

    const [className,setClassName] = useState("");
    const [open,setOpen] = useState(false);

    useEffect(()=>{
        if(!props.open){
            (async()=>{
                setOpen(false)
                setClassName(await cn("hidden"));
            })()
        }else{
            setClassName("")
            setTimeout(()=>setOpen(true),100)
        }
    },[props.open])

  return (
    <>
<div className={`${open ? "top-[50%]" :"top-[-50%]"} modal`}>
 {props.children}
</div>
<div className={` ${open ? "bg-black/70" :`bg-none`} modal-background  ${className}`}>

</div>

</>
  )
}
