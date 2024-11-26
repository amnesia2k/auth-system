import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Auth from "./Auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import WelcomePage from "./components/WelcomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LandingPage />} />
      <Route path="auth" element={<Auth />} />
      <Route path="login-auth" element={<Login />} />
      <Route path="signup-auth" element={<Signup />} />
      <Route path="success" element={<WelcomePage />} />
    </Route>
  )
);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
