import "./App.css";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import PersonalInformation from "./components/registeration/pages/PersonalInformation";
import Address from "./components/registeration/pages/Address";
import SuccessRegistration from "./components/registeration/pages/SuccessRegistration";
import MainDashboard from "./components/dashboard/MainDasboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/registeration/Infro";
import ShowMap from "./components/registeration/map/ShowMap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" Component={CreateAccount} />
          <Route path="/login" Component={Login} />
          <Route path="/address" Component={Address} />
          <Route path="/PersonalInformation" Component={PersonalInformation} />
          <Route path="/SuccessRegistration" Component={SuccessRegistration} />
          <Route path="/Info" Component={Info} />
          <Route path="/MainDashboard" Component={MainDashboard} />
          <Route path="/showMap" Component={ShowMap} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
