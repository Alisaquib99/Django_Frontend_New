import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Register.css'
import image from "./stl.jpg"
import { emailvalidator, namevalidation, passwordvalidator, usernamevalidator, notEmptyvalidator } from './Validation';

const Register = () => {

  const history = useHistory()
  const [flag, setFlag] = useState(false)
  const [first_name, setFirst_name] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [branch, setBranch] = useState("")
  const [ifsc, setIfsc] = useState("")
  const [msg, setMsg] = useState("")
  const [temp, setTemp] = useState({})

  const HandleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setFlag(true)
      register()
    }
    else {
      console.log("error");
    }
  }
  const Branch = [
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Hydrabad', label: 'Hydrabad' },
  ];

  const [selectoption, setSelectoption] = useState(null);

  const Ifsc = [
    { value: 'SBIN0005751', label: 'SBIN0005751' },
    { value: 'SBIN0040971', label: 'SBIN0040971' },
    { value: 'SBIN0013285', label: 'SBIN0013285' },
    { value: 'PUNB0424700', label: 'PUNB0424700' },
    { value: 'PUNB0095300', label: 'PUNB0095300' },
  ];
  const register = props => {
    const data = {
      "first_name": first_name,
      "email": email,
      "password": password,
      "username": username,
      "branch": branch,
      "ifsc": ifsc
    }
    axios.post("http://127.0.0.1:8000/api/register/", data).then((response) => {
      localStorage.setItem('Name', response.data.accessToken);
      console.log(response)
      alert('submitted')
      history.push("/login");
      history.go();
    })
  }

  const validate = () => {
    console.log("validate call");
    if (namevalidation(first_name) !== true) {
      console.log("invalid Name");
      setMsg("Invalid Name*");
      return false
    }
    else if (emailvalidator(email) !== true) {
      console.log("invalid Email");
      setMsg("Invalid Email*");
      return false
    }
    // else if (notEmptyvalidator(password) !== true) {
    //     console.log("invalid Password");
    //     setMsg("Invalid Password*");
    //     return false
    //   }
    else if (usernamevalidator(username) !== true) {
      console.log("invalid Username");
      setMsg("Invalid Username*");
      return false
    }
    else {
      setMsg("");
      return true;
    }
  };



  return (
    <div>
      <div className="container">
        <div className="reg__main" style={{ marginTop: "3rem" }}>
          <div className="reg">
            <div className="reg__box">
              <form >
                <span style={{ color: "red", alignSelf: "center" }}>{msg}</span>
                <input name='firstname' required type="text" className="input__feild feild" placeholder="Firstname" onChange={(event) => { setFirst_name(event.target.value) }} />
                <input name='email' required type="email" className="input__feild feild" placeholder="Email" onChange={(event) => { setEmail(event.target.value) }} />
                <input name='password' required type="password" className="input__feild feild" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} />
                <input name='username' required type="text" className="input__feild feild" placeholder="Username" onChange={(event) => { setUsername(event.target.value) }} />
                <select name="branch" id="branch" className="input__feild feild" onChange={(event) => { setBranch(event.target.value) }}>
                  <option value="">Select Branch</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Hydrabad">Hydrabad</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Delhi">Delhi</option>
                </select>
                <select name="ifsc" id="ifsc" className="input__feild feild" onChange={(event) => { setIfsc(event.target.value) }} placeholder='IFSC'>
                  <option value="">Select IFSC</option>
                  <option value="SBIN0005751">SBIN0005751</option>
                  <option value="SBIN0040971">SBIN0040971</option>
                  <option value="SBIN0013285">SBIN0013285</option>
                  <option value="PUNB0424700">PUNB0424700</option>
                  <option value="PUNB0095300">PUNB0095300</option>
                </select>
                <button className="submit__feild feild btnn" onClick={HandleSubmit} >Register</button>

              </form>
              {/* <button className="submit__feild feild" style={{ background: "#063970" }} onClick={hello}>Login</button> */}
            </div>
            <div style={{ width: "50%" }}>
              <img src={image} style={{ width: "80%" }} />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Register