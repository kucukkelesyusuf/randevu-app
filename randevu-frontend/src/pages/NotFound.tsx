import logo from "../assets/logo-2.png";
import { Small } from "../components/small/small";
export const NotFound = () => {
  return (
    <div className="w-[100%] min-h-screen bg-slate-200/90 relative">
      <div className="flex flex-col items-center absolute left-[50%] translate-x-[-50%] top-[30%] translate-y-[-30%]">
        <img src={logo} alt="logo" className="max-w-[250px] md:max-w-[350px]" />
        <h2 className="text-[1.2rem] md:text-[1.5rem] text-gray-500">
          {" "}
          Üzgünüz Aradığınız Sayfa Bulunamadı{" "}
        </h2>
        <Small className="mt-2">
          {" "}
          Sayfa silinmiş veya kaldırılmış olabilir{" "}
        </Small>
        <h2 className="text-[2rem] md:text-[3rem]  font-bold text-gray-600">
          404
        </h2>
      </div>
    </div>
  );
};
