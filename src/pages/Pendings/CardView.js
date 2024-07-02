import React from "react";
import {
  Card,
  CardButtons,
  CardContent,
  CardDetail,
  CardImage,
  CardTitle,
  DetailsButton,
  StatusButton,
} from "./StyledPendings";

const CardView = ({ car, toggleStatus, navigate }) => {
  return (
    <Card>
      <CardImage src={car.images[0]} alt={car.title} />
      <CardContent>
        <CardTitle>{car.title}</CardTitle>
        <CardDetail>
          <strong>User ID:</strong> {car.userId}
        </CardDetail>
        <CardDetail>
          <strong>Description: </strong>
          {car.description.length > 200
            ? `${car.description.substring(0, 290)}...`
            : car.description}
        </CardDetail>
        <CardDetail>
          <strong>Location:</strong> {car.location}
        </CardDetail>
        <CardDetail>
          <strong>Price:</strong> ${car.price}
        </CardDetail>
        <CardDetail>
          <strong>Gear:</strong> {car.gear}
        </CardDetail>
        <CardDetail>
          <strong>Persons:</strong> {car.persons}
        </CardDetail>
        <CardDetail>
          <strong>Vehicle Type:</strong> {car.vehicleType}
        </CardDetail>
        <CardDetail>
          <strong>Created At:</strong>{" "}
          {new Date(car.createdAt).toLocaleString()}
        </CardDetail>
        <CardButtons>
          <DetailsButton onClick={() => navigate(`/details/${car.id}`)}>
            Details
          </DetailsButton>
          <StatusButton
            status={car.status}
            onClick={() => toggleStatus(car.id)}
          >
            {car.status === 0 ? "Activate" : "Disable"}
          </StatusButton>
        </CardButtons>
      </CardContent>
    </Card>
  );
};

export default CardView;
