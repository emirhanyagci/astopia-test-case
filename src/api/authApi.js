import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `${import.meta.env.BASE_URL}/auth`,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
export const login = (email, password) => {
  return axiosInstance.post("/login", {
    email,
    password,
  });
};
export const signup = (email, password) => {
  return axiosInstance.post("/signup", {
    email,
    password,
  });
};
export const refresh = () => {
  return axiosInstance.get("/refresh");
};
export const logout = () => {
  return axiosInstance.get("/logout");
};
