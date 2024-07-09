// RentDateDetails.js
import React from "react";
import {
  DateRangeContainer,
  DetailsInfoContainer,
  DetailsInfoItem,
  DetailsPrice,
  RentButton,
  RentButtonContainer,
} from "./StyledDetails";
import RentDateRangePicker from "./Calendar";

const RentDateDetails = ({
  car,
  selectedDates,
  onDateSelect,
  totalPrice,
  onRentNow,
}) => {
  return (
    <DateRangeContainer>
      <RentDateRangePicker car={car} onDateSelect={onDateSelect} />
      <DetailsInfoContainer>
        <DetailsInfoItem>
          Pick-up date:{" "}
          <span>
            {selectedDates?.startDate
              ? selectedDates.startDate.toLocaleDateString()
              : "Select a start date"}
          </span>
        </DetailsInfoItem>
        <DetailsInfoItem>
          Return date:{" "}
          <span>
            {selectedDates?.endDate
              ? selectedDates.endDate.toLocaleDateString()
              : "Select an end date"}
          </span>
        </DetailsInfoItem>
        <DetailsInfoItem>
          Pick-up location: <span>{car.location}</span>
        </DetailsInfoItem>
        <DetailsPrice>
          Total price:{" "}
          {totalPrice > 0 ? `$${totalPrice}` : "Select dates to see price"}
        </DetailsPrice>
        <RentButtonContainer>
          <RentButton onClick={onRentNow}>Rent Now</RentButton>
        </RentButtonContainer>
      </DetailsInfoContainer>
    </DateRangeContainer>
  );
};

export default RentDateDetails;
