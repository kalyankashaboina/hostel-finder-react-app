import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterOne() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        gender: '',
        state: '',
        city: '',
        pincode: '',
        course: '',
        email: ''
      });
      const [errors, setErrors] = useState({});


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form data:', formData); // Log the form data
        // const errors = validateForm(formData);
        // if (Object.keys(errors).length === 0) {
        //   localStorage.setItem('formData', JSON.stringify(formData));
        //   alert('Form submitted successfully!');
        //   console.log('Form data stored:', formData);
        //   navigate('/login');

        // } else {
        //   setErrors(errors);
         
        // }
// let newdata=JSON.parse(localStorage.getItem("users"))||[]

// let newusers=[...newdata,formData]
// newdata.push(formData)

        localStorage.setItem("users",JSON.stringify(formData))
        console.log(formData)
        navigate("/login")
        alert("sucessful Registration")
      };

      // const validateForm = (data) => {
      //   let errors = {};
      //   if (!data.firstName) errors.firstName = 'First Name is required';
      //   if (!data.lastName) errors.lastName = 'Last Name is required';
      //   if (!data.birthday) errors.birthday = 'Birthday is required';
      //   if (!data.gender) errors.gender = 'Gender is required';
      //   if (!data.state) errors.state = 'State is required';
      //   if (!data.city) errors.city = 'City is required';
      //   if (!data.pincode) errors.pincode = 'Pincode is required';
      //   if (!data.course) errors.course = 'Course is required';
      //   if (!data.email) {
      //     errors.email = 'Email is required';
      //   } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      //     errors.email = 'Email is invalid';
      //   }
      //   return errors;
      // };
  

   
      return (
        <div className='container-fluid bg-dark' style={{ width: '100vw', height: '150vh', overflow:"hidden" }}>
    
          <div className='row d-flex justify-content-center align-items-center vh-100'>
            <div className='col'>
    
              <div className='card my-4'>
    
                <div className='row g-0'>
    
                  <div className='col-md-6 d-none d-md-block'>
                    <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample" className="card-img rounded-start" fluid  style={{ height: '100vh' }}/>
                  </div>
    
                  <div className='col-md-6'>
    
                    <div className='card-body text-black d-flex flex-column justify-content-center'>
                      <h3 className="mb-5 text-uppercase fw-bold">Hostels registration form</h3>
    
                      <div className='row'>
    
                        <div className='col-md-6'>
                          <input className='form-control mb-4' placeholder='First Name' size='lg' id='form1' type='text' name='firstName' 
    value={formData.firstName} 
    onChange={handleChange} />
                        </div>
    
                        <div className='col-md-6'>
                          <input className='form-control mb-4' placeholder='Last Name' size='lg' id='form2' type='text' name='lastName' 
    value={formData.lastName} 
    onChange={handleChange} />
                        </div>
    
                      </div>
    
                      <input className='form-control mb-4' placeholder='password' size='lg' id='form3' type='text'  name='password' 
    value={formData.password} 
    onChange={handleChange} />
    
                      <div className='d-md-flex justify-content-start align-items-center mb-4'>
                        <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                        <div className='form-check form-check-inline'>
                          <input className='form-check-input' name='inlineRadio' id='inlineRadio1' value='option1' type='radio'  />
                          <label className='form-check-label' htmlFor='inlineRadio1'>Female</label>
                        </div>
                        <div className='form-check form-check-inline'>
                          <input className='form-check-input' name='inlineRadio' id='inlineRadio2' value='option2' type='radio' />
                          <label className='form-check-label' htmlFor='inlineRadio2'>Male</label>
                        </div>
                        <div className='form-check form-check-inline'>
                          <input className='form-check-input' name='inlineRadio' id='inlineRadio3' value='option3' type='radio' />
                          <label className='form-check-label' htmlFor='inlineRadio3'>Other</label>
                        </div>
                      </div>
    
                      <div className='row'>
    
                        <div className='col-md-6'>
                          <select className='form-select mb-4' size='lg'>
                            <option value='1'>State</option>
                            <option value='2'>Option 1</option>
                            <option value='3'>Option 2</option>
                            <option value='4'>Option 3</option>
                          </select>
                        </div>
    
                        <div className='col-md-6'>
                          <select className='form-select mb-4' size='lg'>
                            <option value='1'>City</option>
                            <option value='2'>Option 1</option>
                            <option value='3'>Option 2</option>
                            <option value='4'>Option 3</option>
                          </select>
                        </div>
    
                      </div>
    
                      
                      <input className='form-control mb-4' placeholder='Email ID' size='lg' id='form6' type='text'  name='email'
    value={formData.email} 
    onChange={handleChange} />
    
                      <div className="d-flex justify-content-end pt-3">
                        <button className='btn btn-light me-2' type='button'><Link to="/login">I already have an account</Link></button>
                        <button className='btn btn-warning' type='button'  onClick={handleSubmit}>Submit form</button>
                      </div>
    
                    </div>
    
                  </div>
                </div>
    
              </div>
    
            </div>
          </div>
    
        </div>
      );
    
    
   
    
}

export default RegisterOne;
