import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Loading } from "./components/loading/loading";
import { Toast } from "./components/toast/toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
       <Toast/>
      <Loading />
    </>
  );
}

export default App;
