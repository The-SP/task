import { createContext, useState, useEffect } from "react";
import axiosInstance from "../axios_instance";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      // make a GET request to /auth/users/me to fetch user information and update the user state
      axiosInstance.get("/auth/users/me").then((response) => {
        setUser(response.data);
        // console.log(response.data);
      });
    };

    if (!user && localStorage.getItem("access_token")) {
      fetchUser();
    }
  }, [user]);

  let contextData = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
