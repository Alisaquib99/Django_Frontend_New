import React, {useContext} from 'react'
import { useHistory } from 'react-router'
import "./Navbar.css"
// import  { Redirect } from 'react-router-dom'
// import {browserHistory} from 'react'
import AuthContext from '../../context/auth/AuthContext'
import Logo from './logo2.png'
const Navbar = props=> {
    const history = useHistory();
    const {logout,token } = useContext(AuthContext)

    // console.log(window.innerWidth)
    
    if(window.innerWidth > 450){
        // <Redirect to='/'  />
        // props.history.push('/')
        // browserHistory.push("/");
    }
    return (
        <header >
            <div className="logo">
                <a href="/">
                    <img src={Logo} style={{'width':'100px'}} alt="STL bank" />
                </a>
            </div>
            <div className='navbar_button_row'>
            {
                !token ? (
                    <a href="/reg"><button className='navbar_button' >Register</button></a>
                    
                ) : null
                
            }
            {
                !token ? (
                    <a href="/login"><button className='navbar_button'>Login</button></a>
                    
                ) : null
                
            }
            {
                token ? (
                    <a href="/"><button className='navbar_button'>Home</button></a>
                    
                ) : null
                
            }
            {
                token ? (
                    <a href="/his"><button className='navbar_button'>Transaction History</button></a>
                    
                ) : null
                
            }
            {
                token ? (
                    <a href="/trans"><button className='navbar_button'>Transaction</button></a>
                    
                ) : null
                
            }
            {
                token ? (
                    <button onClick={logout} className='navbar_button'>logout</button>
                    
                ) : null
                
            }
             {
                token ? (
                    <a href="/add"><button className='navbar_button'>Add Payee</button></a>
                    
                ) : null
                
            }
            </div>
            
        </header>
    )
}

export default Navbar
