import "./App.css";
import Login from "./components/registeration/Login";
import CreateAccount from "./components/registeration/CreateAccount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from "./components/registeration/pages/Address";
import PersonalInformation from "./components/registeration/pages/PersonalInformation";
import SuccessRegistration from "./components/registeration/pages/SuccessRegisteration";
import MainDashboard from "./components/dashboard/MainDasboard";
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
          path="/SuccessRegisteration"
          Component={SuccessRegistration}
        />
        <Route exact path="/MainDasboard" Component={MainDashboard} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
