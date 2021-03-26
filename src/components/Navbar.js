import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import LocalizedStrings from 'react-localization';
import localeMsgs from '../localeMsgs';
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

let localization = new LocalizedStrings(localeMsgs);

export default function Navbar(props) {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    const handleClickLogin = () => {
        if (title && name && email && password) {
            var userInfo = { title, name, email, password }
            props.setUserInfo(userInfo);
            history.push('/');
            handleClose();
        }
    }

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
                    <a href="" className="nav-link" onClick={(e) => { e.preventDefault(); handleShow(); }}><i className="fas fa-sign-in-alt"></i> {localization.login}</a>
                }
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{localization.login}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="form-group">
                                <label>{localization.title}</label>
                                <input type="text" className="form-control" placeholder={localization.title} onChange={(e) => setTitle(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>{localization.name}</label>
                                <input type="text" className="form-control" placeholder={localization.name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="form-group">
                                <label>{localization.email}</label>
                                <input type="email" className="form-control" placeholder={localization.email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>{localization.password}</label>
                                <input type="password" className="form-control" placeholder={localization.password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-block btn-danger" onClick={handleClickLogin}>{localization.login}</button>
                </Modal.Footer>
            </Modal>
        </nav >

    )
}
