import { Menu, Sidebar } from "lucide-react";
import { SidebarComponent } from "../components/sidebar/sidebar";
import { useSideBar } from "../hooks/useSideBar";
import { Outlet } from "react-router-dom";
import { Doctor } from "../pageItems/doctor";
import { RightNavbar } from "../components/navbar/rightNavbar";

export const DoctorPage = () => {
  const { ToggleSidebar } = useSideBar();
  
  return (
  
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

          <RightNavbar messageCount={1} notificationCount={1} />

        </div>
        <Outlet/>
      </div>
    </div>

  );
};
