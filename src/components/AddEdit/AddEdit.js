import React, { useContext, useState } from "react";
import styled from "styled-components";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AuthContext from "../../hooks/userContext";
import { useNavigate } from "react-router-dom";

// Styled components
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  background: radial-gradient(circle, #02044a, #4a4a8a);
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 1600px;
  height: 800px;
  max-width: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    width: 1200px;
    height: 600px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 1000px;
    height: 400px;
    padding: 10px;
  }
`;

const LeftContainer = styled.div`
  width: 30%;
  padding-right: 20px;
  margin-bottom: 55px;
  align-content: center;
`;

const StepList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StepItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => (props.active ? "#00ff00" : "#888")};
    margin-right: 10px;
  }

  span {
    color: ${(props) => (props.active ? "#00ff00" : "#888")};
  }
`;

const RightContainer = styled.div`
  width: 70%;
  padding-left: 20px;
  align-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  color: white;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const StepContainer = styled.div`
  margin-bottom: 15px;

  h3 {
    color: white;
    opacity: 0.8;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 55px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="number"],
  textarea,
  select {
    width: 80%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type="file"] {
    display: block;
    margin-top: 5px;
    font-size: 14px;
  }

  .error {
    color: red;
    font-size: 14px;
    margin-top: 5px;
    display: flex;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const GearCardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;

const GearCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100px;
  background-color: ${(props) =>
    props.selected ? "rgba(0, 212, 255, 0.6)" : "#888"};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: "rgba(0, 212, 255, 0.6)";
  }
`;

const ImagePreview = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const RemoveImage = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2px 5px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
`;

