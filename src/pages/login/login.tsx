"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import authSvc, { UserType } from "@/services/auth.service";
import { AuthContext } from "@/context/auth-context";
import { InputType, TextInputField } from "@/components/formFields";
import { OTPModal } from "@/components/otpModal";
import { useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { AccountContext } from "@/context/account-context";

interface LoginData {
  email: string;
  password: string;
}

const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext) as {
    loggedInUser: any;
    setLoggedInUser: Function;
  };
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [loginData, setLoginData] = useState<LoginData | null>(null);
  const { getAccountInfo } = useContext(AccountContext) as {
    getAccountInfo: Function;
  };

  const LoginDTO = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginDTO) });
  // TOdo : define types
  const submitForm = async (data: { email: string; password: string }) => {
    try {
      setloading(true);

      setEmail(data.email);
      let payload = {
        email: data.email,
        password: data.password,
      };

      setLoginData(payload);
      let response: UserType = await authSvc.login(payload);
      console.log("Check Response :", response);
      setLoggedInUser(response);
      if (response) {
        navigate("/");
      }
      getAccountInfo();
    } catch (exception) {
      const err = exception as any;
      console.log(exception);
      if (err?.data?.status === "USER_NOT_ACTIVE") {
        setIsOtpModalOpen(true);
      }
    } finally {
      setloading(false);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    try {
      await authSvc.activateUserAccount({
        otp: otp,
        email: email,
      });
      try {
        let response: UserType = await authSvc.login(loginData as LoginData);
        setLoggedInUser(response);
        navigate("/");
      } catch (exception) {
        console.log(exception);
      }
    } catch (exception) {
      console.log(exception);
    }
    setTimeout(() => {
      setIsOtpModalOpen(false);
    }, 5000);
  };

  const handleResendOtp = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("OTP Resent to:", email);
    alert("OTP resent successfully!");
  };

  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 flex flex-wrap">
      <div className="hidden lg:block lg:w-1/2">
        <div className="flex items-center flex-col h-full justify-center ">
          <img
            src="/images/auth.png"
            alt=" ECA Nepal Logo"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 py-8 px-6 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <a
              href="/"
              className="mb-4 text-2xl gap-3 flex font-extrabold tracking-tight text-[#3F95EC] dark:text-[#2e5bff]"
            >
              <svg
                width="40"
                height="auto"
                viewBox="0 0 50 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-primary"
              >
                <path
                  d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                  stopColor="#000000"
                ></path>
                <path
                  d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                  stopColor="#000000"
                ></path>
              </svg>
              <span className="font-poppins">PayU</span>
            </a>
            <h4 className="mb-3 text-2xl font-semibold text-gray-900">
              Sign In to your Account
            </h4>
            <p className="mb-8 text-gray-600 text-lg">
              Welcome back! please enter your detail
            </p>
          </div>

          <form onSubmit={handleSubmit(submitForm)}>
            <div className="relative mb-4">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Icon icon="mage:email" className="text-xl" />
              </div>
              <TextInputField
                type={InputType.EMAIL}
                name="email"
                control={control}
                placeholder="Email"
                errMsg={errors?.email?.message as string}
              />
            </div>

            <div className="relative mb-5">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Icon icon="solar:lock-password-outline" className="text-xl" />
              </div>
              <TextInputField
                type={showPassword ? InputType.TEXT : InputType.PASSWORD}
                name="password"
                control={control}
                placeholder="Password"
                errMsg={errors?.password?.message as string}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon
                  icon={showPassword ? "ri:eye-off-line" : "ri:eye-line"}
                  className="text-xl"
                />
              </button>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center gap-2">
                <div className="flex items-center">
                  <input
                    className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 mr-2"
                    type="checkbox"
                    id="remember"
                  />
                  <label className="text-sm text-gray-600" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <NavLink
                  to="#"
                  className="text-primary font-medium text-sm hover:underline"
                >
                  Forgot Password?
                </NavLink>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-center  text-white font-medium py-4 px-6 rounded-xl text-sm transition-colors mt-8"
            >
              {loading ? (
                <LoaderCircle className="flex justify-self-center h-5 w-5 animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>

            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-50 px-4 text-gray-500">
                  Or sign in with
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                className="flex-1 font-semibold text-gray-700 py-4 px-6 border border-gray-200 rounded-xl text-sm flex items-center justify-center gap-3 hover:bg-blue-50 transition-colors"
              >
                <Icon
                  icon="ic:baseline-facebook"
                  className="text-primary text-xl"
                />
                Facebook
              </button>
              <button
                type="button"
                className="flex-1 font-semibold text-gray-700 py-4 px-6 border border-gray-200 rounded-xl text-sm flex items-center justify-center gap-3 hover:bg-blue-50 transition-colors"
              >
                <Icon icon="logos:google-icon" className="text-xl" />
                Google
              </button>
            </div>

            <div className="mt-8 text-center text-sm">
              <p className="mb-0 text-gray-600">
                Don't have an account?{" "}
                <NavLink
                  to="/sign-in"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign Up
                </NavLink>
              </p>
            </div>
          </form>

          <OTPModal
            resend={true}
            isOpen={isOtpModalOpen}
            email={email}
            onVerify={handleVerifyOtp}
            onResend={handleResendOtp}
          />
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
