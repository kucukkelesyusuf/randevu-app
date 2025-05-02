import { SidebarComponent } from "../components/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import { Doctor } from "../pageItems/doctor";
import { RightNavbar } from "../components/navbar/rightNavbar";
import { LeftNavbar } from "../components/navbar/leftNavbar";

export const PersonelPage = () => {
  return (
    <div className="flex min-h-screen relative">
      <SidebarComponent sidebarItem={Doctor} />
      <div
        className={`min-[300px]:w-[100%] sideOpen:min-[1000px]:w-[75%] min-[1000px]:w-[93%] sideOpen:min-[1700px]:w-[85%]  min-[1700px]:w-[97%]  transition-all duration-300 bg-slate-50`}
      >
        <div className="flex justify-between border-b-[1px]  p-4 border-gray-300">
          <LeftNavbar />
          <RightNavbar messageCount={1} notificationCount={1} />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