const Form = () => {
  const db = getFirestore();
  const storage = getStorage();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    images: [],
    gear: "Manual",
    persons: "2",
    vehicleType: "Sedan",
    status: 0,
    createdAt: "",
    userId: user.uid,
    otherPersons: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  console.log(errors, "errors");
  const closeModal = () => {
    setIsOpen(false);
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const updatedImages = Array.from(files);

    setFormData({
      ...formData,
      images: [...formData.images, ...updatedImages],
    });
    setErrors({
      ...errors,
      images: "",
    });
  };
  const validateStep = () => {
    let newErrors = {};

    if (currentStep === 1) {
      if (!formData.title) newErrors.title = "Title is required";
      if (!formData.description)
        newErrors.description = "Description is required";
    } else if (currentStep === 2) {
      if (!formData.price) newErrors.price = "Price is required";
      if (!formData.location) newErrors.location = "Location is required";
    } else if (currentStep === 3) {
      if (!formData.gear) newErrors.gear = "Gear is required";
      if (!formData.persons)
        newErrors.persons = "Number of persons is required";
      if (formData.persons === "Other" && !formData.otherPersons) {
        newErrors.otherPersons = "Please specify the number of persons";
      }
      if (!formData.vehicleType)
        newErrors.vehicleType = "Vehicle type is required";
    } else if (currentStep === 4) {
      if (formData.images.length === 0)
        newErrors.images = "At least one image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const uploadImage = async (file) => {
    const storageRef = ref(storage, `carImages/${file.name}`);

    try {
      // Upload file to Firebase Storage
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    setIsLoading(true);

    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const createdAtString = `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;

    try {
      const imageUrls = await Promise.all(
        formData.images.map((file) => uploadImage(file))
      );

      const carData = {
        title: formData.title,
        description: formData.description,
        price: formData.price,
        location: formData.location,
        images: imageUrls,
        gear: formData.gear,
        persons:
          formData.persons === "Other"
            ? parseInt(formData.otherPersons)
            : parseInt(formData.persons),
        vehicleType: formData.vehicleType,
        status: formData.status,
        createdAt: createdAtString,
        userId: formData.userId,
      };

      const docRef = await addDoc(collection(db, "Cars"), carData);
      console.log("Document written with ID: ", docRef.id);
      closeModal();
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (validateStep()) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleGearSelect = (gear) => {
    setFormData({ ...formData, gear });
  };

  const handleVehicleTypeSelect = (vehicleType) => {
    setFormData({ ...formData, vehicleType });
  };

  const handlePersonsSelect = (persons) => {
    setFormData({ ...formData, persons, otherPersons: "" });
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formData.images];
    updatedImages.splice(index, 1);
    setFormData({ ...formData, images: updatedImages });
  };

  const handleStepClick = (index) => {
    if (validateStep() && index !== 5) {
      setCurrentStep(index);
    }
  };

  const steps = [
    { label: "Title & Description" },
    { label: "Price & Location" },
    { label: "Gear , Number of persons & Vehicle type" },
    { label: "Images" },
    { label: "Complete" },
  ];

  const displaySteps = `Step ${currentStep}/5`;

  return (
    <>
      {isOpen && (
        <ModalBackground>
          <ModalContainer>
            <LeftContainer>
              <StepList>
                {steps.map((step, index) => (
                  <StepItem
                    key={index}
                    active={currentStep === index + 1}
                    onClick={() => handleStepClick(index + 1)}
                  >
                    <span>{step.label}</span>
                  </StepItem>
                ))}
              </StepList>
            </LeftContainer>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <RightContainer>
              <StepContainer>
                {currentStep === 1 && (
                  <>
                    <h3>{displaySteps}</h3>
                    <FormGroup>
                      <label>Title:</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                      {errors.title && (
                        <span className="error">{errors.title}</span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <label>Description:</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                      {errors.description && (
                        <span className="error">{errors.description}</span>
                      )}
                    </FormGroup>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <h3>{displaySteps}</h3>
                    <FormGroup>
                      <label>Price:</label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                      />
                      {errors.price && (
                        <span className="error">{errors.price}</span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <label>Location:</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                      {errors.location && (
                        <span className="error">{errors.location}</span>
                      )}
                    </FormGroup>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <h3>{displaySteps}</h3>
                    <FormGroup>
                      <label>Gear:</label>
                      <GearCardContainer>
                        <GearCard
                          selected={formData.gear === "Manual"}
                          onClick={() => handleGearSelect("Manual")}
                        >
                          Manual
                        </GearCard>
                        <GearCard
                          selected={formData.gear === "Automatic"}
                          onClick={() => handleGearSelect("Automatic")}
                        >
                          Automatic
                        </GearCard>
                      </GearCardContainer>
                      {errors.gear && (
                        <span className="error">{errors.gear}</span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <label>Number of persons:</label>
                      <GearCardContainer>
                        <GearCard
                          selected={formData.persons === "2"}
                          onClick={() => handlePersonsSelect("2")}
                        >
                          2
                        </GearCard>
                        <GearCard
                          selected={formData.persons === "4"}
                          onClick={() => handlePersonsSelect("4")}
                        >
                          4
                        </GearCard>
                        <GearCard
                          selected={formData.persons === "6"}
                          onClick={() => handlePersonsSelect("6")}
                        >
                          6
                        </GearCard>
                        <GearCard
                          selected={formData.persons === "Other"}
                          onClick={() => handlePersonsSelect("Other")}
                        >
                          Other
                        </GearCard>
                      </GearCardContainer>
                      {formData.persons === "Other" && (
                        <input
                          type="number"
                          name="otherPersons"
                          value={formData.otherPersons}
                          onChange={handleChange}
                        />
                      )}
                      {errors.persons && (
                        <span className="error">{errors.persons}</span>
                      )}
                      {errors.otherPersons && formData.persons === "Other" && (
                        <span className="error">{errors.otherPersons}</span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <label>Vehicle type:</label>
                      <GearCardContainer className="gear-card-container">
                        <GearCard
                          selected={formData.vehicleType === "Sedan"}
                          onClick={() => handleVehicleTypeSelect("Sedan")}
                        >
                          Sedan
                        </GearCard>
                        <GearCard
                          selected={formData.vehicleType === "SUV"}
                          onClick={() => handleVehicleTypeSelect("SUV")}
                        >
                          SUV
                        </GearCard>
                        <GearCard
                          selected={formData.vehicleType === "Coupe"}
                          onClick={() => handleVehicleTypeSelect("Coupe")}
                        >
                          Coupe
                        </GearCard>
                        <GearCard
                          selected={formData.vehicleType === "Convertible"}
                          onClick={() => handleVehicleTypeSelect("Convertible")}
                        >
                          Convertible
                        </GearCard>
                        <GearCard
                          selected={formData.vehicleType === "Family car"}
                          onClick={() => handleVehicleTypeSelect("Family car")}
                        >
                          Family Car
                        </GearCard>
                        <GearCard
                          selected={formData.vehicleType === "Break"}
                          onClick={() => handleVehicleTypeSelect("Break")}
                        >
                          Break
                        </GearCard>
                        <GearCard
                          selected={formData.vehicleType === "Electric vehicle"}
                          onClick={() =>
                            handleVehicleTypeSelect("Electric vehicle")
                          }
                        >
                          Electric Vehicle
                        </GearCard>
                        <GearCard
                          selected={formData.vehicleType === "Luxury vehicle"}
                          onClick={() =>
                            handleVehicleTypeSelect("Luxury Vehicle")
                          }
                        >
                          Luxury Vehicle
                        </GearCard>
                        <GearCard
                          selected={formData.vehicleType === "Truck"}
                          onClick={() => handleVehicleTypeSelect("Truck")}
                        >
                          Truck
                        </GearCard>
                        <GearCard
                          selected={formData.vehicleType === "Van"}
                          onClick={() => handleVehicleTypeSelect("Van")}
                        >
                          Van
                        </GearCard>
                      </GearCardContainer>
                      {errors.vehicleType && (
                        <span className="error">{errors.vehicleType}</span>
                      )}
                    </FormGroup>
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <h3>{displaySteps}</h3>
                    <FormGroup>
                      <label>Images:</label>
                      <input type="file" onChange={handleFileChange} multiple />
                      {errors.images && (
                        <span className="error">{errors.images}</span>
                      )}
                    </FormGroup>
                    {formData.images.length > 0 && (
                      <ImagePreview>
                        {formData.images.map((image, index) => (
                          <ImageContainer key={index}>
                            <img
                              src={URL.createObjectURL(image)}
                              alt={`Preview ${index + 1}`}
                              style={{ width: "120px", height: "120px" }}
                            />
                            <RemoveImage
                              onClick={() => handleRemoveImage(index)}
                            >
                              &#10006;
                            </RemoveImage>
                          </ImageContainer>
                        ))}
                      </ImagePreview>
                    )}
                  </>
                )}
                {currentStep === 5 && (
                  <>
                    {isLoading ? (
                      <div>Loading...</div>
                    ) : (
                      <>
                        <h3>{displaySteps}</h3>
                        <FormGroup>
                          <h1>Are you ready to post your car on CarLend?</h1>
                        </FormGroup>
                      </>
                    )}
                  </>
                )}
              </StepContainer>
              {currentStep !== 1 && (
                <Button onClick={prevStep}>Previous</Button>
              )}
              {currentStep < 5 ? (
                <Button onClick={nextStep}>Next</Button>
              ) : (
                <Button disabled={isLoading} onClick={handleSubmit}>
                  Yes
                </Button>
              )}
            </RightContainer>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default Form;
