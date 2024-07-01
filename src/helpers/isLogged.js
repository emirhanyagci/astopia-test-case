export default () => {
  const isLoggedIn = localStorage.getItem("jwt") || false;
  return isLoggedIn;
};
