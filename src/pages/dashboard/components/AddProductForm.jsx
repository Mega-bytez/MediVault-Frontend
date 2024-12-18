import { useEffect } from "react";
import { apiAddProduct } from "../../../services/products";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddProductForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      // const response = await apiAddProduct(formData);

      // const name = formData.get("name");
      // const brandName = formData.get("brandName");
      // const manufacturer = formData.get("manufacturer");
      // const category = formData.get("category");
      // const description = formData.get("description");
      // const dosage = formData.get("dosage");
      // const strength = formData.get("strength");
      // const quantityPerPackage = formData.get("quantityPerPackage");
      // const prescriptionRequirements = formData.get("prescriptionRequirements");
      // const countryOfOrigin = formData.get("countryOfOrigin");
      // const patient = formData.get("patient");
      // const symptoms = formData.get("symptoms");
      // const price = Number(formData.get("price"));
      // const stockQuantity = Number(formData.get("stockQuantity"));
      // const expiryDate = formData.get("expiryDate");
      // const precautions = formData.get("precautions");
      // const sideEffect = formData.get("sideEffect");
      // const storageInstruction = formData.get("storageInstruction");

      // const payload = {
      //   name,
      //   brandName,
      //   manufacturer,
      //   category,
      //   description,
      //   dosage,
      //   strength,
      //   quantityPerPackage,
      //   prescriptionRequirements,
      //   countryOfOrigin,
      //   patient,
      //   symptoms,
      //   price,
      //   stockQuantity,
      //   expiryDate,
      //   precautions,
      //   sideEffect,
      //   storageInstruction,
      // };

      const imageFiles = formData.getAll("image"); // Gets all files from the 'image' field
      const thumbImage = formData.get("thumbImage"); // Gets the single file from 'thumbImage'

      // Remove empty fields if no files were provided
      if (imageFiles.length === 0 || !imageFiles[0]) {
        formData.delete("image"); // Remove the 'image' field if it's empty
      }

      if (!thumbImage) {
        formData.delete("thumbImage"); // Remove the 'thumbImage' field if it's empty
      }

      console.log(event.target);
      const response = await apiAddProduct(formData);

      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Product Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dashboard");

      // for (let [key, value] of formData.entries()) {
      //   console.log(`${key}: ${value}`);
      // }      console.log(response);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Failed to Add Product",
        text: "An error occurred while posting the ad. Please try again.",
      });
    }
  };

  return (
    <div className="h-[100%] mx-auto w-[100%] shadow-lg p-[40px] bg-white flex flex-col gap-y-[3rem]">
      <h4 className="lg:text-[2.2rem] font-medium text-[#7BBD36]">
        Add New Product
      </h4>
      <form onSubmit={handleSubmit}>
        <div
          id="inner-container"
          className="lg:flex items-start lg:gap-y-[2rem] lg:gap-x-[2.5rem] md:flex"
        >
          <div id="column-1" className="w-[49%] flex flex-col gap-y-[2.5rem]">
            {/* Fieldset 1 */}
            <fieldset className="border-solid border-[2px] p-[20px]">
              <legend className="Bold">Basic Information</legend>
              <div className="flex flex-col gap-y-[1.3rem]">
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                    Product Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="Input Product name"
                  />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="brandName"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Brand Name
                  </label>
                  <input
                    id="brandName"
                    type="text"
                    name="brandName"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="Input the product's brand name"
                  />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="manufacturer"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Manufacturer
                  </label>
                  <input
                    id="manufacturer"
                    type="text"
                    name="manufacturer"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="Input the product's brand name"
                  />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="category"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                  >
                    <option
                      value=""
                      disabled
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Select an option
                    </option>
                    <option
                      value="Over-the-Counter(Medications)"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Over The Counter Medications (OTC)
                    </option>
                    <option
                      value="Vitamins and Supplements"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Vitamins and Supplements
                    </option>
                    <option
                      value="Personal Care Products"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Personal Care Products
                    </option>
                    <option
                      value="Medical Equipment And devices"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Medical Equipment And Devices
                    </option>
                    <option
                      value="Lifestyle and Wellness"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Lifestyle and Wellness
                    </option>
                    <option
                      value="Sexual Health"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Sexual Health
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="description"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="3"
                    cols="35"
                    name="description"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] pt-[5px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="Input Product description here"
                  />
                </div>
              </div>
            </fieldset>

            {/* Fieldset 2 */}
            <fieldset className="border-solid border-[2px] p-[20px]">
              <legend className="Bold">Pharmaceutical Information</legend>
              <div className="flex flex-col gap-y-[1.3rem]">
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="dosage"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Dosage
                  </label>
                  <input
                    id="dosage"
                    type="text"
                    name="dosage"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="Input Product Dosage"
                  />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="strength"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Strength
                  </label>
                  <input
                    id="strength"
                    type="text"
                    name="strength"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="Input the product strength"
                  />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="quantityPerPackage"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Quantity per Package
                  </label>
                  <input
                    id="quantityPerPackage"
                    type="text"
                    name="quantityPerPackage"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="Input the quantity per Package"
                  />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="prescriptionRequirements"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Prescription Requirement
                  </label>
                  <select
                    name="prescriptionRequirements"
                    id="prescriptionRequirements"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                  >
                    <option
                      value=""
                      disabled
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Select an option
                    </option>
                    <option
                      value="Over-the-Counter"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Over The Counter
                    </option>
                    <option
                      value="Prescribed"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Prescribed
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="countryOfOrigin"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Country of Origin
                  </label>
                  <input
                    id="countryOfOrigin"
                    type="text"
                    name="countryOfOrigin"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="Country where the product is manufactured"
                  />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="patient"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Required Patient
                  </label>
                  <select
                    name="patient"
                    id="patient"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                  >
                    <option
                      value=""
                      disabled
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Select an option
                    </option>
                    <option
                      value="adult"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Adults
                    </option>
                    <option
                      value="Teenage"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Teenagers
                    </option>
                    <option
                      value="children"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Children
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="symptoms"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Common Symptoms Treated
                  </label>
                  <textarea
                    id="symptoms"
                    rows="3"
                    cols="35"
                    name="symptoms"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] pt-[5px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="List of symptoms this product targets (e.g., 'Headache, muscle pain, arthritis')."
                  />
                </div>
              </div>
            </fieldset>
          </div>
          <div id="column-2" className="w-[49%] flex flex-col gap-y-[2.5rem]">
            {/* Fieldset 3 */}
            <fieldset className="border-solid border-[2px] p-[20px]">
              <legend className="Bold">Pricing and Stock Information</legend>
              <div className="flex flex-col gap-y-[1.3rem]">
                <div id="price-stock" className="flex justify-between">
                  <div className=" w-[48%] flex flex-col gap-y-[0.3rem]">
                    <label
                      htmlFor="price"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Price {`(₵)`}
                    </label>
                    <input
                      id="price"
                      type="text"
                      name="price"
                      step="0.1"
                      min="0.00"
                      className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                      placeholder="10.99"
                    />
                  </div>
                  <div className=" w-[48%] flex flex-col gap-y-[0.3rem]">
                    <label
                      htmlFor="stockQuantity"
                      className="text-[1rem] text-[#6a5a5a]"
                    >
                      Stock Quantity
                    </label>
                    <input
                      id="stockQuantity"
                      type="text"
                      name="stockQuantity"
                      min="0.00"
                      className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                      placeholder="200"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="expiryDate"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Expiry Date
                  </label>
                  <input
                    id="expiryDate"
                    type="date"
                    name="expiryDate"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="Input the brand name"
                  />
                </div>
                
              </div>
            </fieldset>

            {/* Fieldset 4 */}
            <fieldset className="border-solid border-[2px] p-[20px]">
              <legend className="Bold">Legal and Safety Information</legend>
              <div className="flex flex-col gap-y-[1.3rem]">
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="precautions"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Warnings and Safety Information
                  </label>
                  <textarea
                    rows="3"
                    cols="35"
                    id="precautions"
                    name="precautions"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] pt-[5px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="Any critical safety or usage warnings (eg. 'Do not exceed recommended dose')."
                  />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="sideEffect"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Side Effects
                  </label>
                  <textarea
                    id="sideEffect"
                    rows="3"
                    cols="35"
                    name="sideEffect"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] pt-[5px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="List of potential side effects (eg. 'Nausea, dizziness')."
                  />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="storageInstruction"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Storage Instructions
                  </label>
                  <textarea
                    id="storageInstruction"
                    rows="3"
                    cols="35"
                    name="storageInstruction"
                    className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] pt-[5px] h-[35px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                    placeholder="Details on how to store the product safely (eg. 'Store in a cool, dry place')."
                  />
                </div>
              </div>
            </fieldset>

            {/* Fleidset 5 */}
            <fieldset className="border-solid border-[2px] p-[20px]">
              <legend className="Bold">Product Images</legend>
              <div className="flex flex-col gap-y-[1.3rem]">
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label htmlFor="image" className="text-[1rem] text-[#6a5a5a]">
                    Product Image(s) Upload
                  </label>
                  <input
                    id="image"
                    type="file"
                    name="image"
                    className=" w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] pt-[5px] h-[35px] "
                    placeholder="Upload your Product images here"
                    multiple
                  />
                </div>
                <div className="flex flex-col gap-y-[0.3rem]">
                  <label
                    htmlFor="thumbImage"
                    className="text-[1rem] text-[#6a5a5a]"
                  >
                    Thumbnail Upload. (Single file)
                  </label>
                  <input
                    id="thumbImage"
                    type="file"
                    name="thumbImage"
                    className=" w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] pt-[5px] h-[35px] "
                    placeholder="Upload your Product images here"
                  />
                </div>
              </div>
            </fieldset>
            <div id="post-btn" className="flex justify-center">
              <button
                type="submit"
                className="bg-[#7BBD36] w-[200px] py-[10px] text-white hover:scale-[1.05] transition-transform duration-300 ease-in-out"
              >
                Post Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
