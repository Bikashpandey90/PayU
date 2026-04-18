import { AuthContext } from "@/context/auth-context";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import authSvc, { UserType } from "@/services/auth.service";
import { InputType, TextInputField } from "@/components/formFields";
import { OTPModal } from "@/components/otpModal";
import { LoaderCircle } from "lucide-react";

interface LoginData {
  email: string;
  password: string;
}

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext) as {
    loggedInUser: any;
    setLoggedInUser: Function;
  };
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [email, setEmail] = useState<string>("user@example.com");
  const [loginData, setLoginData] = useState<LoginData | null>(null);

  const navigate = useNavigate();

  const LoginDTO = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Confirm Password is required"),
  });

  const [loading, setloading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginDTO) });
  // TOdo : define types
  const submitForm = async (data: {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
  }) => {
    try {
      setloading(true);
      let payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      };
      let response: UserType = await authSvc.register(payload);

      setEmail(data.email);
      setIsOtpModalOpen(true);
      setLoggedInUser(response);

      setLoginData({
        email: data.email,
        password: data.password,
      });

      // toast.success("Welcome to your dashboard");
      //redirect to user dashboard
    } catch (exception) {
      console.log(exception);
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
    } catch (exception) {
      console.log(exception);
    }
    setTimeout(() => {
      setIsOtpModalOpen(false);
    }, 5000);
  };

  const handleResendOtp = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (exception) {
      console.log(exception);
    }
  };

  console.log(loggedInUser);
  console.log(loginData);

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
            alt="ECA Nepal Logo"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 py-8 px-6 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <a
              href="/"
              className="mb-10 text-2xl gap-3 flex font-extrabold tracking-tight text-[#3F95EC] dark:text-[#2e5bff]"
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
              Sign Up to your Account
            </h4>
            <p className="mb-8 text-gray-600 text-lg">
              Welcome back! please enter your detail
            </p>
          </div>

          <form onSubmit={handleSubmit(submitForm)}>
            <div className="relative mb-4">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Icon icon="mage:user" className="text-xl" />
              </div>
              <TextInputField
                name="name"
                type={InputType.TEXT}
                placeholder="Name"
                control={control}
                errMsg={errors?.name?.message as string}
              />
            </div>

            <div className="relative mb-4">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Icon icon="mage:email" className="text-xl" />
              </div>
              <TextInputField
                name="email"
                type={InputType.EMAIL}
                placeholder="Email"
                control={control}
                errMsg={errors?.email?.message as string}
              />
            </div>

            <div className="relative mb-5">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Icon icon="solar:lock-password-outline" className="text-xl" />
              </div>
              <TextInputField
                name="password"
                type={showPassword ? InputType.TEXT : InputType.PASSWORD}
                placeholder="Password"
                control={control}
                errMsg={errors?.password?.message as string}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon
                  icon={showPassword ? "ri:eye-off-line" : "ri:eye-line"}
                  className="text-xl"
                />
              </button>
            </div>

            <div className="relative mb-5">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Icon icon="solar:lock-password-outline" className="text-xl" />
              </div>
              <TextInputField
                name="confirmPassword"
                type={showPassword ? InputType.TEXT : InputType.PASSWORD}
                placeholder="Confirm Password"
                control={control}
                errMsg={errors?.confirmPassword?.message as string}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon
                  icon={showPassword ? "ri:eye-off-line" : "ri:eye-line"}
                  className="text-xl"
                />
              </button>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Your password must have at least 8 characters
            </p>

            <div className="mb-8">
              <div className="flex items-start gap-3">
                <input
                  className="mt-1 w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  type="checkbox"
                  id="terms"
                />
                <label className="text-sm text-gray-600" htmlFor="terms">
                  By creating an account means you agree to the{" "}
                  <NavLink to="#" className="text-primary hover:underline">
                    Terms & Conditions
                  </NavLink>{" "}
                  and our{" "}
                  <NavLink to="#" className="text-primary hover:underline">
                    Privacy Policy
                  </NavLink>
                </label>
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-primary hover:bg-primary text-white font-medium py-4 px-6 rounded-xl text-sm transition-colors"
            >
              {loading ? (
                <LoaderCircle className="flex justify-self-center h-5 w-5 animate-spin" />
              ) : (
                "Sign Up"
              )}
            </button>

            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-50 px-4 text-gray-500">
                  Or sign up with
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
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign In
                </NavLink>
              </p>
            </div>
          </form>

          <OTPModal
            resend={false}
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

export default SignInPage;
