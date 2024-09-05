import React from "react";
import {
  DetailsButton,
  StatusButton,
  TableCell,
  TableRow,
  EditButton,
  RentButton,
} from "./StyledPendings";

const TableView = ({ car, toggleStatus, navigate }) => {
  return (
    <TableRow key={car.id}>
      <TableCell>
        {" "}
        {car.title.length > 15 ? car.title.substring(0, 15) + "..." : car.title}
      </TableCell>
      <TableCell>{car.userId}</TableCell>
      <TableCell>
        {car.description.length > 15
          ? car.description.substring(0, 15) + "..."
          : car.description}
      </TableCell>
      <TableCell>{car.location}</TableCell>
      <TableCell>${car.price}</TableCell>
      <TableCell>{car.gear}</TableCell>
      <TableCell>{car.persons}</TableCell>
      <TableCell>{car.vehicleType}</TableCell>
      <TableCell>{car.createdAt}</TableCell>
      <TableCell>
        <DetailsButton onClick={() => navigate(`/details/${car.id}`)}>
          Details
        </DetailsButton>
      </TableCell>
      <TableCell>
        <EditButton onClick={() => navigate(`/edit-car/${car.id}`)}>
          Edit
        </EditButton>
      </TableCell>
      <TableCell>
        <RentButton onClick={() => navigate(`/rents/${car.id}`)}>
          See Rents
        </RentButton>
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
