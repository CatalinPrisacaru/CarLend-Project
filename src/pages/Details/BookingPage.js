import React, { useState, useEffect, useContext } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  Timestamp,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import RentDateDetails from "./RentCarCalendar";
import AuthContext from "../../hooks/userContext";

const BookingPage = ({ id }) => {
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
      // Calculate the number of days between start and end date
      const timeDiff = end.getTime() - start.getTime();
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert to days and round up
      return days;
    }
    return 0;
  };

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

  useEffect(() => {
    if (id) {
      fetchCar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, db]);

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

      const rentedPeriod = {
        startDate: Timestamp.fromDate(selectedDates.startDate),
        endDate: Timestamp.fromDate(selectedDates.endDate),
        userID: user.uid,
        userName: user.displayName,
        userEmail: user.email,
      };

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

      await updateDoc(carDocRef, {
        Rented: arrayUnion(rentedPeriod),
      });

      console.log("Car updated with rented period:", rentedPeriod);

      setError(null); // Clear any previous error
      fetchCar();
    } catch (error) {
      console.error("Error renting car:", error);
      setError("Failed to rent car. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const totalDays = calculateTotalDays();
  const totalPrice = totalDays * (car?.price ?? 0);

  return (
    <div>
      <h1>Booking Page for {car?.title}</h1>
      <RentDateDetails
        car={car}
        selectedDates={selectedDates}
        onDateSelect={handleDateSelect}
        totalPrice={totalPrice}
        onRentNow={handleRentNow}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default BookingPage;
