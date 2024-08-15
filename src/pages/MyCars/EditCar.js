import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../hooks/userContext";
import carGif from "../../assests/images/cargif.gif";
import { BackButton } from "../Details/StyledDetails";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
    color: #333;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #3f51b5;
      box-shadow: 0 0 5px rgba(63, 81, 181, 0.2);
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const ImagePreview = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .delete-button {
    position: absolute;
    top: 5px;
    right: 5px;
    background: rgba(255, 0, 0, 0.8);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background 0.3s ease;
  }

  .delete-button:hover {
    background: rgba(255, 0, 0, 1);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background: #3f51b5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 10px;

  &:hover {
    background: #303f9f;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 14px;
`;

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  img {
    width: 550px;
    height: auto;
  }

  p {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
  }
`;

const EditCar = () => {
  const { id } = useParams();
  const { cars, updateCar } = useContext(AuthContext);
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const [errors, setErrors] = useState({}); // Add errors state

  // State variables for editable fields
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [gear, setGear] = useState("");
  const [vehicleType, setVehicleType] = useState(""); // New state for vehicle type
  const [price, setPrice] = useState("");
  const [persons, setPersons] = useState("");
  const [images, setImages] = useState([]);
  const status = 0;

  useEffect(() => {
    const selectedCar = cars.find((car) => car.id === id);
    if (selectedCar) {
      setCar(selectedCar);
      setTitle(selectedCar.title);
      setLocation(selectedCar.location);
      setDescription(selectedCar.description);
      setGear(selectedCar.gear);
      setVehicleType(selectedCar.vehicleType);
      setPrice(selectedCar.price);
      setPersons(selectedCar.persons);
      setImages(selectedCar.images);
    }
  }, [id, cars]);

  const validateForm = () => {
    const errors = {};
    if (!title.trim()) errors.title = "Title is required.";
    if (!location.trim()) errors.location = "Location is required.";
    if (!description.trim()) errors.description = "Description is required.";
    if (!gear.trim()) errors.gear = "Gear is required.";
    if (!vehicleType.trim()) errors.vehicleType = "Vehicle type is required."; // Validation for vehicle type
    if (isNaN(price) || price <= 0)
      errors.price = "Price must be a valid number.";
    if (isNaN(persons) || persons <= 0)
      errors.persons = "Persons must be a valid number.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    setLoading(true);
    const updatedCar = {
      ...car,
      title,
      location,
      description,
      gear,
      vehicleType,
      price,
      persons,
      images,
      status,
    };
    updateCar(updatedCar);

    // Show loader and redirect after 3 seconds
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  if (loading) {
    return (
      <Loader>
        <img src={carGif} alt="Loading" />
        <p>We are working on your request...</p>
      </Loader>
    );
  }

  if (!car) {
    return (
      <Loader>
        <img src={carGif} alt="Loading" />
        <p>We are waiting for your car's details..</p>
      </Loader>
    );
  }

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <div className="icon" />
        Go back
      </BackButton>
      <h2>Edit Car</h2>
      <form>
        <InputField>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
        </InputField>
        <InputField>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {errors.location && <ErrorMessage>{errors.location}</ErrorMessage>}
        </InputField>
        <InputField>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && (
            <ErrorMessage>{errors.description}</ErrorMessage>
          )}
        </InputField>
        <InputField>
          <label>Gear</label>
          <select value={gear} onChange={(e) => setGear(e.target.value)}>
            <option value="">Select Gear</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
          {errors.gear && <ErrorMessage>{errors.gear}</ErrorMessage>}
        </InputField>
        <InputField>
          <label>Vehicle Type</label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select Vehicle Type</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Coupe">Coupe</option>
            <option value="Convertible">Convertible</option>
            <option value="Family car">Family car</option>
            <option value="Break">Break</option>
            <option value="Electric vehicle">Electric vehicle</option>
            <option value="Luxury vehicle">Luxury vehicle</option>
            <option value="Truck">Truck</option>
            <option value="Van">Van</option>
          </select>
          {errors.vehicleType && (
            <ErrorMessage>{errors.vehicleType}</ErrorMessage>
          )}
        </InputField>
        <InputField>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <ErrorMessage>{errors.price}</ErrorMessage>}
        </InputField>
        <InputField>
          <label>Persons</label>
          <input
            type="number"
            value={persons}
            onChange={(e) => setPersons(e.target.value)}
          />
          {errors.persons && <ErrorMessage>{errors.persons}</ErrorMessage>}
        </InputField>
        <InputField>
          <label>Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />
          {images.length > 0 && (
            <ImagePreviewContainer>
              {images.map((url, index) => (
                <ImagePreview key={index}>
                  <img src={url} alt={`Car ${index + 1}`} />
                  <button
                    className="delete-button"
                    type="button" // Prevents form submission
                    onClick={() => handleDeleteImage(index)}
                  >
                    &times;
                  </button>
                </ImagePreview>
              ))}
            </ImagePreviewContainer>
          )}
        </InputField>
        <Button type="button" onClick={handleSave}>
          Save
        </Button>
      </form>
    </Container>
  );
};

export default EditCar;
