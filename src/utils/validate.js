export const checkValidData = (email, password, isActive, name) => {

    const validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    
    if(!isActive) {
        if(!/^[A-Za-z]+(?:[-' ][A-Za-z]+)*$/.test(name)) return "Enter Correct Name"
    }
    
    if(!validateEmail) return "Email ID is invalid"
    if(!validatePassword) return "Password is invalid"
    
    return null;
}

