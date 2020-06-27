import React, { useState } from 'react'
import { Button } from 'antd'
import { useHistory } from "react-router-dom";

import BaseUrl from '../utils/BaseUrl'

//css
import '../css/page/LoginRegisterPage.css'
export default function LoginRegisterPage() {
    let history = useHistory();
    //Register
    // Khai báo 1 biến state mới 
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //Login
    const [lEmail, setLEmail] = useState("")
    const [lPassword, setLPassword] = useState("")

    const submitRegister = () => {
        employeeRegister(1, name, email, password)
    }

    const submitLogin = () => {
        employeeLogin(lEmail, lPassword)
    }

    const employeeRegister = async (id, name, email, password) => {
        await fetch(`${BaseUrl}/api/employee/register?angencyId=${id}&employeeName=${name}&employeeEmail=${email}&employeePassword=${password}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        // const json = await response.json()
    }

    function gotoHomePage() {
        let path = "/"
        history.push(path)
        window.location.reload()
    }

    const employeeLogin = async (email, password) => {
        const response = await fetch(`${BaseUrl}/api/employee/login?email=${email}&password=${password}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        console.log(json)
        if (json[0] !== undefined) {
            localStorage.setItem("employeeEmail", json[0].employee_name)
            gotoHomePage()
        }
    }

    return (
        <div>
            <div className="container padding">
                <div className="col-12">
                    <h2> Account</h2>
                </div>
            </div>
            {/* Login */}
            <div id="login-box">
                <div className="left-box">
                    <div className="container">
                        <div className="head-top">
                            <h3>Returning Customer</h3>
                        </div>
                        <form className="needs-validation"></form>
                        <div className="form-group">
                            <label>EMAIL ADDRESS*:</label>
                            <input type="text" className="form-control" onChange={e => setLEmail(e.target.value)} />

                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div className="form-group">
                            <label>PASSWORD:</label>
                            <input type="password" className="form-control" onChange={e => setLPassword(e.target.value)} />

                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" />Remember password.

                                <div className="invalid-feedback">Check this checkbox to continue.</div>
                            </label>
                        </div>
                        {/* Khi người dùng click button. React sẽ re-render component và truyền giá trị của mới vào  */}
                        <Button type="primary" style={{ backgroundColor: "black" }} onClick={() => submitLogin()} className="btn btn-dark btn-block" >Login</Button>

                    </div>

                    <div className="under-box">
                        <div className="signinwith"> </div>
                        <button className="social facebook">Log in with Facebook</button>
                        <button className="social google">Log in with Google+</button>
                    </div>

                </div>
                {/* Register */}
                <div className="right-box">
                    <div className="container">
                        <h3>New Customer</h3>
                        <form className="needs-validation">
                            <div className="form-group">
                                <label>NAME*</label>
                                <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </div>
                            <div className="form-group">
                                <label >EMAIL ADDRESS*</label>
                                <input type="text" className="form-control" onChange={e => setEmail(e.target.value)} />
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </div>

                            <div className="form-group">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label>PASSWORD*</label>
                                                <input className="form-control" onChange={e => setPassword(e.target.value)} />
                                                <div className="invalid-feedback">Please fill out this field.</div>
                                            </td>
                                            <td>
                                                <label >RE-ENTER PASSWORD*</label>
                                                <input className="form-control" />
                                                <div className="invalid-feedback">Please fill out this field.</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>You must use 8 or more characters with a mix of letters, numbers {'&'} symbols.</p>
                            <Button type="primary" style={{ backgroundColor: "black" }} onClick={() => submitRegister()} className="btn btn-dark btn-block" >Register</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
