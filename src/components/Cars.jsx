import React from "react";
import CarCard from "./CarCard"

const Cars = ({ cars }) => {
  return (

    <div className='grid grid-cols-3 place-items-start justify-start gap-5 mt-10 mb-14'>

      {cars.map((car) => (

        <CarCard car={car} />
        
      ))}
    </div>
  );
};

export default Cars;
