import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import LocalizedStrings from 'react-localization';
import localeMsgs from '../localeMsgs';
import { useHistory } from "react-router-dom";


let localization = new LocalizedStrings(localeMsgs);

export default function Navbar(props) {
    const history = useHistory();

    const handleChangeLanguage = (e, lang) => {
        e.preventDefault();
        props.handleChangeLanguage(lang);
    }

    const handleClickLogout = (e) => {
        e.preventDefault();
        props.logout();
        history.push('/');
    }

    localization.setLanguage(props.lang);
    window.openModalll = () => props.setShowModal(true);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand mr-5" to="/"><i className="fab fa-sketch"></i> DummyApp</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <span style={{ 'color': 'rgb(205, 218, 219)', 'position': 'relative', 'top': '2px' }}>{props.pageName}</span>
                <ul className="navbar-nav ml-auto">


                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">{localization.home}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">{localization.contact_us}</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            {localization.change_lang}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="" onClick={(e) => handleChangeLanguage(e, 'tr')} value="tr">Türkçe (TR)</a>
                            <a className="dropdown-item" href="" onClick={(e) => handleChangeLanguage(e, 'en')} value="en">English (EN)</a>
                        </div>
                    </li>
                </ul>
                {props.userInfo ?
                    <a href="" className="nav-link" onClick={handleClickLogout}>{props.userInfo.name} <i className="fas fa-sign-out-alt"></i></a>
                    :
                    <NavLink to="/login" className="nav-link"><i className="fas fa-sign-in-alt"></i> {localization.login}</NavLink>
                }
            </div>
        </nav >

    )
}
