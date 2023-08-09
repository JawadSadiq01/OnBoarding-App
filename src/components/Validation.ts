export const IsValidEmail = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const IsValidPassword = (password: string) => {
  if (password.length < 8) {
    return false;
  }
  const letterPattern = /[a-zA-Z]/;

  if (!letterPattern.test(password)) {
    return false;
  }
  return true;
};