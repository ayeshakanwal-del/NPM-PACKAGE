// Validate Email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validate Phone Number
function isValidPhoneNumber(phone) {
    const regex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    return regex.test(phone);
}

// Validate Password Strength
function isStrongPassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 digit
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
}

module.exports = {
    isValidEmail,
    isValidPhoneNumber,
    isStrongPassword,
};

