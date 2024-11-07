

const Stores = () => {
  return (
    <section className="lg:w-[100vw] lg:min-h-[90vh] lg:h-auto">
        <div id="alignment-container" className="lg:w-[80%] mx-auto lg:h-[300px] lg:flex lg:flex-col lg:gap-y-[2.5rem]">
            <div className="lg:flex lg:justify-between lg:items-center">
            <h3 className="lg:text-[2.4rem] lg:font-medium">Pharmacies</h3>
            <h6>See More</h6>
            </div>
            <div id="stores-container" className="flex flex-wrap justify-center gap-x-[1.5rem] gap-y-[1.5rem]">
                <div className="store-card lg:w-[250px] lg:h-[250px] bg-black"></div>
                <div className="store-card lg:w-[250px] lg:h-[250px] bg-black"></div>
                <div className="store-card lg:w-[250px] lg:h-[250px] bg-black"></div>
                <div className="store-card lg:w-[250px] lg:h-[250px] bg-black"></div>
                <div className="store-card lg:w-[250px] lg:h-[250px] bg-black"></div>
                <div className="store-card lg:w-[250px] lg:h-[250px] bg-black"></div>
                <div className="store-card lg:w-[250px] lg:h-[250px] bg-black"></div>
            </div>
        </div>
    </section>
  )
}

export default Stores;