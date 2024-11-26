export const loginErrorMessage = (errorCode) => {
  const errorMessages = {
    "auth/invalid-credential":
      "The login credentials provided are invalid. Please check and try again.",
    "auth/email-already-in-use":
      "This email is already associated with an account.",
    "auth/weak-password":
      "Your password is too weak. Please use a stronger password.",
    "auth/user-not-found": "No user found with this email address.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/operation-not-allowed":
      "Sign-up is currently disabled. Please contact support.",
    "auth/network-request-failed":
      "Network error. Please check your internet connection and try again.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/internal-error":
      "An internal error occurred. Please try again later.",
  };

  return (
    errorMessages[errorCode] || "An unknown error occurred, Please try again."
  );
};

export const signupErrorMessage = (errorCode) => {
  const errorMessages = {
    "auth/email-already-in-use":
      "This email is already associated with an account.",
    "auth/invalid-email":
      "The email address is not valid. Please enter a correct email address.",
    "auth/weak-password":
      "Your password is too weak. It must be at least 6 characters long.",
    "auth/operation-not-allowed":
      "Sign-up is currently disabled. Please contact support.",
    "auth/network-request-failed":
      "Network error. Please check your internet connection and try again.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/internal-error":
      "An internal error occurred. Please try again later.",
  };

  return (
    errorMessages[errorCode] || "An unknown error occurred, Please try again."
  );
};
