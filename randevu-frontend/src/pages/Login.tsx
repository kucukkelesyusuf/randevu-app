import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "../components/button/button";
import Card from "../components/card/card";
import { Header } from "../components/Header/header";
import { Input } from "../components/input/input";
import { Label } from "../components/label/label";
import { Modal } from "../components/modal/modal";
import { Small } from "../components/small/small";
import { OK, Pending } from "../slice/UISlice";
import { useDispatch } from "react-redux";
import logoDaire from "../assets/logo-2.png";
import { ErrorToaster, NotificateToaster} from "../slice/ToastSlice";
import { Captcha } from "../components/captcha/captcha";
import { useCaptcha } from "../hooks/useCaptcha";
import { useAuth } from "../hooks/useAuth";
export const Login = () => {

  const {getSession,getSessionImage,sessionControl,loading}= useCaptcha();

  const session = useRef<string>('');
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [image,setImage] = useState('');
  const [captcha,setCaptcha] = useState("");
  const [isShowModal, setShowModal] = useState(false);


  
  const getSessionKey = async()=>{
    session.current = await getSession();
    setImage(await getSessionImage(session.current));
  }

  const sessionControlInterval = async ()=>{

    setTimeout(async()=>{

    const isActive = await sessionControl(session.current);

    if(!isActive){
         await getSessionKey();
    }

    sessionControlInterval();
    },15000);

  }
  
  useEffect(()=>{
    getSessionKey();
    (async()=>{
      await sessionControlInterval();

    })()
  },[])


  const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

  useEffect(() => {
    if (emailRegex.test(email) && password || captcha !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password,captcha]);

  const {LoginPersonel} = useAuth();

  const HandleForm =async (e: FormEvent) => {
    e.preventDefault();
    
    if(disabled) return

    setDisabled(true);
    const data = await LoginPersonel(email,password,captcha,session.current);

    dispatch(NotificateToaster({
      header: "Bilgilendirme",
      closeButton: false,
      explantaion: data.error.message
    }))

  };

  return (
    <div className="w-[100%] h-[100%] overflow-hidden">
      <div className="w-[100%] h-[100vh] bg-slate-100 p-4 flex flex-col space-y-4 items-center justify-center bg-image">
        <img className="max-w-[250px]" src={logoDaire} alt="logo" />
        <Card className="h-[50vh] max-w-[380px] flex flex-col space-y-4 justify-center">
          <form
            className="flex flex-col   space-y-4 pl-12 pr-12"
            onSubmit={(e) => HandleForm(e)}
          >
            <Header className="text-center"> Doktor ve Personel Girişi </Header>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col">
                  <Label> Email</Label>
                  <Small>Emailinizi girin</Small>
                </div>
                <Input
                  value={email}
                  setValue={(e: string) => setEmail(e)}
                  placeHolder="Email"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col">
                  <Label> Şifre</Label>
                  <Small>Şifrenizi girin</Small>
                </div>
                <Input
                  value={password}
                  setValue={(e: string) => setPassword(e)}
                  placeHolder="Şifreniz"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col">
                  <Label>İnsan Doğrulaması</Label>
                  <Small>Ekranda Gördüğünüz Rakam veya Harfleri girin</Small>
                </div>
                <div className="grid grid-cols-2 gap-2">
                <Captcha image={image} refreshSessionHandle={()=>getSessionKey()} refreshSession={loading} />
                <Input
                  value={captcha}
                  setValue={(e: string) => setCaptcha(e)}
                  placeHolder="Cevap"
                />
                </div>
              </div>
            </div>
            <Button disabled={disabled} variant="blue" type="submit">
              {" "}
              Giriş{" "}
            </Button>
          </form>
        </Card>
      </div>
      <Modal open={isShowModal}>
        <div className="flex flex-col space-y-3 pt-4 pb-4 pl-8 pr-8">
          <Header className="">Uyarı</Header>
          <p className="text-gray-600 font-thin">
            {" "}
            Hesabınız Yasalar Gereğince Bloke Edilip Hakkınızda Yaptığınız Yasal
            Olmayan İşlem yapztığınızdan dolayı Hukiki İşlem Başlatılmıştır.{" "}
          </p>
          <Button
            className="self-end"
            onClick={() => setShowModal(false)}
            variant="black"
          >
            Kapat
          </Button>
        </div>
      </Modal>
     
    </div>
  );
};
