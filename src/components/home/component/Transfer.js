import React, {useState, useContext, useEffect} from 'react'
import AlertContext from '../../../context/alert/AlertContext'
import BankContext from '../../../context/banks/BankContext'
import AuthContext from '../../../context/auth/AuthContext'
import { accodevalidator,pricevalidation  } from './Validation';
const Transfer = () => {
    const {loaduser} = useContext(AuthContext)
    const {setalert} = useContext(AlertContext)
    const[msg, setMsg] = useState("")
    const [flag, setFlag] =useState("")
    const {Transfer, Clear, success, error,getHistory} = useContext(BankContext)
    const [transfer, settransfer] = useState({
        account: '',
        amount: ''
    })
    const {amount, account} = transfer

    useEffect(() => {
        if(success){
            setalert('transfer successful', 'success')
            getHistory()
            loaduser()
            Clear()
        }
        if(error){
            setalert('transfer failed', 'danger')
            Clear()    
        }
    // eslint-disable-next-line
    }, [success, error])
    
    const HandleChange = e => {
        settransfer({
            ...transfer,
            [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            setFlag(true)
            Transfer(amount, account)
       
    }
    }

    const validate = () => {
        console.log("validate call");
       if (accodevalidator(account) !== true) {
            console.log("invalid Account Number");
            setMsg("Invalid Account Number*");
            return false
          }
        else if (pricevalidation(amount) !== true) {
          console.log("invalid Amount");
          setMsg("Invalid Amount*");
          return false
        }
        else {
          setMsg("");
          return true;
        }
      };

    return (
        <div className="transfer">
            <h4>transfer money</h4>
            <div className="transver__main">
                <form onSubmit={HandleSubmit} >
                    <div className="form__list">
                        <div className="form__each">
                        <span style={{ color: "red", alignSelf: "center" }}>{msg}</span>
                            <label><small>Send To (Account number)</small></label>
                            <input required onChange={HandleChange} value={account} type="number" name="account" placeholder="Eg: 254957" style={{ border: "2px solid #063970" }} />
                        </div>
                        <div className="form__each">
                            <label><small>Amount to transfer</small></label>
                            <input required onChange={HandleChange} value={amount} type="number" name="amount" placeholder="Eg: 217" style={{ border: "2px solid #063970" }}/>
                        </div>
                        <button type="submit" style={{ background: "#063970" }}>Make Transfer</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Transfer
