// src/components/LoginPage.js
// import { useState } from "react";
// import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import RgLogo from "../../assets/RG-logo2.png";
const Login = () => {
  const handleLogin = () => {
    // Implement your login logic here based on the selected type
    console.log(`Logging in`);
  };

  return (
    <section className="w-full h-screen ">
      <img
        className="h-24  top-0 left-0 rounded-lg"
        src={RgLogo}
        alt="Ranker Guide Logo"
      />
      <div className="grid grid-cols-1">
        <div className="flex items-center justify-center px-4  sm:px-6 ">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Login
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&#x27;t have an account?{" "}
              <Link
                to={'/register'}
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <form action="#" method="POST" className="mt-8 md:w-[28rem]">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
           
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Login;
