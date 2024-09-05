// Details.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
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
} from "./StyledDetails";
import LoadingSkeleton from "./LoadingSkeletonDetails";
import PhotosModal from "./PhotoModal/PhotoModal";
import BookingPage from "./BookingPage";
import BackButton from "../../components/Reusable/GoBackButton/GoBackButton";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
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

      <BackButton />
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
          <h3>{car.price}$ / day</h3>
          <p>{car.location}</p>
          <hr />
          <p>{car.description}</p>
          <BookingPage id={id} />
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
