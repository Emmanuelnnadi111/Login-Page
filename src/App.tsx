import "./App.css";
import Login from "./components/registeration/Login";
import CreateAccount from "./components/registeration/CreateAccount";
import PersonalInformation from "./components/registeration/pages/PersonalInformation";
import Address from "./components/registeration/pages/Address";
import SuccessRegistration from "./components/registeration/pages/SuccessRegistration";
import MainDashboard from "./components/dashboard/MainDasboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/registeration/Infro";
import ShowMap from "./components/registeration/map/ShowMap";
function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
