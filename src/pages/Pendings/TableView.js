import React from "react";
import {
  DetailsButton,
  StatusButton,
  TableCell,
  TableRow,
} from "./StyledPendings";

const TableView = ({ car, toggleStatus, navigate, convertDateFormat }) => {
  return (
    <TableRow key={car.id}>
      <TableCell>{car.title}</TableCell>
      <TableCell>{car.userId}</TableCell>
      <TableCell>
        {car.description.length > 30
          ? car.description.substring(0, 30) + "..."
          : car.description}
      </TableCell>
      <TableCell>{car.location}</TableCell>
      <TableCell>${car.price}</TableCell>
      <TableCell>{car.gear}</TableCell>
      <TableCell>{car.persons}</TableCell>
      <TableCell>{car.vehicleType}</TableCell>{" "}
      <TableCell>
        {" "}
        {new Date(convertDateFormat(car.createdAt)).toLocaleString()}
      </TableCell>
      <TableCell>
        <DetailsButton onClick={() => navigate(`/details/${car.id}`)}>
          Details
        </DetailsButton>
      </TableCell>
      <TableCell>
        <StatusButton status={car.status} onClick={() => toggleStatus(car.id)}>
          {car.status === 0 ? "Activate" : "Disable"}
        </StatusButton>
      </TableCell>
    </TableRow>
  );
};

export default TableView;
