import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { Button } from "./ui/button";
import { useState } from "react";
import { DotLoader } from "react-spinners";

const WelcomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      toast("User logged out successfully");
      setTimeout(() => {
        navigate("/login-auth");
      }, 3000);
    } catch (error) {
      toast.error("Failed to log out, please try again later");
      console.error("Error signing out:", error);
    } 
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen text-center">
      <Toaster richColors position="top-right" />
      <h1 className="text-3xl font-bold">
        Welcome to the Authentication System
      </h1>
      <p className="text-lg font-medium">
        This is a simple authentication system using React and Google Firebase.{" "}
        <br />
        You have been successfully onboarded!!
      </p>
      <Button onClick={handleLogout} disabled={isLoading}>
        {isLoading ? (
          <>
            <DotLoader size={16} color="#000000" /> Logging Out...
          </>
        ) : (
          "Logout"
        )}
      </Button>
    </div>
  );
};

export default WelcomePage;
