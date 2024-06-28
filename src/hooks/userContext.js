import React, { createContext, useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase-config";
import { getUserByEmail } from "../pages/Home/getUser";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Get user data from localStorage on component mount
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isAdmin, setIsAdmin] = useState(null);
  const [cars, setCars] = useState([]);

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
  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    // Save user data to localStorage when user changes
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const fetchAdminStatus = async (email) => {
      if (!email) return;
      try {
        const usersRef = collection(firestore, "users");
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setIsAdmin(userData.isAdmin);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error fetching admin status:", error);
        setIsAdmin(false);
      }
    };

    if (user && user.providerData[0]?.email) {
      fetchAdminStatus(user.providerData[0].email);
    }
  }, [user]);

  const loginUser = async (userData) => {
    setUser(userData);

    if (userData && userData.providerData[0]?.email) {
      const isAdmin = await getUserByEmail(userData.providerData[0].email);
      setIsAdmin(isAdmin);
    } else {
      setIsAdmin(false);
    }
  };

  const logoutUser = () => {
    setUser(null);
    setIsAdmin(null);
  };

  const addCar = (car) => {
    setCars([...cars, car]);
  };

  const editCar = (carId, updatedData) => {
    const updatedCars = cars.map((car) => {
      if (car.id === carId) {
        return { ...car, ...updatedData };
      }
      return car;
    });

    setCars(updatedCars);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
        loginUser,
        logoutUser,
        cars,
        addCar,
        editCar,
        fetchCars,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
