import PersonalInformation from "./registeration/Address.jsx";
import AddressTwo from "./registeration/AddressTwo.jsx";
import CreateAccount from "./registeration/CreateAccount.js";

const Container = () => {
  return (
    <div className="w-screen h-screen bg-slate-50 font-Commissioner flex items-center justify-center">
      <AddressTwo />
      {/* <Address /> */}
      {/* <PersonalInformation />
      <CreateAccount /> */}
    </div>
  );
};

export default Container;
