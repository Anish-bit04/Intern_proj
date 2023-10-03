import React, { useState } from "react";
import Cars from "../components/Cars"
import Header from "../components/Header";
import Footer from "../components/Footer";


const HomePage = ({ cars }) => {
  const [search, setsearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const filteredCars = cars?.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  return (
    <div className=' py-3 homecontainer'>
      <div className='container mx-auto '>     
        <Header setsearch={setsearch} search={search} />
        <Cars cars={currentCars} />
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default HomePage;
