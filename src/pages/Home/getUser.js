import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase-config";
export const getUserByEmail = async (email) => {
  try {
    const usersRef = collection(firestore, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No matching user found.");
      return null;
    }

    const userData = querySnapshot.docs[0].data();
    console.log(`User found: ${userData.email}, isAdmin: ${userData.isAdmin}`);
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
