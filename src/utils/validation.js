// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    return {
      isValid: false,
      message: 'Email is required'
    };
  }
  
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: 'Please enter a valid email address'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

// Password validation
export const validatePassword = (password) => {
  if (!password) {
    return {
      isValid: false,
      message: 'Password is required'
    };
  }
  
  if (password.length < 8) {
    return {
      isValid: false,
      message: 'Password must be at least 8 characters long'
    };
  }
  
  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one uppercase letter'
    };
  }
  
  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one lowercase letter'
    };
  }
  
  // Check for at least one number
  if (!/\d/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one number'
    };
  }
  
  // Check for at least one special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one special character'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

// Student ID validation (MIT format: ADT23SOCB0699)
export const validateStudentId = (studentId) => {
  if (!studentId) {
    return {
      isValid: false,
      message: 'Student ID is required'
    };
  }
  
  // MIT student ID format: 3 letters + 2 digits + 4 letters + 4 digits
  const studentIdRegex = /^[A-Z]{3}[0-9]{2}[A-Z]{4}[0-9]{4}$/;
  if (!studentIdRegex.test(studentId)) {
    return {
      isValid: false,
      message: 'Please enter a valid student ID format (e.g., ADT23SOCB0699)'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

// Username validation (can be student ID or email)
export const validateUsername = (username) => {
  if (!username) {
    return {
      isValid: false,
      message: 'Username is required'
    };
  }
  
  // Check if it's a valid student ID format
  const studentIdValidation = validateStudentId(username);
  if (studentIdValidation.isValid) {
    return studentIdValidation;
  }
  
  // Check if it's a valid email format
  const emailValidation = validateEmail(username);
  if (emailValidation.isValid) {
    return emailValidation;
  }
  
  return {
    isValid: false,
    message: 'Please enter a valid student ID or email address'
  };
};

// Mobile number validation (Indian format)
export const validateMobile = (mobile) => {
  if (!mobile) {
    return {
      isValid: false,
      message: 'Mobile number is required'
    };
  }
  
  // Indian mobile number format: 10 digits starting with 6-9
  const mobileRegex = /^[6-9]\d{9}$/;
  if (!mobileRegex.test(mobile)) {
    return {
      isValid: false,
      message: 'Please enter a valid 10-digit mobile number'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

// Name validation
export const validateName = (name) => {
  if (!name) {
    return {
      isValid: false,
      message: 'Name is required'
    };
  }
  
  if (name.length < 2) {
    return {
      isValid: false,
      message: 'Name must be at least 2 characters long'
    };
  }
  
  if (name.length > 50) {
    return {
      isValid: false,
      message: 'Name must be less than 50 characters'
    };
  }
  
  // Only allow letters, spaces, dots, and apostrophes
  const nameRegex = /^[a-zA-Z\s.']+$/;
  if (!nameRegex.test(name)) {
    return {
      isValid: false,
      message: 'Name can only contain letters, spaces, dots, and apostrophes'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

// Date of birth validation
export const validateDateOfBirth = (dateString) => {
  if (!dateString) {
    return {
      isValid: false,
      message: 'Date of birth is required'
    };
  }
  
  const date = new Date(dateString);
  const today = new Date();
  
  // Check if date is valid
  if (isNaN(date.getTime())) {
    return {
      isValid: false,
      message: 'Please enter a valid date (YYYY-MM-DD)'
    };
  }
  
  // Check if date is not in the future
  if (date > today) {
    return {
      isValid: false,
      message: 'Date of birth cannot be in the future'
    };
  }
  
  // Check if age is reasonable (between 15 and 40 years)
  const age = today.getFullYear() - date.getFullYear();
  if (age < 15 || age > 40) {
    return {
      isValid: false,
      message: 'Age must be between 15 and 40 years'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

// Get password strength
export const getPasswordStrength = (password) => {
  let score = 0;
  let feedback = [];
  
  if (password.length >= 8) score += 1;
  else feedback.push('At least 8 characters');
  
  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push('One uppercase letter');
  
  if (/[a-z]/.test(password)) score += 1;
  else feedback.push('One lowercase letter');
  
  if (/\d/.test(password)) score += 1;
  else feedback.push('One number');
  
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
  else feedback.push('One special character');
  
  const strength = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'][score];
  const color = ['red', 'orange', 'yellow', 'blue', 'green'][score];
  
  return {
    score,
    strength,
    color,
    feedback
  };
};
