import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../hooks/userContext";
import { useNavigate } from "react-router-dom";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import CardView from "./CardView";
import TableView from "./TableView";
import {
  Container,
  PaginationButton,
  PaginationContainer,
  PerPageButton,
  SearchContainer,
  SearchInput,
  Table,
  TableHead,
  ToggleButton,
} from "./StyledPendings";

const Pendings = () => {
  const { cars, fetchCars } = useContext(AuthContext);
  const [carList, setCarList] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [viewMode, setViewMode] = useState("card");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const indexOfLastCar = currentPage * perPage;
  const indexOfFirstCar = indexOfLastCar - perPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(filteredCars.length / perPage);

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

  const toggleStatus = async (id) => {
    const updatedCars = carList.map((car) =>
      car.id === id ? { ...car, status: car.status === 0 ? 1 : 0 } : car
    );
    setCarList(updatedCars);

    try {
      const db = getFirestore();
      const carRef = doc(db, "Cars", id);
      await updateDoc(carRef, {
        status: updatedCars.find((car) => car.id === id).status,
      });
      console.log("Document updated successfully!");
      fetchCars();
    } catch (error) {
      console.error("Error updating document:", error.message);
    }
  };

  const convertDateFormat = (dateString) => {
    const parts = dateString.split(" - ");
    const datePart = parts[0];
    const timePart = parts[1];

    const [day, month, year] = datePart.split("/").map(Number);
    const [hours, minutes, seconds] = timePart.split(":").map(Number);

    const formattedDate = new Date(
      year,
      month - 1,
      day,
      hours,
      minutes,
      seconds
    );

    if (isNaN(formattedDate.getTime())) {
      throw new Error(`Invalid date format: ${dateString}`);
    }

    return formattedDate.toISOString();
  };

  const handleSort = () => {
    const sortedCars = [...filteredCars];
    sortedCars.sort((a, b) => {
      const dateA = new Date(convertDateFormat(a.createdAt));
      const dateB = new Date(convertDateFormat(b.createdAt));
      return sortOrder === "ascending" ? dateA - dateB : dateB - dateA;
    });
    setFilteredCars(sortedCars);
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending"); // Toggle sortOrder
  };

  useEffect(() => {
    setCarList(cars);
    setFilteredCars(cars);
  }, [cars]);

  const toggleViewMode = () => {
    setViewMode(viewMode === "card" ? "table" : "card");
  };

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

  const changePerPage = (count) => {
    setPerPage(count);
    setCurrentPage(1);
  };

  return (
    <div>
      <Container>
        <ToggleButton onClick={toggleViewMode}>
          {viewMode === "card" ? "Switch to Table View" : "Switch to Card View"}
        </ToggleButton>
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
        <div>
          <PerPageButton
            active={perPage === 5}
            onClick={() => changePerPage(5)}
          >
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
        </div>
      </Container>
      {viewMode === "card" ? (
        <div>
          {currentCars.map((car) => (
            <CardView
              key={car.id}
              car={car}
              toggleStatus={toggleStatus}
              navigate={navigate}
            />
          ))}
        </div>
      ) : (
        <div>
          <Table>
            <thead>
              <tr>
                <TableHead>Title</TableHead>
                <TableHead>User ID</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Gear</TableHead>
                <TableHead>Persons</TableHead>
                <TableHead>Vehicle Type</TableHead>
                <TableHead>
                  Created At{" "}
                  <button onClick={() => handleSort()}>
                    Sort {sortOrder === "ascending" ? "▲" : "▼"}
                  </button>
                </TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Status</TableHead>
              </tr>
            </thead>
            <tbody>
              {currentCars.map((car) => (
                <TableView
                  key={car.id}
                  car={car}
                  toggleStatus={toggleStatus}
                  navigate={navigate}
                  convertDateFormat={convertDateFormat}
                />
              ))}
            </tbody>
          </Table>
        </div>
      )}
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
    </div>
  );
};

export default Pendings;
