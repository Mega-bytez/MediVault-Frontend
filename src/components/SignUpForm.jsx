import { Link } from "react-router-dom";
import pharmacist from "../assets/forms/pharmacist.png";
import { apiSignIn } from "../services/auth";

const SignUpForm = () => {

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            const formData = new FormData(event.target);// grabbing form data from form and storing it in variable formData
            
            const response = await apiSignIn(formData)
            console.log('yy',response);

        } catch (error) {
            // alert(error;
            console.log(error);
        }
    }

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
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="Email"
                type="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="mobileNumber"
                type="tel"
                pattern="[0-9]{10}"
                name="mobileNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Enter your mobile number. Eg. 0801234567"
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
                Profile Picture
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
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                type="date"
                
                name="dateOfBirth"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7BBD36] focus:border-[#7BBD36] sm:text-sm"
                placeholder="Enter your date of birth. Eg. 0801234567"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-[#7BBD36]"
            >
              Sign Up
            </button>
            <div className=" flex justify-center gap-x-2" >
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
