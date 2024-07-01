import React, { useState } from "react";
import '../styles.css'
import { Toast } from "bootstrap";

export const Register = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userEmail);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label className="Formlabel" htmlFor="name">Full name</label>
            <input className="Forminput" minLength={8} value={userName} name="name" onChange={(u) => setUserName(u.target.value)} id="userName"  placeholder="User Name" />
            <label className="Formlabel" htmlFor="email">email</label>
            <input className="Forminput" value={userEmail} onChange={(u) => setUserEmail(u.target.value)}type="email" id="userEmail" placeholder="enteryouremail@gmail.com"  name="email" />
            <label className="Formlabel" htmlFor="password">password</label>
            <input className="Forminput" minLength={10} value={userPass} onChange={(u) => setUserPass(u.target.value)} type="password" id="userPass" placeholder="************"  name="password" />
            <button className="Formbutton" type="submit" onSubmit={() =>{}} onClick={() => {
                if(document.getElementById('userName').value != '' && document.getElementById('userEmail').value != '' && document.getElementById('userPass').value != ''){
                    props.onFormSwitch('login')  
                } }}>Register</button>
        </form>
        <button className="FormSecondBtn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}