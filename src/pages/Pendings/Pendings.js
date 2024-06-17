import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../hooks/userContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getFirestore, updateDoc, doc } from "firebase/firestore";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
`;

const TableHead = styled.th`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const DetailsButton = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const StatusButton = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: ${(props) => (props.status === 1 ? "#28a745" : "#dc3545")};
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.status === 1 ? "#218838" : "#c82333"};
  }

  &:focus {
    outline: none;
  }
`;

const Pendings = () => {
  const { cars } = useContext(AuthContext);
  const [carList, setCarList] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  const navigate = useNavigate();

  const toggleStatus = async (id) => {
    const updatedCars = carList.map((car) =>
      car.id === id ? { ...car, status: car.status === 1 ? 0 : 1 } : car
    );
    setCarList(updatedCars);

    try {
      const db = getFirestore();
      const carRef = doc(db, "Cars", id);
      await updateDoc(carRef, {
        status: updatedCars.find((car) => car.id === id).status,
      });
      console.log("Document updated successfully!");
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
    const sortedCars = [...carList];
    sortedCars.sort((a, b) => {
      const dateA = new Date(convertDateFormat(a.createdAt));
      console.log(dateA);
      const dateB = new Date(convertDateFormat(b.createdAt));
      return sortOrder === "ascending" ? dateA - dateB : dateB - dateA;
    });
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
    setCarList(sortedCars);
  };

  useEffect(() => {
    setCarList(cars);
  }, [cars]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <TableHead>Title</TableHead>
            <TableHead>User ID</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>
              Created At <button onClick={() => handleSort()}>Sort </button>
            </TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Status</TableHead>
          </tr>
        </thead>
        <tbody>
          {carList.map((car) => (
            <TableRow key={car.id}>
              <TableCell>{car.title}</TableCell>
              <TableCell>{car.userId}</TableCell>
              <TableCell>{car.description}</TableCell>
              <TableCell>{car.location}</TableCell>
              <TableCell>${car.price}</TableCell>
              <TableCell>
                {new Date(convertDateFormat(car.createdAt)).toLocaleString()}
              </TableCell>
              <TableCell>
                <DetailsButton
                  onClick={() => {
                    navigate(`/details/${car.id}`);
                  }}
                >
                  Details
                </DetailsButton>
              </TableCell>
              <TableCell>
                <StatusButton
                  status={car.status}
                  onClick={() => toggleStatus(car.id)}
                >
                  {car.status === 1 ? "Activate" : "Disable"}
                </StatusButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Pendings;
