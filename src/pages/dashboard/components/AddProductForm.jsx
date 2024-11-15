const AddProductForm = () => {
  return (
    <div className="h-[100%] mx-auto w-[100%] shadow-lg p-[40px] bg-white">
      <h4 className="lg:text-[2.2rem] font-medium text-[#7BBD36]">
        New Product
      </h4>
      <form className="flex items-center gap-y-[2rem]">
        <div id="column-1" className="flex flex-col gap-y-[2.5rem]">
          <fieldset className="border-solid border-[2px] p-[20px]">
            <legend className="Bold">Basic Information</legend>
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
                placeholder="Input Product name"
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
              <input type="text" name="name" placeholder="Input Product name" />
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
                placeholder="Input Product name"
              />
            </div>
          </fieldset>
          <fieldset className="border-solid border-[2px] p-[20px]">
            <legend className="Bold">Pharmaceutical Information</legend>
            <div className="flex flex-col gap-y-[0.3rem]">
              <label htmlFor="name" className="text-[1rem] text-[#6a5a5a]">
                Dosage
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
                placeholder="Input Product name"
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
              <input type="text" name="name" placeholder="Input Product name" />
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
                placeholder="Input Product name"
              />
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
