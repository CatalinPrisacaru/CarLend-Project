import React, { createContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Get user data from localStorage on component mount
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const db = getFirestore();
        const colRef = collection(db, "Cars");
        const snapshot = await getDocs(colRef);
        let carsData = [];
        snapshot.forEach((doc) => {
          carsData.push({ ...doc.data(), id: doc.id });
        });
        setCars(carsData);
      } catch (error) {
        console.error("Error fetching cars:", error.message);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    // Save user data to localStorage when user changes
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, cars }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
