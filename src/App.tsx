import React from "react";
import { AuthenticationProvider } from "./authentication/AuthenticationProvider";
import { IsPhoneProvider } from "./contexts/IsPhoneContext";

const App: React.FC = (props) => {
  return (
    <IsPhoneProvider>
      <AuthenticationProvider />
    </IsPhoneProvider>
  );
};

export default App;
