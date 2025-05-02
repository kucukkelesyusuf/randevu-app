import { useEffect, useState } from "react";

export const useSideBar = () => {
  
    const [isOpen,setOpen] = useState(false);


    useEffect(()=>{

        if(!isOpen){

            document.documentElement.classList.remove('sideOpen');
            setTimeout(()=>{
            document.documentElement.classList.remove('timeoutSideOpen');
            },50);

        }else{
            document.documentElement.classList.add('sideOpen');
            setTimeout(()=>{
                document.documentElement.classList.add('timeoutSideOpen');
            },50);
        }

    },[isOpen]);

    const ToggleSidebar = ()=>{
        setOpen(!isOpen);
    }
  
    return {
      ToggleSidebar
  }
}
