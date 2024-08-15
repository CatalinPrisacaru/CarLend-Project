import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import AuthContext from "../../hooks/userContext";
import { useNavigate } from "react-router-dom";
import CardView from "../Pendings/CardView";

// Styled components from Pendings
const Container = styled.div`
  padding: 20px;
  min-height: 62vh;
`;

const Title = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 36px;
  display: flex;
  justify-content: center;
  margin: 20px 0px 30px 0px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px 15px;
  margin-right: 10px;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
    outline: none;
  }

  &::placeholder {
    color: #999;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  span {
    margin: 25px 0px;
  }
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  margin: 20px 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
`;

const PerPageContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  span {
    margin: 25px 0px;
  }
`;

const PerPageButton = styled.button`
  padding: 10px 20px;
  margin: 30px 5px;
  background-color: ${(props) => (props.active ? "#007bff" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: ${(props) => (props.active ? "none" : "1px solid #ccc")};
  cursor: pointer;
`;

const MyCars = () => {
  const { cars, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // State variables
  const [carList, setCarList] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchName, setSearchName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  // Filter user-specific cars
  useEffect(() => {
    const userCars = cars.filter((car) => car.userId === user.uid);
    setCarList(userCars);
    setFilteredCars(userCars);
  }, [cars, user]);

  // Pagination calculations
  const indexOfLastCar = currentPage * perPage;
  const indexOfFirstCar = indexOfLastCar - perPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / perPage);

  // Pagination handlers
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Search handlers
  const handleSearchLocation = (e) => {
    setSearchLocation(e.target.value);
    filterCars(searchName, e.target.value);
  };

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
    filterCars(e.target.value, searchLocation);
  };

  const filterCars = (name, location) => {
    const filtered = carList.filter((car) => {
      const normalizedTitle = car.title.toLowerCase();
      const normalizedLocation = car.location.toLowerCase();
      const normalizedName = name.toLowerCase();
      const normalizedLocationFilter = location.toLowerCase();
      return (
        normalizedTitle.includes(normalizedName) &&
        normalizedLocation.includes(normalizedLocationFilter)
      );
    });
    setFilteredCars(filtered);
    setCurrentPage(1);
  };

  // Change items per page
  const changePerPage = (count) => {
    setPerPage(count);
    setCurrentPage(1);
  };

  return (
    <Container>
      <Title>My Cars</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={handleSearchName}
        />
        <SearchInput
          type="text"
          placeholder="Search by location"
          value={searchLocation}
          onChange={handleSearchLocation}
        />
      </SearchContainer>
      <PerPageContainer>
        <PerPageButton active={perPage === 5} onClick={() => changePerPage(5)}>
          5 per page
        </PerPageButton>
        <PerPageButton
          active={perPage === 15}
          onClick={() => changePerPage(15)}
        >
          15 per page
        </PerPageButton>
        <PerPageButton
          active={perPage === 25}
          onClick={() => changePerPage(25)}
        >
          25 per page
        </PerPageButton>
      </PerPageContainer>
      <div>
        {currentCars.map((car) => (
          <CardView
            key={car.id}
            car={car}
            toggleStatus={() => {}}
            navigate={navigate}
            removeDisableButton={true}
          />
        ))}
      </div>
      <PaginationContainer>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </PaginationButton>
        <span>
          {currentPage} of {totalPages}
        </span>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </Container>
  );
};

export default MyCars;
