import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Loading } from "./components/loading/loading";
import { Toast } from "./components/toast/toast";
import { DoctorPage } from "./pages/DoctorPage";
import { PersonelPage } from "./pages/PersonelPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/doctor" element={<DoctorPage/>}  >
             <Route path="patient" element={<h2>Merhaba</h2>} />
             <Route path="patient/que" element={<h2>Hasta Sırası</h2>} />
             <Route path="patient/anaylsis" element={<h2>Hasta  Analiz</h2>} />
        </Route>
        <Route path="/personel" element={<PersonelPage/>} >
        
        </Route>
       </Routes>
       <Toast/>
      <Loading />
    </>
  );
}

export default App;
