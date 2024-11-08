export const storeOutlet = {
  Pharmacy: [
    {
      pharmacyName: "Pharmacy Direct",
      image:
        "https://www.arizonacollege.edu/wp-content/uploads/2022/05/What-Is-A-Pharmacy-Tech-Arizona-College-Allied-Health.jpg",
    },
    {
      pharmacyName: "Neda Pharmacy",
      image:
        "https://www.arizonacollege.edu/wp-content/uploads/2022/05/What-Is-A-Pharmacy-Tech-Arizona-College-Allied-Health.jpg",
    },
    {
      pharmacyName: "Stereda Pharmacy",
      image:
        "https://www.arizonacollege.edu/wp-content/uploads/2022/05/What-Is-A-Pharmacy-Tech-Arizona-College-Allied-Health.jpg",
    },
    {
      pharmacyName: "ABC Pharmacy",
      image:
        "https://www.arizonacollege.edu/wp-content/uploads/2022/05/What-Is-A-Pharmacy-Tech-Arizona-College-Allied-Health.jpg",
    },
    {
      pharmacyName: "Phantom Pharmacy",
      image:
        "https://www.arizonacollege.edu/wp-content/uploads/2022/05/What-Is-A-Pharmacy-Tech-Arizona-College-Allied-Health.jpg",
    },
    {
      pharmacyName: "Alpha Pharmacy",
      image:
        "https://www.arizonacollege.edu/wp-content/uploads/2022/05/What-Is-A-Pharmacy-Tech-Arizona-College-Allied-Health.jpg",
    },
  ].map((Pharmacy, index)=>({...Pharmacy, id: index})),
};