import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../context/auth/AuthContext'
import './Register.js'
import './Home.css';
import axios from 'axios'
const Welcome = () => {
    const { user, loaduser } = useContext(AuthContext)
    useEffect(() => {
        loaduser()
        // eslint-disable-next-line
    }, [])
    const [attr, setAttr] = useState({ first_name: "", branch: "", ifsc: "", account_number: "" });
    const [payee, setPayee] = useState([])
    const [flag,setFlag] = useState(false)
    useEffect(() => {
        async function getPayee() {
            const id=localStorage.getItem('data')
            const result = await axios({
                method: 'get',
                url: `http://127.0.0.1:8000/api/getPayee/${id}`,
            })
            setPayee(result.data);
        }
        getPayee();
    },[]);
    const [id,setId] =useState();
    function order(){
        console.log("*********8id*88",payee.id)
        setId(payee.id)
        
        console.log("*********8id*88",payee.id)
    }
    function onConfirm(bookingId) {
        // confirmAlert({
        //   title: 'Confirm to delete',
        //   message: 'Are you sure to do this.',
        //   buttons: [
        //     {
        //       label: 'Yes',
        //       onClick: () => {
        //         this.onDelete(bookingId)
        //         window.location.reload(false); // in order to refresh the page
                
        //       }
        //     },
        //     {
        //       label: 'No',
        //       // onClick: () => alert('Click No')
        //     }
        //   ]
        // });
      };
    function  onDelete(id) {
        console.log("reservationId  +================ ", id);
        // let studentId=this.state.details.studentId;
        alert("Are you sure to do this:")
        window.location.reload(false);
        axios.delete(`http://127.0.0.1:8000/api/deletePayee/` + id)
          .then(response => {
            if (response.status === 200) {
              setFlag(true)
            }
            // this.props.history.push('/Ad_Section_List');
          })
          .catch(err => console.log(err));
    
    
      };
    return (
        <div className="infome poppin flex bg" >
            <div className='main'>
                <h1 style={{ 'textAlign': 'center', fontSize: "3rem", }}>Welcome! to STL Bank</h1>
                <div style={{ boxShadow: " 0px 5px 20px -9px rgba(0,0,0,9)", background: "black", height: "1px", width: "100%" }}></div>
                <div className='homeContent'>
                    <h2 style={{ fontSize: "2rem" }}>Hello, {user && user.first_name ? user.first_name : null}</h2>
                    <h3 style={{ color: "black" }}>Bank Balance: <span style={{ color: "#29de92" }}><i class="uil uil-rupee-sign"></i>{user && user.balance ? user.balance : null}</span> <span className="crr"></span> </h3>
                    <h3 className="accountnumber">
                        <span className="accountnumber_title" style={{ color: "black" }}>Account Number:</span>
                        <span className="accountnumber_number"> {user && user.account_number ? user.account_number : null}</span>
                    </h3>
                    <h3 className="email">
                        <span className="accountnumber_title" style={{ color: "black" }}>Email:</span>
                        <span className="accountnumber_number"> {user && user.email ? user.email : null}</span>
                    </h3>
                    <h3 className="branch">
                        <span className="accountnumber_title" style={{ color: "black" }}>Branch:</span>
                        <span className="accountnumber_number"> {user && user.branch ? user.branch : null}</span>
                    </h3>
                    <h3 className="ifsc">
                        <span className="accountnumber_title" style={{ color: "black" }}>IFSC Code:</span>
                        <span className="accountnumber_number"> {user && user.ifsc ? user.ifsc : null}</span>
                    </h3>
                </div>
            </div>
            <div className='card'>
                <h3>Payee List</h3>
                <hr style={{ marginBottom: "1rem", color: "black" }} />
                <div className='large'>
                    {payee.map((payee) => (
                        <div className='card_2'>
                            <div className='content'>
                                <h2>{payee.first_name}</h2>
                                <p>{payee.account_number}</p>
                            </div>
                            <div className='delete'>
                                <button onClick={()=>{setId(payee.id);console.log("*********",payee.id);onDelete(payee.id)}}>x</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Welcome
