import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";
import {
  ImagesContainer,
  FirstImage,
  SecondImage,
  ContainerButton,
  ButtonPhoto,
  Container,
  LeftContainer,
  RightContainer,
  OwnerDetails,
  OwnerImage,
  OwnerActivity,
  BackButton,
  DateRangeContainer,
  RentButton,
} from "./StyledDetails";

import LoadingSkeleton from "./LoadingSkeletonDetails";
import PhotosModal from "./PhotoModal/PhotoModal";
import RentDateRangePicker from "./Calendar";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedDates, setSelectedDates] = useState(null); // State to store selected dates
  const db = getFirestore();

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

  const handleDateSelect = (dateRange) => {
    setSelectedDates(dateRange);
  };

  const handleRentNow = async () => {
    try {
      if (
        !selectedDates ||
        !selectedDates.startDate ||
        !selectedDates.endDate
      ) {
        alert("Please select valid start and end dates.");
        return;
      }

      const rentedPeriod = {
        startDate: Timestamp.fromDate(selectedDates.startDate),
        endDate: Timestamp.fromDate(selectedDates.endDate),
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
          alert(
            "Selected dates overlap with existing rented periods. Please select different dates."
          );
          return;
        }
      }

      await updateDoc(carDocRef, {
        Rented: arrayUnion(rentedPeriod),
      });

      console.log("Car updated with rented period:", rentedPeriod);

      alert("Car rented successfully!");
      fetchCar();
    } catch (error) {
      console.error("Error renting car:", error);
      alert("Failed to rent car. Please try again.");
    }
  };

  if (loading) {
    return <LoadingSkeleton onBack={() => navigate(-1)} />;
  }

  return (
    <div>
      <PhotosModal
        showModal={showModal}
        setShowModal={setShowModal}
        images={car?.images}
      />

      <BackButton onClick={() => navigate(-1)}>
        <div className="icon" />
        Go back
      </BackButton>
      <ImagesContainer>
        <FirstImage>
          <img src={car.images[0]} alt="Main Car" />
        </FirstImage>
        <SecondImage>
          {car.images.slice(1, 5).map((src, index) => (
            <img key={index} src={src} alt={`Thumbnail ${index + 2}`} />
          ))}
        </SecondImage>
      </ImagesContainer>
      <ContainerButton>
        <ButtonPhoto onClick={() => setShowModal(true)}>
          Show all photos
        </ButtonPhoto>
      </ContainerButton>

      <Container>
        <LeftContainer>
          <h1>{car.title}</h1>
          <h3>{car.price}</h3>
          <hr />
          <p>{car.description}</p>
          <p>{car.location}</p>
          <DateRangeContainer>
            <RentDateRangePicker car={car} onDateSelect={handleDateSelect} />
          </DateRangeContainer>
          <RentButton onClick={handleRentNow}>Rent Now</RentButton>
        </LeftContainer>
        <RightContainer>
          <OwnerDetails>
            <OwnerImage>
              <img src={car.images[0]} alt="Main Car" />
            </OwnerImage>
            <OwnerActivity>
              <h3>Joined on June 2024</h3>
              <h3>Response rate: 90%</h3>
              <h3>Response time: 1h</h3>
            </OwnerActivity>
          </OwnerDetails>
        </RightContainer>
      </Container>
    </div>
  );
};

export default Details;
