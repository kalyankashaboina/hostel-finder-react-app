import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');
  const [country, setCountry] = useState('');
  const [countryError, setCountryError] = useState('');

  const handleEmail = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailError(emailValue.trim() === '' ? 'Email is required' : '');
  };

  const handlePassword = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setPasswordError(passwordValue.length < 8 ? 'Password must be at least 8 characters long' : '');
  };

  const handleConfirmPassword = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    setConfirmPasswordError(password !== confirmPasswordValue ? 'Passwords do not match' : '');
  };

  const handleGender = (event) => {
    const genderValue = event.target.value;
    setGender(genderValue);
    setGenderError(genderValue.trim() === '' ? 'Gender is required' : '');
  };

  const handleCountry = (event) => {
    const countryValue = event.target.value;
    setCountry(countryValue);
    setCountryError(countryValue.trim() === '' ? 'Country is required' : '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailError || passwordError || confirmPasswordError || genderError || countryError) {
      return;
    }

    const userInfo = { email, password, gender, country };
    console.log(userInfo);

    // Clear the form fields after successful submission
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setGender('');
    setCountry('');

    // Navigate to the login page
    navigate('/login');
  };

  return (
    <>
      <h3 className="text-center pt-3">Registration Form</h3>
      <form className="mt-3 bg-info p-3 rounded " onSubmit={handleSubmit}>
        <div className="pt-2 pb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control col-xs-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmail}
            required
          />
          {emailError && <p className="text-danger">{emailError}</p>}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="m-auto col-md-2 pt-2 pb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control form-control-sm"
            id="exampleInputPassword1"
            value={password}
            onChange={handlePassword}
            required
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}
        </div>
        <div className="m-auto col-md-2">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control form-control-sm"
            id="exampleInputPassword2"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            required
          />
          {confirmPasswordError && <p className="text-danger">{confirmPasswordError}</p>}
        </div>
        <div className="m-auto col-md-2 pt-2 pb-2">
          <p className="mb-2 pb-1">Gender: </p>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="femaleGender"
              value="female"
              onChange={handleGender}
              checked={gender === 'female'}
            />
            <label className="form-check-label" htmlFor="femaleGender">
              Female
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="maleGender"
              value="male"
              onChange={handleGender}
              checked={gender === 'male'}
            />
            <label className="form-check-label" htmlFor="maleGender">
              Male
            </label>
          </div>

          {genderError && <p className="text-danger">{genderError}</p>}
        </div>
        <div className="m-auto col-md-2 pt-2 pb-2">
          <select
            className="custom-select"
            onChange={handleCountry}
            value={country}
          >
            <option disabled>Select Country</option>
            <option value="india">India</option>
            <option value="United States">United States</option>
            <option value="Australia">Australia</option>
          </select>
          {countryError && <p className="text-danger">{countryError}</p>}
        </div>
        <div className="m-auto col-md-2">
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
          <br></br>
          <br></br>
          <Link to="/login">I already have an account</Link>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
