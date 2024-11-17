import { Link, useNavigate } from "react-router-dom";
import padlock from "../assets/forms/padlock.jpg";
import { apiClient } from "../services/config";
import { apiLogin } from "../services/auth";
import Swal from "sweetalert2";
import { useState } from "react";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const reRoute = useNavigate();

    const handleSubmit = async (event)=> {
        try {
          setIsLoading(true);
          event.preventDefault(); //Preventing the page from reloading after clicking submit.
          const formData = new FormData(event.target); //Grabbing all the data from the form and storing it in a variable called formData.

          //Preparing the payload to be sent as an object.
          const email = formData.get("email");
          const password = formData.get("password");

          //Passing the payload to the api call to be posted... And then storing the response in a variable called response
          const response = await apiLogin({ email, password });
            console.log(response);

            if (response.status === 200) {
              localStorage.setItem("token", response.data.accessToken)
            }

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Login Successful",
              showConfirmButton: false,
              
              timer: 1500,
            });

            reRoute("/dashboard");
        } catch (error) {
          setIsLoading(false);
          if (error.status === 404) {
            Swal.fire({
              icon: "error",
              title: "Login Failed!!",
              text: "User doesn't exist",
              confirmButtonColor: "#7BBD36",
            });
          }
          
            console.log(error);
        } finally {
          setIsLoading(false);
        }
    
    }

  return (
    <div className="flex items-center justify-center min-h-[90vh] h-auto py-[100px] bg-[#fafafa]">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <div className="w-full md:w-1/2 px-12 py-12 space-y-8">
          <h3 className="text-3xl font-bold mb-6 text-[#7BBD36]">
            Login
            <br />
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div
                to=""
                className="text-sm text-gray-700 flex items-center gap-x-1"
              >
                <input type="checkbox" name="checkbox" />
                <label htmlFor="checkbox">Remember me</label>
              </div>
              <Link to="" className="text-sm text-[#7BBD36] hover:underline">
                Forgot your password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#7BBD36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLoading ? "Signing In" : "Log In"}
            </button>
            <div className="flex items-center justify-center gap-x-2">
              <p>Don&apos;t have an account?</p>
              <Link
                to="/sign-up"
                className="text-md text-[#7BBD36] hover:underline"
              >
                Register here
              </Link>
            </div>
          </form>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            src={padlock}
            alt="Lock-image"
            className="object-cover w-full h-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
