import React, { useContext, useState } from "react";
import styled from "styled-components";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AuthContext from "../../hooks/userContext";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="text"],
  textarea {
    width: 100%;
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
`;

const Form = () => {
  const db = getFirestore();
  const storage = getStorage();
  const { addCar, user } = useContext(AuthContext);
  console.log(user.uid, "user");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    images: [],
    status: 0,
    createdAt: "",
    userId: user.uid,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const updatedImages = Array.from(files);

    setFormData({
      ...formData,
      images: [...formData.images, ...updatedImages],
    });
  };

  const uploadImage = async (file) => {
    const storageRef = ref(storage, `carImages/${file.name}`);

    try {
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
        status: formData.status,
        createdAt: createdAtString,
        userId: formData.userId,
      };

      const docRef = await addDoc(collection(db, "Cars"), carData);
      console.log("Document written with ID:", docRef.id);
      alert("Form is uploaded");
      addCar({ ...carData, id: docRef.id });
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Failed to upload form");
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="images">Add Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleFileChange}
            multiple
            required
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default Form;
