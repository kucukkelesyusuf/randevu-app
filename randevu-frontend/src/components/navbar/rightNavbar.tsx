import { Bell, MessageSquareText } from "lucide-react"

interface IProps {
     messageCount:number;
     notificationCount:number
}

export const RightNavbar = (props:IProps) => {
  return (
    <div className="flex space-x-4 items-center">
            <img src="https://avesis.aybu.edu.tr/user/image/840" alt="Doktor Resmi" className="max-w-[36px] rounded-full "/>
  
            <div className="relative w-[100%] h-[100%] flex items-center justify-center p-2 bg-black text-white rounded-full">
            <MessageSquareText className="cursor-pointer"/>
             { props.messageCount !== 0 && <div className="absolute top-[-20%] right-[-30%] bg-red-500  flex items-center justify-center text-white pr-2 pl-2 rounded-full">{props.messageCount}</div>}
              
  
            </div>
  
            <div className="relative w-[100%] h-[100%] flex items-center justify-center p-2 bg-black text-white rounded-full">
            <Bell  className="cursor-pointer"/>
            
            {props.notificationCount !== 0 && <div className="absolute top-[-20%] right-[-30%] bg-red-500  flex items-center justify-center text-white pr-2 pl-2 rounded-full">{props.notificationCount}</div>}
            </div>
  
            
            </div>
  )
}
