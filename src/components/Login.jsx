import React, { useState } from "react";
import '../styles.css'

export const Login = (props) => {
    const [userEmail, setuserEmail] = useState('');
    const [userPass, setuserPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userEmail);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="Formlabel" htmlFor="email">email</label>
                <input id="userEmail" minLength={1} name="userEmail" className="Forminput" value={userEmail} onChange={(u) => setuserEmail(u.target.value)}type="email" placeholder="youremail@gmail.com"  />
                <label className="Formlabel" htmlFor="password">password</label>
                <input id="userPass" minLength={1}  name="userPass" className="Forminput" value={userPass} onChange={(u) => setuserPass(u.target.value)} type="password" placeholder="********"  />
                <button className="Formbutton" type="submit" onClick={() => {
                    if(document.getElementById('userEmail').value != '' && document.getElementById('userPass').value != ''){
                        window.location.href='/home'
                    }}}>Log In</button>
            </form>
            <button  className="FormSecondBtn" onClick={() => props.onFormSwitch('register')}>If you dont have an account, click to Register.</button>
        </div>
    )
}