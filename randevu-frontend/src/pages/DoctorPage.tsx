import { Bell, Menu, MessageSquareText, Sidebar, X } from "lucide-react";
import { SidebarComponent } from "../components/sidebar/sidebar";
import { useSideBar } from "../hooks/useSideBar";
import { Outlet } from "react-router-dom";
import { Doctor } from "../pageItems/doctor";

export const DoctorPage = () => {
  const { ToggleSidebar } = useSideBar();
  
  return (
    <>
        <div className="flex min-h-screen relative">
      <SidebarComponent sidebarItem={Doctor} />
      <div
        className={`min-[300px]:w-[100%] sideOpen:min-[1000px]:w-[75%] min-[1000px]:w-[93%] sideOpen:min-[1700px]:w-[85%]  min-[1700px]:w-[97%]  transition-all duration-300 bg-slate-50`}
      >
        <div className="flex justify-between border-b-[1px]  p-4 border-gray-300">
          <div className="space-x-4 hidden min-[1000px]:flex p-2">
            <Sidebar
              onClick={() => ToggleSidebar()}
              className="cursor-pointer w-6 h-6"
            />
          </div>
       
          <Menu 
            onClick={()=>ToggleSidebar()}
            className="cursor-pointer w-6 h-6 block min-[1000px]:hidden"
          />

          <div className="flex space-x-4 items-center">
          <img src="https://avesis.aybu.edu.tr/user/image/840" alt="Doktor Resmi" className="max-w-[36px] rounded-full "/>

          <div className="relative w-[100%] h-[100%] flex items-center justify-center p-2 bg-black text-white rounded-full">
          <MessageSquareText className="cursor-pointer"/>
           <div className="absolute top-[-20%] right-[-30%] bg-red-500  flex items-center justify-center text-white pr-2 pl-2 rounded-full">3</div>

          </div>

          <div className="relative w-[100%] h-[100%] flex items-center justify-center p-2 bg-black text-white rounded-full">
          <Bell  className="cursor-pointer"/>
          <div className="absolute top-[-20%] right-[-30%] bg-red-500  flex items-center justify-center text-white pr-2 pl-2 rounded-full">3</div>
          </div>

          
          </div>

        </div>
        <Outlet/>
      </div>
    </div>
     <div className="sideOpen:bg-black/30 hidden sideOpen:block z-[5] absolute top-0 left-0 w-[100%]  h-[100%] sideOpen:min-[1000px]:hidden" onClick={()=>ToggleSidebar()}></div>

     <X className="absolute hidden sideOpen:max-[999px]:block z-[6] top-4 right-4 text-white w-14 h-14 min-[1000px]:hidden cursor-pointer" onClick={()=>ToggleSidebar()}/>

    </>

  );
};
