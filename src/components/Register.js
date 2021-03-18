import React, { useState, useEffect, useContext } from 'react'
import CreatableSelect from 'react-select/creatable';
import { optionSkills } from './Skillsets'
import '../styles/Register.css'

import { ResumeContext } from './ResumeContext';

const Register = ({navigation}) => {
  
    const [active, setActive] = useState(false);

    const [inputList, setInputList] = useState(
      { firstName: "", lastName: "", address: "", phone: "", email: ""}
    );
    const [edu, setEdu] = useState([
            {instName: "", year: "", degree: "", cgpa: ""},
    ]);
    const [work, setWork] = useState([
        {company: "", fromyear: "", toyear: "", designation: ""},
    ]);
    const [skills, setSkills] = useState([]);

    const [final, setFinal] = useContext(ResumeContext);

    console.log(final)

    const handleChange = (e, index) =>{
        const { name, value } = e.target;

        setInputList({
          ...inputList,
          [name]: value
        });

    }
    const handleEducation = (e, index) =>{
        const { name, value } = e.target;
        const list = [...edu];
        list[index][name] = value;
        setEdu(list)
    }
    const handleWork = (e, index) =>{
        const { name, value } = e.target;
        const list = [...work];
        list[index][name] = value;
        setWork(list)

    }

    const handleAddEdu = () => {
        setEdu([...edu, {instName: "", year: "", degree: "", cgpa: ""}]);
    }
    const handleRemoveEdu = (index) =>{
        const list = [...edu];
        list.splice(index, 1);
        setEdu(list);    
    }
    const handleAddWork = () => {
        setWork([...work, {company: "", fromyear: "", toyear: "", designation: ""}]);
    }
    const handleRemoveWork = (index) =>{
        const list = [...work];
        list.splice(index, 1);
        setWork(list);    
    }

     const handleSubmit = (e) =>{
       e.preventDefault();
        setFinal({
            user: inputList, 
            education: edu, 
            experience: work, 
            skillSet: skills
        });
        setActive(true);
    }
    
    return (

<div className="box-layout">
{/* <pre>
        {JSON.stringify(final.experience, null, 2)}
      </pre> */}
<div className="userDetails">

     <h1 className="box-title">Build Your Resume</h1>

  <form className="form" 
  onSubmit={handleSubmit}
  >

      <h3 className="mt-20 section-title">Personal Details</h3>
      <div className="form-group row">
        <div className="col-md-6 inputForm">
          <label htmlFor="firstName" className="mt-20 mr-10">First Name</label>
          <input type="text"
            name="firstName"
            value={inputList.firstName}
            onChange={handleChange}
            className="mr-10 form-control"
            required
          />
        </div>
        <div className="col-md-6 inputForm">
          <label htmlFor="lastName" className="mt-20 mr-10">Last Name</label>
          <input type="text"
            name="lastName"
            value={inputList.lastName}
            onChange={handleChange}
            className="mr-10 form-control"
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-12 inputForm">
          <label htmlFor="address" className="mt-20 mr-10">Address</label>
          <input type="text"
            name="address"
            value={inputList.address}
            onChange={handleChange}
            className="mr-10 form-control"
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-6 inputForm">
          <label htmlFor="phone" className="mt-20 mr-10">Phone Number</label>
          <input type="text"
            name="phone"
            value={inputList.phone}
            onChange={handleChange}
            className="mr-10 form-control"
            required
          />
        </div>
        <div className="col-md-6 inputForm">
          <label htmlFor="email" className="mt-20 mr-10">Email</label>
          <input type="email"
            name="email"
            value={inputList.email}
            onChange={handleChange}
            className="mr-10 form-control"
            required
          />
        </div>
      </div>
      

    <h3 className="mt-20 section-title">Education Details</h3>

    {edu.map((item, index) => { 
       return(
        <div key={index}>
          <div className="form-group row">
            <div className="col-md-6 inputForm">
                <label htmlFor="instName" className="mt-20 mr-10">Institute Name</label>
              <input type="text"
                name="instName"
                value={item.instName}
                onChange={(e) => handleEducation(e, index)}
                className="mr-10 form-control"
                required
              />
            </div>
            <div className="col-md-6 inputForm">
              <label htmlFor="year" className="mt-20 mr-10">Year</label>
              <input type="month"
                name="year"
                value={item.year}
                onChange={(e) => handleEducation(e, index)}
                className="mr-10 form-control"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6 inputForm">
              <label htmlFor="degree" className="mt-20 mr-10">Degree</label>
              <input type="text"
                name="degree"
                value={item.degree}
                onChange={(e) => handleEducation(e, index)}
                className="mr-10 form-control"
                required
              />
            </div>
            <div className="col-md-6 inputForm">
              <label htmlFor="cgpa" className="mt-20 mr-10">CGPA</label>
              <input type="text"
                name="cgpa"
                value={item.cgpa}
                onChange={(e) => handleEducation(e, index)}
                className="mr-10 form-control"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              {edu.length !== 1 &&     
              <button                               //hides at initial value
                className="btn btn-outline-danger mt-20 mr-10"
                onClick={() => handleRemoveEdu(index)}
              >
                Remove</button>}

              {edu.length - 1 === index &&
              <button
              className="btn btn-outline-success mt-20"
              onClick={handleAddEdu}
              >
                Add</button>}
              </div>
            </div>
          </div>
        );
     })}

    <h3 className="mt-20 section-title">Work Experience</h3>

    {work.map((item, index) => { 
    return(
        <div key={index}>
          <div className="form-group row">
            <div className="col-md-6 inputForm">
              <label htmlFor="company" className="mt-20 mr-10">Company Name</label>
              <input type="text"
              name="company"
              value={item.company}
              onChange={(e) => handleWork(e, index)}
              className="mr-10 form-control"
              required
              />
            </div>
            <div className="col-md-6 inputForm">
              <label htmlFor="designation" className="mt-20 mr-10">Designation</label>
              <input type="text"
              name="designation"
              value={item.designation}
              onChange={(e) => handleWork(e, index)}
              className="mr-10 form-control"
              required
              />
            </div>
          </div>
          <div className="form-group row">
          <div className="col-md-3 inputForm">
              <label htmlFor="fromyear" className="mt-20 mr-10">From(Year)</label>
              <input type="month"
              name="fromyear"
              value={item.fromyear}
              onChange={(e) => handleWork(e, index)}
              className="mr-10 form-control"
              required
              />
            </div>
            <div className="col-md-3 inputForm">
              <label htmlFor="toyear" className="mt-20 mr-10">To(Year)</label>
              <input type="month"
              name="toyear"
              value={item.toyear}
              onChange={(e) => handleWork(e, index)}
              className="mr-10 form-control"
              required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
            {work.length !== 1 &&     
          <button                   
            className="btn btn-outline-danger mt-20 mr-10"
            onClick={() => handleRemoveWork(index)}
          >
            Remove</button>}
              {work.length - 1 === index &&
              <button
              className="btn btn-outline-success mt-20"
              onClick={handleAddWork}
              >
                Add</button>}
            </div>
          </div>
            </div>
        ); 
        })}
    <h3 className="mt-20 section-title">Add Skills</h3>
        <div className="form-group row">
            <div className="col-md-6 inputForm">
            <CreatableSelect
                options={optionSkills}
                placeholder="Select Skills"
                isMulti
                onChange={setSkills}
                /> 
        </div>
      </div>
      <button
      className="btn btn-submit"
      >
        Submit</button>
  </form>
    
      {/* <pre>
        {JSON.stringify(inputList, null, 2)}
      </pre> */}
    <div className="row">
      <div className="col-md-12">
      <button
      // to='/view'
      className={active ? 'btn btn-success' : 'btn btn-success disabled'}
      id="successBtn"
      onClick={() => navigation.next()}
      >
        Save and Continue</button>
      </div>
    </div>

    </div>
      </div>
    )
}

export default Register
