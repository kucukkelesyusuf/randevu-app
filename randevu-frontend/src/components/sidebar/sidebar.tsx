import {
  LucideProps,
  X,
} from "lucide-react";
import logo from "../../assets/logo-2.png";
import { Link } from "react-router-dom";
import { ISideBarItem } from "../../pageItems/doctor";
import { useSideBar } from "../../hooks/useSideBar";


interface IProps {
  sidebarItem: ISideBarItem[];
}

function Icon({ icon: Icon }: { icon: React.FC<LucideProps> }) {
  return <Icon />;
}

export const SidebarComponent = (props: IProps) => {

  const {ToggleSidebar} = useSideBar();

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
            {props.sidebarItem.map(({ title, items }, key) => (
              <div
                className="flex flex-col w-[100%] h-[100%] space-y-2"
                key={key}
              >
                <h2 className="text-gray-500 text-[0.9rem] sideOpen:block hidden">
                  {" "}
                  {title}{" "}
                </h2>

                  <div className="pl-2 pr-2">
                <h2 className="bg-black/90 text-white pt-2 pb-2 pl-4 pr-4 text-center rounded-md sideOpen:hidden block"> {title.split(" ")[0][0] + title.split(" ")[1][0]}  </h2>
                    </div>

                {items.map(({ link, text, icon }, key) => (
                  <Link
                    to={link}
                    key={key}
                    className="flex items-center pt-2 pb-2 pl-4 pr-4 sideOpen:justify-normal justify-center rounded-md cursor-pointer space-x-0 sideOpen:space-x-4 text-gray-700 bg-slate-100 sidebar-item active:bg-black active:text-white transition-all duration-300"
                  >
                    <Icon icon={icon} />
                    <h2 className="text-[0.8rem] text-inherit hidden sideOpen:block">
                      {" "}
                      {text}
                    </h2>
                  </Link>
                ))}
              </div>
            ))}
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

          <div className="flex flex-col space-y-2 pt-10 pl-2">
            {props.sidebarItem.map(({ title, items }, key) => (
              <div
                className="flex flex-col w-[100%] h-[100%] space-y-2"
                key={key}
              >
                <h2 className="text-gray-500 text-[0.9rem]">
                  {" "}
                  {title}{" "}
                </h2>
                {items.map(({ link, text, icon }, key) => (
                  <Link
                  onClick={()=>ToggleSidebar()}
                    to={link}
                    key={key}
                    className="flex items-center pt-2 pb-2 pl-4 pr-4  rounded-md cursor-pointer space-x-4 text-gray-700 bg-slate-100 sidebar-item active:bg-black active:text-white transition-all duration-300"
                 
                  >
                    <Icon icon={icon} />
                    <h2 className="text-[0.8rem] text-inherit">
                      {" "}
                      {text}
                    </h2>
                  </Link>
                ))}
              </div>
            ))}
          </div>
           
          </div>
        </div>
      </div>
      <div className="sideOpen:bg-black/70 hidden sideOpen:block z-[5] absolute top-0 left-0 w-[100%]  h-[100%] sideOpen:min-[1000px]:hidden" onClick={()=>ToggleSidebar()}></div>

<X className="absolute hidden sideOpen:max-[999px]:block z-[6] top-4 right-4 text-white w-14 h-14 min-[1000px]:hidden cursor-pointer" onClick={()=>ToggleSidebar()}/>
    </>
  );
};
