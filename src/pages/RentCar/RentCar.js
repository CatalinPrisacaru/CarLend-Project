import React, { useState, useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../hooks/userContext";
import Card from "../../components/Card/Card";

const RentCar = () => {
  const { cars } = useContext(AuthContext);

  const [sortBy, setSortBy] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [gearshift, setGearshift] = useState("");
  const [passengers, setPassengers] = useState("");

  const filteredCars = cars
    .filter(
      (car) =>
        (vehicleType ? car.vehicleType === vehicleType : true) &&
        (gearshift ? car.gear === gearshift : true) &&
        (passengers ? car.persons >= parseInt(passengers) : true)
    )
    .sort((a, b) => {
      if (sortBy === "priceAsc") {
        return a.price - b.price;
      } else if (sortBy === "priceDesc") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div>
      <h1>Rent a Car</h1>
      <Filters>
        <FilterGroup>
          <label htmlFor="sortBy">Sort By:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Select</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
        </FilterGroup>
        <FilterGroup>
          <label htmlFor="vehicleType">Vehicle Type:</label>
          <select
            id="vehicleType"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Coupe">Coupe</option>
            <option value="Convertible">Convertible</option>
            <option value="Family car">Family car</option>
            <option value="Break">Break</option>
            <option value="Electric vehicle">Electric vehicle</option>
            <option value="Luxury vehicle">Luxury vehicle</option>
          </select>
        </FilterGroup>
        <FilterGroup>
          <label htmlFor="gearshift">Gearshift:</label>
          <select
            id="gearshift"
            value={gearshift}
            onChange={(e) => setGearshift(e.target.value)}
          >
            <option value="">All</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </FilterGroup>
        <FilterGroup>
          <label htmlFor="passengers">Passengers:</label>
          <input
            type="number"
            id="passengers"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            min="1"
            placeholder="Min Passengers"
          />
        </FilterGroup>
      </Filters>
      <Container>
        {filteredCars.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
    </div>
  );
};

export default RentCar;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(334deg, #6d7880 0%, #4b555a 60%, #2c353a 100%);
  border-radius: 8px;
  margin-bottom: 20px;
  gap: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  label {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
  }

  select,
  input {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 200px;
    background-color: #f7f7f7;
    color: #fff;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border: 1px solid rgba(0, 212, 255, 0.6);
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    &:hover {
      border: 1px solid rgba(0, 212, 255, 0.6);
    }
  }

  select {
    appearance: none;
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMmw3LjI1NyA0LjUgNy4yNTctNC41IiBzdHJva2U9IiNCMkI0QjUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPgo=")
      no-repeat right 10px center;
    background-size: 12px;
  }

  select option {
    background-color: #fff;
    color: #000;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  padding: 20px;
  justify-items: center;
`;
