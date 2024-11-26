import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10">
      <h1 className="text-3xl font-bold">Authentication System</h1>
      <Button>
        <Link to="/auth">Get Started</Link>
      </Button>
    </div>
  );
};

export default LandingPage;
