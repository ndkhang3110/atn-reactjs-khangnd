import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import { Affix } from 'antd';

//css
import '../css/component/Navbar.css'

export default function NavBar() {
    const [employeeName, setEmployeeName] = useState("")


    useEffect(() => {
        const name = localStorage.getItem("employeeEmail")
        setEmployeeName(name)
    }, [])

    const showName = () => {
        if (employeeName != null) {
            return <h5 style={{color: 'white', marginTop: '10px'}} >{employeeName}</h5>
        } else {
            return <UserOutlined style={{ fontSize: "5vh", color: 'white' }} />
        }
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light   ">
                <div className="container-fluid">
                    <Link className="navbar-branch" to="/">
                        <img src={require('../assets/logo/logotoy2.jpg')} height="80" alt="..." width="200" border="2px" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login-register">{showName()}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" ><p style={{ fontSize: "3vh", color: 'white' }}>|</p></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart" ><ShoppingCartOutlined style={{ fontSize: "5vh", color: 'white' }} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr className="gach" />
            <Affix>
                <nav className="navbar navbar-expand-lg navbar-light shadow sticky-top">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'white' }} to="/Lego"><b>LEGO</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'white' }} to="/Sport"><b>SPORT TOYS</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'white' }} to="/AddItem"><b>ADD ITEM</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'white' }} to="/OrderList"><b>ORDER LIST</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'white' }} to="/AddOrder"><b>ADD ORDER</b></Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search for brand, etc." aria-label="Search." />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><SearchOutlined style={{ fontSize: "3.5vh" }} /></button>

                            </form>
                        </div>
                    </div>
                </nav>

            </Affix>
            <br />
        </header>
    )
}
