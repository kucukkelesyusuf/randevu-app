import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import {
  ErrorToasterClose,
  IErrorToaster,
  INotificateToaster,
  NotificateToasterClose,
} from "../../slice/ToastSlice";
import { Button } from "../button/button";
import { useEffect } from "react";

export const Toast = () => {
  const dispatch = useDispatch();

  const notificationProps: INotificateToaster = useSelector(
    (store: IRootState) => store.toast.Notifcation
  );
  const errorProps: IErrorToaster = useSelector(
    (store: IRootState) => store.toast.Error
  );
  useEffect(() => {
    if (notificationProps.open) {
      setTimeout(() => {
        dispatch(NotificateToasterClose());
      }, notificationProps.delay);
    }
  }, [notificationProps.open]);

  useEffect(() => {
    if (errorProps.open) {
      setTimeout(() => {
        dispatch(ErrorToasterClose());
      }, errorProps.delay);
    }
  }, [errorProps.open]);

  return (
    <div
      className={`toast ${errorProps.open ? 'bg-red-500' : 'bg-white'} ${
        notificationProps.open || errorProps.open ? "right-[10px]" : "right-[-20%]"
      }`}
    >
      {notificationProps.open && !errorProps.open  && (
        <div className="flex flex-col justify-center pl-1 pr-1 space-y-2 w-[100%] h-[100%]">
          <div className="flex space-x-20 items-center">
            <div className="flex flex-col">
              <p className="text-[0.8rem] text-gray-600 font-bold">
                {notificationProps.header}
              </p>
              <p className="text-[0.8rem] text-gray-400 font-thin">
                {notificationProps.explantaion}
              </p>
            </div>
            <Button
              onClick={() => dispatch(NotificateToasterClose())}
              variant="black"
              className="cursor-default text-center text-white"
            >
              kapat
            </Button>
          </div>
        </div>
      )}
      {errorProps.open && !notificationProps.open && (
        <div className="flex flex-col justify-center pl-1 pr-1 space-y-2 w-[100%] h-[100%]">
          <div className="flex space-x-20 items-center">
            <div className="flex flex-col">
              <p className="text-[0.8rem] text-red-50 font-bold">
                {errorProps.header}
              </p>
              <p className="text-[0.8rem] text-red-100 font-thin">
                {errorProps.explantaion}
              </p>
            </div>
            <Button
              onClick={() => dispatch(ErrorToasterClose())}
              variant="c"
              className="cursor-default bg-red-100 text-red-500"
            >
              kapat
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
