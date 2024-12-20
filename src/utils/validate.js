export const validateLogin = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password
  );

  if (!isEmailValid) return "Email is not valid"; // Check for invalid email first

  if (!isPasswordValid) return "Password is not valid"; // Check for invalid password only if email is valid

  return null; // Return null if both email and password are valid
};
