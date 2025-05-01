import axios, { Axios, AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { ErrorToaster } from "../slice/ToastSlice";
import { useState } from "react";
import { sleep } from "../sleep";




export const useCaptcha = () => {

    const dispatch = useDispatch();

    const [loading,setLoading] = useState(false);

    const getSession = async()=>{
        
        try{

            setLoading(true);
            await sleep(1200);
                
        const {data} = await axios.get(`${import.meta.env.VITE_APP_API_URL}/captcha/session`)
            setLoading(false);

        return data.data.session_id
        
    }catch(error){
        
        dispatch(ErrorToaster({
            againButton: false,
            AgainAction: function (): void {
                throw new Error("Function not implemented.");
            },
            header: "Sistem Hatası",
            closeButton: true,
            explantaion: "Sistemlerimiz Şu anda Bakımdadır. Anlayışınız için Teşekkür ederiz."
        }))

        }
    }

    const sessionControl =async (session:string)=>{

        try{
          await axios.get(`${import.meta.env.VITE_APP_API_URL}/captcha/session/control/${session}`)
            
            return true;
            
        }catch(error){
            
            return false;
    
            }

    }

    const getSessionImage = async(session:string)=>{

        try{
            const {data} = await axios.get(`${import.meta.env.VITE_APP_API_URL}/captcha/image/${session}`)
              
              return data.data.image
              
          }catch(error){
              
              return "Error";
      
              }

    }
    

    return {
      getSession,sessionControl,getSessionImage,loading
  }
}
