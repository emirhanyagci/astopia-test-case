import { jwtDecode } from "jwt-decode";

export default (token) => {
  try {
    const decoded = jwtDecode(token);
    if (!decoded) return false;

    const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
    if (decoded.exp < currentTime) return false; // Check if token is expired
    return decoded;
  } catch (e) {
    return false;
  }
};
