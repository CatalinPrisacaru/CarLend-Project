import React, { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../hooks/userContext";
import { useNavigate } from "react-router-dom";

// Styled components
const Container = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHead = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const StatusCell = styled.td`
  padding: 5px 10px;
  width: 20px;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  ${(props) =>
    props.status === 1
      ? `
      background-color: green;
      color: white;
    `
      : `
      background-color: yellow;
      color: black;
    `}
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

const getStatusText = (status) => {
  return status === 1 ? "Active" : "Pending";
};

const MyCars = () => {
  const { cars, user } = useContext(AuthContext);

  const userCars = cars.filter((car) => car.userId === user.uid);
  const navigate = useNavigate();

  return (
    <Container>
      <h2>My Cars</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Location</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Details</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userCars.map((car) => (
            <TableRow key={car.id}>
              <TableCell>{car.title}</TableCell>
              <TableCell>{car.description}</TableCell>
              <TableCell>{car.location}</TableCell>
              <TableCell>{car.price}</TableCell>
              <TableCell>
                <StatusCell status={car.status}>
                  {getStatusText(car.status)}
                </StatusCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default MyCars;
