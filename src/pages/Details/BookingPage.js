import React, { useState, useEffect, useContext } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import RentDateDetails from "./RentCarCalendar";
import AuthContext from "../../hooks/userContext";
import { useNavigate } from "react-router-dom";
import { RentHeader, SeeDetailsButton } from "./StyledDetails";

const BookingPage = ({ isCarousel, id }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [car, setCar] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const docRef = doc(db, "Cars", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCar(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCar();
    }
  }, [id, db]);

  const handleDateSelect = (dateRange) => {
    setSelectedDates(dateRange);
  };

  const calculateTotalDays = () => {
    if (selectedDates?.startDate && selectedDates?.endDate) {
      const start = selectedDates.startDate;
      const end = selectedDates.endDate;
      const timeDiff = end.getTime() - start.getTime();
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return days;
    }
    return 0;
  };

  const handleRentNow = async () => {
    try {
      if (
        !selectedDates ||
        !selectedDates.startDate ||
        !selectedDates.endDate
      ) {
        setError("Please select valid start and end dates.");
        return;
      }

      const carDocRef = doc(db, "Cars", id);
      const carSnapshot = await getDoc(carDocRef);
      const { Rented } = carSnapshot.data();

      if (Rented) {
        const overlap = Rented?.some((period) => {
          const start = period.startDate.toDate();
          const end = period.endDate.toDate();
          return (
            (selectedDates.startDate >= start &&
              selectedDates.startDate <= end) ||
            (selectedDates.endDate >= start && selectedDates.endDate <= end) ||
            (selectedDates.startDate <= start && selectedDates.endDate >= end)
          );
        });

        if (overlap) {
          setError(
            "Selected dates overlap with existing rented periods. Please select different dates."
          );
          return;
        }
      }

      // Calculate total price
      const totalDays = calculateTotalDays();
      const price = parseFloat((car?.price ?? "").replace(",", "."));
      const totalPrice = totalDays * (Number.isNaN(price) ? 0 : price);
      const formattedTotalPrice = totalPrice.toFixed(2);

      console.log(id, user, formattedTotalPrice, selectedDates, "vvasd123123");

      // Navigate to the payment page with the required state
      navigate(`/payment/${id}`, {
        state: {
          carId: id,
          totalPrice: formattedTotalPrice,
          selectedDates: selectedDates,
          user,
        },
      });
    } catch (error) {
      console.error("Error checking date overlap or navigating:", error);
      setError("Failed to proceed. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const totalDays = calculateTotalDays();
  const price = parseFloat((car?.price ?? "").replace(",", "."));
  const totalPrice = totalDays * (Number.isNaN(price) ? 0 : price);

  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div>
      <RentHeader>
        <h1>Booking Page for {car?.title}</h1>
        {isCarousel && (
          <SeeDetailsButton onClick={() => navigate(`/details/${id}`)}>
            See more details
          </SeeDetailsButton>
        )}
      </RentHeader>

      <RentDateDetails
        car={car}
        selectedDates={selectedDates}
        onDateSelect={handleDateSelect}
        totalPrice={formattedTotalPrice}
        onRentNow={handleRentNow}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default BookingPage;
