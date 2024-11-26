import { Link, useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Card } from "./ui/card";
import { toast, Toaster } from "sonner";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { loginErrorMessage } from "@/utils/errorMessages";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const { email, password } = data;
      // Simulate API request to create a new user
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(`User logged in successfully`);
      setTimeout(() => {
        navigate("/success");
      }, 3000);
    } catch (error) {
      console.error(error);
      const loginError = loginErrorMessage(error.code);
      toast.error(loginError);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster richColors position="top-right" />
      <Card className="w-full md:w-[60%] py-10 mx-5 flex flex-col gap-5">
        <h1 className="text-center text-2xl font-bold">Login to continue</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[90%] mx-auto flex flex-col gap-[10px]"
        >
          <div>
            <Label htmlFor="email" className="text-lg font-medium">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="focus:border-none"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600 text-muted-foreground">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <Label htmlFor="password" className="text-lg font-medium">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="focus:border-none"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 12,
                  message: "Password must be at least 12 characters long",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-600 text-muted-foreground">
                {errors.password.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="flex justify-center items-center w-[85%] md:w-[60%] mx-auto"
          >
            {isLoading ? (
              <>
                <DotLoader size={16} color="#000000" /> Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
          <h1 className="text-black font-medium text-center md:text-base text-xs">
            <span className="text-muted-foreground font-normal">
              Don&apos;t have an account?
            </span>{" "}
            <Link to="/signup-auth" className="underline">
              Sign Up
            </Link>
          </h1>
        </form>
      </Card>
    </div>
  );
};

export default Login;
