// src/components/EditCar.js
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../hooks/userContext";

const Container = styled.div`
  padding: 20px;
`;

const EditCar = () => {
  const { id } = useParams();
  const { cars, updateCar } = useContext(AuthContext);
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const selectedCar = cars.find((car) => car.id === id);
    if (selectedCar) {
      setCar(selectedCar);
      setTitle(selectedCar.title);
      setLocation(selectedCar.location);
    }
  }, [id, cars]);

  const handleSave = () => {
    const updatedCar = { ...car, title, location };
    updateCar(updatedCar);
    navigate("/mycars");
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2>Edit Car</h2>
      <form>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </Container>
  );
};

export default EditCar;
