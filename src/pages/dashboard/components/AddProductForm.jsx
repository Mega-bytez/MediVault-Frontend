const AddProductForm = () => {
  return (
    <div className="h-[100%] mx-auto w-[100%] shadow-lg p-[40px] bg-white">
      <h4 className="lg:text-[2.2rem] font-medium text-[#7BBD36]">
        New Product
      </h4>
      <form className="flex items-start gap-y-[2rem] gap-x-[2.5rem]">
        <div id="column-1" className="flex flex-col gap-y-[2.5rem]">
          <fieldset className="border-solid border-[2px] p-[20px]">
            <legend className="Bold">Basic Information</legend>
            <div className="flex flex-col gap-y-[1.3rem]">
              <div className="flex flex-col gap-y-[0.3rem]">
                <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                  placeholder="Input Product name"
                />
              </div>
              <div className="flex flex-col gap-y-[0.3rem]">
                <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                  Brand Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                  placeholder="Input the brand name"
                />
              </div>
              <div className="flex flex-col gap-y-[0.3rem]">
                <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                  Category
                </label>
                <select
                  name="category"
                  id=""
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                >
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Over The Counter Medications (OTC)
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Vitamins and Supplements
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Personal Care Products
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Medical Equipment And Devices
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Lifestyle and Wellness
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
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
                  rows="3"
                  cols="35"
                  name="description"
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                  placeholder="Input Product description here"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="border-solid border-[2px] p-[20px]">
            <legend className="Bold">Pharmaceutical Information</legend>
            <div className="flex flex-col gap-y-[1.3rem]">
              <div className="flex flex-col gap-y-[0.3rem]">
                <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                  Dosage
                </label>
                <input
                  type="text"
                  name="dosage"
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                  placeholder="Input Product Dosage"
                />
              </div>
              <div className="flex flex-col gap-y-[0.3rem]">
                <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                  Strength
                </label>
                <input
                  type="text"
                  name="strength"
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                  placeholder="Input the product strength"
                />
              </div>
              <div className="flex flex-col gap-y-[0.3rem]">
                <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                  Quantity per Package
                </label>
                <input
                  type="text"
                  name="quantityPerPackage"
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                  placeholder="Input the quantity per Package"
                />
              </div>
              <div className="flex flex-col gap-y-[0.3rem]">
                <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                  Prescription Requirement
                </label>
                <select
                  name="prescription"
                  id=""
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                >
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Over The Counter
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Must Be Prescribed
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-y-[0.3rem]">
                <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                  Country of Origin
                </label>
                <input
                  type="text"
                  name="countryOfOrigin"
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                  placeholder="Country where the product is manufactured"
                />
              </div>
              <div className="flex flex-col gap-y-[0.3rem]">
                <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                  Required Patient
                </label>
                <select
                  name="patient"
                  id=""
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                >
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Adults
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Teenagers
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Children
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-y-[0.3rem]">
                <label
                  htmlFor="description"
                  className="text-[1rem] text-[#6a5a5a]"
                >
                  Common Symptoms Treated
                </label>
                <textarea
                  rows="3"
                  cols="35"
                  name="symptoms"
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                  placeholder="List of symptoms this product targets (e.g., 'Headache, muscle pain, arthritis')."
                />
              </div>
            </div>
          </fieldset>
        </div>
        <div id="column-2" className="flex flex-col gap-y-[2.5rem]">
          <fieldset className="border-solid border-[2px] p-[20px]">
            <legend className="Bold">Pricing and Stock Information</legend>
            <div className="flex flex-col gap-y-[1.3rem]">
              <div className="flex flex-col gap-y-[0.3rem]">
                <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                  Price {`(₵)`}
                </label>
                <input
                  type="number"
                  name="price"
                  step="0.1"
                  min="0.00"
                  className="border-[1px] w-[40%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                  placeholder="10.99"
                />
              </div>
              <div className="flex flex-col gap-y-[0.3rem]">
                <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                  Brand Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                  placeholder="Input the brand name"
                />
              </div>
              <div className="flex flex-col gap-y-[0.3rem]">
                <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                  Category
                </label>
                <select
                  name="category"
                  id=""
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                >
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Over The Counter Medications (OTC)
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Vitamins and Supplements
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Personal Care Products
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Medical Equipment And Devices
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
                    Lifestyle and Wellness
                  </option>
                  <option value="" className="text-[1rem] text-[#6a5a5a]">
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
                  rows="3"
                  cols="35"
                  name="description"
                  className="border-[1px] w-[100%] bg-[#fafafa] rounded-[5px] px-[10px] h-[35px]"
                  placeholder="Input Product description here"
                />
              </div>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
