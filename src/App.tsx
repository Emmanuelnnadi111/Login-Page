import "./App.css";
import Login from "./components/registeration/Login";
import CreateAccount from "./components/registeration/CreateAccount";
import PersonalInformation from "./components/registeration/pages/PersonalInformation";
import Address from "./components/registeration/pages/Address";
import SuccessRegistration from "./components/registeration/pages/SuccessRegistration";
import MainDashboard from "./components/dashboard/MainDasboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/registeration/Infro";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={CreateAccount} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/address" Component={Address} />
        <Route
          exact
          path="/PersonalInformation"
          Component={PersonalInformation}
        />
        <Route
          exact
          path="/SuccessRegistration"
          Component={SuccessRegistration}
        />
        <Route exact path="/Info" Component={Info} />
        <Route exact path="/MainDashboard" Component={MainDashboard} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
