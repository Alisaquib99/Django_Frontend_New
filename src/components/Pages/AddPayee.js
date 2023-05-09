import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext'
import { cityvalidation, namevalidation, ifscvalidator, accodevalidator, notEmptyvalidator } from '../home/component/Validation';

// import AlertContext from '../../../context/alert/AlertContext'
// import BankContext from '../../../context/banks/BankContext'
// import AuthContext from '../../../context/auth/AuthContext'
const AddPayee = () => {
    const { user, loaduser } = useContext(AuthContext)
    let id=localStorage.getItem('data')
    const history = useHistory()
    // const {loaduser} = useContext(AuthContext)
    // const {setalert} = useContext(AlertContext)
    // const {Transfer, Clear, success, error,getHistory} = useContext(BankContext)
   

    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [msg, setMsg] = useState("")

    const[flag,setFlag] = useState(false)
    const[first_name, setFirst_name] = useState("")
    const[account_number, setAccount_number] = useState("")
    const[branch, setBranch] = useState("")
    const[ifsc, setIfsc] = useState("")
    // const {amount, account} = transfer

    const Add=props=>{
        const data = {
            "first_name":first_name,
            "account_number": account_number,
            "branch":branch,
            "ifsc":ifsc,
            "user":parseInt(id),
        }
        axios.post("http://127.0.0.1:8000/api/addPayee",data).then((response)=>{
            
            console.log(response)
            alert('submitted')
            history.push("/login");
            history.go();
        })
    }
    
   

    const HandleSubmit = (e) => {
        e.preventDefault()
            if (validate()) {
                setFlag(true)
                Add()
              }
            
        
    }

    const validate = () => {
        console.log("validate call");
        if (namevalidation(first_name) !== true) {
          console.log("invalid Name");
          setMsg("Invalid Name*");
          return false
        }
        else if (accodevalidator(account_number) !== true) {
            console.log("invalid Account Number");
            setMsg("Invalid Account Number*");
            return false
          }
        else if (cityvalidation(branch) !== true) {
          console.log("invalid Branch");
          setMsg("Invalid Branch*");
          return false
        }
        else if (ifscvalidator(ifsc) !== true) {
            console.log("invalid IFSC");
            setMsg("Invalid IFSC(aaaa0111111)*");
            return false
          }
        else {
          setMsg("");
          return true;
        }
      };

    return (
        <div className="transfer">
            <h4>Add Payee</h4>
            <div className="transver__main">
                <form
                //  onSubmit={HandleSubmit} 
                 >
                    <div className="form__list">
                        <div className="form__each">
                        <span style={{ color: "red", alignSelf: "center" }}>{msg}</span>
                            <label><small>First Name:</small></label>
                            <input required onChange={(event)=>{setFirst_name(event.target.value)}} value={first_name} type="text" name="first_name" placeholder="First Name" style={{ border: "2px solid #063970" }} />
                        </div>
                        <div className="form__each">
                            <label><small>Account Number:</small></label>
                            <input required onChange={(event)=>{setAccount_number(event.target.value)}} value={account_number} type="number" name="account_number" placeholder="Account number" style={{ border: "2px solid #063970" }}/>
                        </div>
                        <div className="form__each">
                            <label><small>Branch:</small></label>
                            <input required onChange={(event)=>{setBranch(event.target.value)}} value={branch} type="text" name="branch" placeholder="Branch" style={{ border: "2px solid #063970" }}/>
                        </div>
                        <div className="form__each">
                            <label><small>IFSC:</small></label>
                            <input required onChange={(event)=>{setIfsc(event.target.value)}} value={ifsc} type="text" name="ifsc" placeholder="IFSC" style={{ border: "2px solid #063970" }}/>
                        </div>
                        <button type="submit" style={{borderRadius:"2rem"}} onClick={HandleSubmit}>Add Payee</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPayee
