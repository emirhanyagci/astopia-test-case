const checkStrong = (password) => {
  let [isWeak, isModerate, isStrong] = [false, false, false];
  const weakReg = RegExp(/^(?=.*[a-z])(?=.*[A-Z])/);
  const moderateReg = RegExp(/^(?=.*[0-9])/);
  const strongReg = RegExp(/^(?=.*[!@#$%^&*])/);
  console.log(password);
  if (password.length <= 0) {
    return false;
  }
  isWeak = true;
  if (
    (weakReg.test(password) && moderateReg.test(password)) ||
    (strongReg.test(password) && weakReg.test(password))
  ) {
    isWeak = false;
    isModerate = true;
  }
  if (
    weakReg.test(password) &&
    moderateReg.test(password) &&
    strongReg.test(password)
  ) {
    isWeak = false;
    isModerate = false;
    isStrong = true;
  }
  return { isWeak, isModerate, isStrong };
};
export default checkStrong;
