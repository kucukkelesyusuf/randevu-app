import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { OK, Pending } from "../slice/UISlice";
import { sleep } from "../sleep";

export const useAuth = () => {
  const [token, setToken] = useState();
  const dispatch = useDispatch();

  const LoginPersonel = async (
    email: string,
    password: string,
    captcha: string,
    sessionId: string
  ) => {
    try {
      dispatch(Pending());
      sleep(1000);
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/auth/personel/login`,
        {
          email,

          password,

          captcha,

          sessionId,
        }
      );
      dispatch(OK());
      return {
        error: {},
        data: data,
      };
    } catch (error: any) {
      dispatch(OK());
      
      return {
        error: error.response.data,
        data: {},
      };
    }
  };

  return {
    token,
    LoginPersonel,
  };
};
