import { Link, useNavigate } from "react-router-dom";
import pharmacist from "../assets/forms/pharmacist.png";
import { apiSignIn } from "../services/auth";
import { useState } from "react";
import Swal from "sweetalert2";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const formData = new FormData(event.target); // grabbing form data from form and storing it in variable formData

      // Build the `address` field
      // const address = JSON.stringify([
      //   {
      //     region: formData.get("region"),
      //     town: formData.get("town"),
      //     Street: formData.get("street"),
      //   },
      // ]);

      // formData.set("address", address); //replace the existing address fields

      // Log form data for debugging
      // for (let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }

      const response = await apiSignIn(formData);
      console.log("yy", response);

      Swal.fire({
        title: "Success!",
        text: "Your pharmacy has been successfully registered.",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/dashboard");
    } catch (error) {
      setIsLoading(false);

      Swal.fire({
        title: "Oops!... SignUp failed",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });

      console.log(error); // toast error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] h-auto py-[100px] bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h3 className="text-3xl font-bold mb-6 text-[#7BBD36]">
            Sign Up with MediVault
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Pharmacy Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Enter the name of your Pharmacy"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="licenseNumber"
                className="block text-sm font-medium text-gray-700"
              >
                License Number
              </label>
              <input
                id="licenseNumber"
                type="text"
                name="licenseNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Enter your license number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="registrationNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Registration Number
              </label>
              <input
                id="registrationNumber"
                type="text"
                name="registrationNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Enter your registration number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <input
                id="mobileNumber"
                type="number"
                name="mobileNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Enter your contact number. Eg. 0801234567"
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
            <div>
              <label
                htmlFor="profilePicture"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Picture (Storefront)
              </label>
              <input
                id="profilePicture"
                type="file"
                accept="image/*"
                name="profilePicture"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Upload profile picture"
              />
            </div>
            <div>
              <fieldset className="border-solid border-[2px] p-[20px] flex flex-col gap-y-[1.2rem]">
                <legend className="bold">Address Information</legend>
                <div>
                  <label htmlFor="region">Region</label>
                  <input
                    id="region"
                    type="text"
                    name="region"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                    placeholder="Greater Accra"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="town">Town</label>
                  <input
                    id="town"
                    type="text"
                    name="town"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                    placeholder="Trasacco"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="street">House No. & Street</label>
                  <input
                    id="street"
                    type="text"
                    name="street"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                    placeholder="14 Macroni st."
                    required
                  />
                </div>
              </fieldset>
            </div>
            <div>
              <fieldset className="border-solid border-[2px] p-[20px] flex flex-col gap-y-[1.2rem]">
                <legend className="bold">Socials</legend>
                <div>
                  <label htmlFor="region">Facebook</label>
                  <input
                    id="region"
                    type="text"
                    name="region"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                    placeholder="Greater Accra"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="town">Town</label>
                  <input
                    id="town"
                    type="text"
                    name="town"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                    placeholder="Trasacco"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="street">House No. & Street</label>
                  <input
                    id="street"
                    type="text"
                    name="street"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                    placeholder="14 Macroni st."
                    required
                  />
                </div>
              </fieldset>
            </div>
            <button
              type="submit"
              className="w-full text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium  bg-[#7BBD36]"
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
            <div className=" flex justify-center gap-x-2">
              <p>Already have an account?</p>
              <Link to="/login" title="Login">
                <span className="text-[#7BBD36] hover:underline">Login</span>
              </Link>
            </div>
          </form>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            src={pharmacist}
            alt="Sign Up Image"
            className="object-cover w-full h-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
