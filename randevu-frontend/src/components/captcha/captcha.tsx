import { RotateCw } from "lucide-react";

interface ICaptcha {
  refreshSessionHandle: any;
  refreshSession: boolean;
  image: string;
}

export const Captcha = (props: ICaptcha) => {
  return (
    <div className="flex items-center space-x-4">
      <RotateCw
        className={`${
          props.refreshSession
            ? "animate-spin cursor-not-allowed text-gray-300"
            : "animate-none cursor-pointer text-gray-600"
        }`}
        onClick={() => props.refreshSessionHandle()}
      />

      {props.image !== "" ? (
        <img
          className="max-w-[100px] rounded-md"
          src={props.image}
          alt="captcha"
        />
      ) : (
        <div className="w-[100px] h-[30px] rounded-md bg-gray-400 animate-pulse" />
      )}
    </div>
  );
};
