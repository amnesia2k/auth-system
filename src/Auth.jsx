import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

const Auth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div>
      {isAuthenticated ? (
        <Login onSwitch={() => setIsAuthenticated(false)} />
      ) : (
        <Signup onSwitch={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
};

export default Auth;
