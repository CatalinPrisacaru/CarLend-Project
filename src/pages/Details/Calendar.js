import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styled from "styled-components";

const CalendarContainer = styled.div`
  .rdrDefinedRangesWrapper {
    display: none;
  }
`;

const RentDateRangePicker = ({ car, onDateSelect }) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [disabledDates, setDisabledDates] = useState([]);

  const rentedPeriods = (car?.Rented || []).map((period) => ({
    startDate: period.startDate.toDate(),
    endDate: period.endDate.toDate(),
  }));

  useEffect(() => {
    const disabledRanges = rentedPeriods.map((period) => ({
      startDate: period.startDate,
      endDate: period.endDate,
    }));

    setDisabledDates(disabledRanges);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [car?.Rented]);

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    onDateSelect(ranges.selection);
  };

  // Function to check if a date should be disabled
  const isDateDisabled = (date) => {
    return disabledDates.some((range) => {
      return date >= range.startDate && date <= range.endDate;
    });
  };

  return (
    <CalendarContainer>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        minDate={new Date()}
        disabledDay={isDateDisabled}
      />
    </CalendarContainer>
  );
};

export default RentDateRangePicker;
