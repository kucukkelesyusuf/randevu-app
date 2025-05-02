import { Archive, ArrowBigUp, FileChartColumnIncreasing, MessageSquareText, NotebookPen, Radiation, SquareActivity, User, Users } from "lucide-react";
import logo from "../../assets/logo-2.png";
import { Link } from "react-router-dom";

export const SidebarComponent = () => {


  return (
    <>
    <div
      className={`min-h-screen hidden min-[1000px]:block  sideOpen:min-[1000px]:w-[25%]  w-[5%] min-[1700px]:[7%] sideOpen:min-[1700px]:w-[15%]  p-2 transition-all duration-300  bg-slate-200/80`}
    >
      <div className="flex flex-col">
        <div
          className={`flex items-center justify-center sideOpen:justify-normal  space-x-0 rounded-md overflow-hidden sideOpen:space-x-4 bg-slate-100`}
        >
          <img src={logo} alt="Logo" className="max-w-[64px]" />
          <div className="hidden timeoutSideOpen:opacity-100 opacity-0 overflow-hidden box-border flex-col transition-all duration-700 sideOpen:flex">
            <h2 className="text-gray-600 text-[1.3rem]">Beykent Hastanesi</h2>
            <small className="text-gray-500 text-[0.7rem]">
              Doktor ve Personel Portalı
            </small>
          </div>
        </div>

        <div className="flex flex-col space-y-2 pt-10 pl-2">

          <h2 className="text-gray-500 text-[0.9rem] sideOpen:block hidden"> Hasta İşlemleri </h2>

          <Link
             to={"/doctor/patient"}
            className="flex items-center pt-2 pb-2 pl-4 pr-4 sideOpen:justify-normal justify-center rounded-md cursor-pointer space-x-0 sideOpen:space-x-4 text-gray-700 bg-slate-100 sidebar-item active:bg-black active:text-white transition-all duration-300"
          >
            <User />{" "}
            <h2 className="text-[0.8rem] text-inherit hidden sideOpen:block">
              {" "}
              Hastalarım{" "}
            </h2>
          </Link>
          <Link
             to={"/doctor/patient/anaylsis"}
            className="flex items-center pt-2 pb-2 pl-4 pr-4 sideOpen:justify-normal justify-center rounded-md cursor-pointer space-x-0 sideOpen:space-x-4 text-gray-700 bg-slate-100 active:bg-black sidebar-item active:text-white transition-all duration-300"
          >
            <FileChartColumnIncreasing />{" "}
            <h2 className="text-[0.8rem] text-inherit hidden sideOpen:block">
              {" "}
              Tahilil Görüntüleme{" "}
            </h2>
          </Link>
          <Link
             to={"/doctor/patient/que"}
            className="flex items-center pt-2 pb-2 pl-4 pr-4 sideOpen:justify-normal justify-center rounded-md cursor-pointer space-x-0 sideOpen:space-x-4 text-gray-700 bg-slate-100 active:bg-black sidebar-item active:text-white transition-all duration-300"
          >
           <Users />{" "}
            <h2 className="text-[0.8rem] text-inherit hidden sideOpen:block">
              {" "}
              Hasta Kabul
            </h2>
          </Link>
          <Link
             to={"/doctor/patient/que"}
            className="flex items-center pt-2 pb-2 pl-4 pr-4 sideOpen:justify-normal justify-center rounded-md cursor-pointer space-x-0 sideOpen:space-x-4 text-gray-700 bg-slate-100 active:bg-black sidebar-item active:text-white transition-all duration-300"
          >
          <Radiation />{" "}
            <h2 className="text-[0.8rem] text-inherit hidden sideOpen:block">
              {" "}
              Radyoloji Görüntüleme
            </h2>
          </Link>

          <h2 className="text-gray-500 text-[0.9rem] sideOpen:block hidden"> Kurum İçi </h2>

          <Link
             to={"/doctor/patient/que"}
            className="flex items-center pt-2 pb-2 pl-4 pr-4 sideOpen:justify-normal justify-center rounded-md cursor-pointer space-x-0 sideOpen:space-x-4 text-gray-700 bg-slate-100 active:bg-black sidebar-item active:text-white transition-all duration-300"
          >
          <NotebookPen />{" "}
            <h2 className="text-[0.8rem] text-inherit hidden sideOpen:block">
              {" "}
              Notlarım
            </h2>
          </Link>
          <Link
             to={"/doctor/patient/que"}
            className="flex items-center pt-2 pb-2 pl-4 pr-4 sideOpen:justify-normal justify-center rounded-md cursor-pointer space-x-0 sideOpen:space-x-4 text-gray-700 bg-slate-100 active:bg-black sidebar-item active:text-white transition-all duration-300"
          >
          <MessageSquareText />{" "}
            <h2 className="text-[0.8rem] text-inherit hidden sideOpen:block">
              {" "}
              Mesajlar
            </h2>
          </Link>
          <Link
             to={"/doctor/patient/que"}
            className="flex items-center pt-2 pb-2 pl-4 pr-4 sideOpen:justify-normal justify-center rounded-md cursor-pointer space-x-0 sideOpen:space-x-4 text-gray-700 bg-slate-100 active:bg-black sidebar-item active:text-white transition-all duration-300"
          >
          <Archive />{" "}
            <h2 className="text-[0.8rem] text-inherit hidden sideOpen:block">
              {" "}
              Kurum Arşivi
            </h2>
          </Link>
          <Link
             to={"/doctor/patient/que"}
            className="flex items-center pt-2 pb-2 pl-4 pr-4 sideOpen:justify-normal justify-center rounded-md cursor-pointer space-x-0 sideOpen:space-x-4 text-gray-700 bg-slate-100 active:bg-black sidebar-item active:text-white transition-all duration-300"
          >
          <SquareActivity />{" "}
            <h2 className="text-[0.8rem] text-inherit hidden sideOpen:block">
              {" "}
              Görev Planlaması
            </h2>
          </Link>
        </div>
      </div>
    </div>



    <div
      className={`min-h-screen z-[6] absolute w-[70%] min-[560px]:w-[30%] top-0 left-[-70%] min-[560px]:left-[-30%] sideOpen:left-0 transition-all duration-300 min-[1000px]:hidden  bg-slate-200`}
    >
      <div className="flex flex-col">
        <div
          className={`flex items-center  rounded-md overflow-hidden space-x-4 bg-slate-100`}
        >
          <img src={logo} alt="Logo" className="max-w-[64px]" />
          <div className="flex flex-col justify-center">
            <h2 className="text-gray-600 text-[1.3rem]">Beykent Hastanesi</h2>
            <small className="text-gray-500 text-[0.7rem]">
              Doktor ve Personel Portalı
            </small>
          </div>
        </div>

        <div className="flex flex-col space-y-2 pt-10 pl-2">

          <h2 className="text-gray-400 text-[0.8rem]"> Hasta İşlemleri </h2>

          <Link
             to={"/doctor/patient"}
            className="flex items-center pt-2 pb-2 pl-4 pr-4  rounded-md cursor-pointer space-x-4 text-gray-700 bg-slate-100 sidebar-item active:bg-black active:text-white transition-all duration-300"
          >
            <User />{" "}
            <h2 className="text-[0.8rem] text-inherit">
              {" "}
              Hastalarım{" "}
            </h2>
          </Link>
          <Link
             to={"/analyses"}
            className="flex items-center pt-2 pb-2 pl-4 pr-4 rounded-md cursor-pointer space-x-4 text-gray-700 bg-slate-100 active:bg-black sidebar-item active:text-white transition-all duration-300"
          >
            <FileChartColumnIncreasing />{" "}
            <h2 className="text-[0.8rem] text-inherit">
              {" "}
              Tahilil Görüntüleme{" "}
            </h2>
          </Link>
          <Link
             to={"/analyses"}
            className="flex items-center pt-2 pb-2 pl-4 pr-4  rounded-md cursor-pointer space-x-4 text-gray-700 bg-slate-100 active:bg-black sidebar-item active:text-white transition-all duration-300"
          >
             <Users />{" "}
            <h2 className="text-[0.8rem] text-inherit">
              {" "}
              Hasta Sırası
            </h2>
          </Link>
          <Link
             to={"/analyses"}
            className="flex items-center pt-2 pb-2 pl-4 pr-4  rounded-md cursor-pointer space-x-4 text-gray-700 bg-slate-100 active:bg-black sidebar-item active:text-white transition-all duration-300"
          >
            <Radiation />{" "}
            <h2 className="text-[0.8rem] text-inherit">
              {" "}
              Radyoloji Görüntüleme
            </h2>
          </Link>
      
        </div>
      </div>
    </div>



    </>
  );
};
