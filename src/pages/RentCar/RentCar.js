import React, { useState, useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { DateRange } from "react-date-range";
import AuthContext from "../../hooks/userContext";
import Card from "../../components/Card/Card";
import { format } from "date-fns";
import BookingPage from "../Details/BookingPage";

const RentCar = () => {
  const { cars } = useContext(AuthContext);

  const [sortBy, setSortBy] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [gearshift, setGearshift] = useState("");
  const [passengers, setPassengers] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);
  const [showCalendar, setShowCalendar] = useState(false);

  const calendarRef = useRef(null);

  // State to hold the ID of the selected car for detailed view
  const [selectedCarId, setSelectedCarId] = useState(null);

  // Close calendar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isCarAvailable = (car, startDate, endDate) => {
    if (!car.Rented || car.Rented.length === 0) return true;

    return car.Rented.every((rentPeriod) => {
      const rentStartDate = new Date(rentPeriod.startDate.seconds * 1000);
      const rentEndDate = new Date(rentPeriod.endDate.seconds * 1000);
      return endDate < rentStartDate || startDate > rentEndDate;
    });
  };

  const filteredCars = cars
    .filter(
      (car) =>
        (vehicleType ? car.vehicleType === vehicleType : true) &&
        (gearshift ? car.gear === gearshift : true) &&
        (passengers ? car.persons >= parseInt(passengers) : true) &&
        isCarAvailable(car, dateRange[0]?.startDate, dateRange[0].endDate)
    )
    .sort((a, b) => {
      const priceToNumber = (priceString) => {
        return parseFloat(priceString.replace(",", "."));
      };

      if (sortBy === "priceAsc") {
        return priceToNumber(a.price) - priceToNumber(b.price);
      } else if (sortBy === "priceDesc") {
        return priceToNumber(b.price) - priceToNumber(a.price);
      }
      return 0;
    });

  const handleCardClick = (carId) => {
    setSelectedCarId(selectedCarId === carId ? null : carId);
  };

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
        <FilterGroup>
          <label htmlFor="dateRange">Date Range:</label>
          <DatePickerInput
            onClick={() => setShowCalendar(!showCalendar)}
            value={`${
              dateRange[0]?.startDate
                ? format(dateRange[0].startDate, "MM/dd/yyyy")
                : ""
            } - ${
              dateRange[0]?.endDate
                ? format(dateRange[0].endDate, "MM/dd/yyyy")
                : ""
            }`}
            readOnly
          />
          {showCalendar && (
            <CalendarWrapper ref={calendarRef}>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                minDate={new Date()}
                rangeColors={["#3f51b5"]}
              />
            </CalendarWrapper>
          )}
        </FilterGroup>
      </Filters>

      <Container>
        {filteredCars.map((car, index) => (
          <div
            key={car.id}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Card
              item={car}
              handleSelectedCar={() => handleCardClick(car.id)}
            />
            <Test>
              {selectedCarId === car.id && (
                <AbsoluteBookingPageContainer>
                  <BookingPage id={car.id} />
                </AbsoluteBookingPageContainer>
              )}
            </Test>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default RentCar;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 40px 20px 20px;
  background: linear-gradient(334deg, #6d7880 0%, #4b555a 60%, #2c353a 100%);
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1342px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Test = styled.div`
  position: relative;
  display: block;
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 12px;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media (max-width: 1342px) {
    width: 100%;
  }

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
    transition: all 0.3s ease;
    background-color: white;
    min-width: 200px;
    text-align-last: center;

    &:focus {
      outline: none;
      border: 1px solid rgba(0, 123, 255, 0.5);
    }

    &:hover {
      border: 1px solid rgba(0, 212, 255, 0.6);
    }
  }

  input {
    width: 98%;
  }

  select {
    appearance: none;
    background: #fff
      url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMmw3LjI1NyA0LjUgNy4yNTctNC41IiBzdHJva2U9IiNCMkI0QjUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPgo=")
      no-repeat right 10px center;
    background-size: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 10px 30px 10px 10px;
    font-size: 14px;
    color: #000;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: rgba(0, 212, 255, 0.6);
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    &:hover {
      border-color: rgba(0, 212, 255, 0.6);
    }
  }

  select option {
    background-color: #fff;
    color: #000;
  }
`;

const DatePickerInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 300px;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  color: #000;

  &:focus {
    outline: none;
    border-color: #3f51b5;
    box-shadow: 0 0 5px rgba(63, 81, 181, 0.5);
  }
`;

const CalendarWrapper = styled.div`
  position: absolute;
  top: 70px;
  right: -80px;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1342px) {
    top: 100px;
    right: unset;
    left: 50%;
    transform: translateX(-50%);
  }

  .rdrDateDisplayWrapper {
    display: none;
  }

  .rdrMonths {
    justify-content: center;
  }

  .rdrDayNumber span {
    color: #3f51b5;
  }

  .rdrSelected,
  .rdrStartEdge,
  .rdrEndEdge,
  .rdrInRange {
    background: #3f51b5;
  }
`;

const AbsoluteBookingPageContainer = styled.div`
  width: 1150px;
  border: 2px solid rgba(0, 212, 255, 0.9);
  z-index: 1;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
  margin-left: 2%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: transparent rgba(0, 212, 255, 0.9) transparent transparent; /* Creates the arrow shape */
  }

  @media (max-width: 1700px) {
    max-width: 800px;
  }

  @media (max-width: 900px) {
    width: 90%;
    max-width: 600px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
