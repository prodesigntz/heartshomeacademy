// auth.js

// Password validation with specific requirements
export const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return "Password must be at least 8 characters long";
  }
  if (!hasUpperCase || !hasLowerCase) {
    return "Password must contain both uppercase and lowercase letters";
  }
  if (!hasNumbers) {
    return "Password must contain at least one number";
  }
  if (!hasSpecialChar) {
    return "Password must contain at least one special character";
  }
  return null;
};

// Session management utilities
export const handleSessionExpiry = (error, router) => {
  if (error.code === 'auth/id-token-expired') {
    router.push('/login?session=expired');
  }
};

// Rate limiting check
export const checkRateLimit = (attempts, lastAttemptTime) => {
  const MAX_ATTEMPTS = 5;
  const COOLDOWN_PERIOD = 300000; // 5 minutes in milliseconds
  
  const now = Date.now();
  if (attempts >= MAX_ATTEMPTS && now - lastAttemptTime < COOLDOWN_PERIOD) {
    return "Too many login attempts. Please try again in a few minutes.";
  }
  return null;
};

// Error message mapping
export const getAuthErrorMessage = (errorCode) => {
  const errorMessages = {
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Invalid password.',
    'auth/invalid-email': 'Invalid email format.',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
    'auth/network-request-failed': 'Network error. Please check your connection.',
    'auth/id-token-expired': 'Your session has expired. Please login again.',
    'auth/invalid-credential': 'Invalid login credentials.',
    'auth/operation-not-allowed': 'Login method not enabled. Please contact support.'
  };
  
  return errorMessages[errorCode] || 'An unexpected error occurred. Please try again.';
};