import React from 'react';
import LocalizedStrings from 'react-localization';
import localeMsgs from '../localeMsgs';

let localization = new LocalizedStrings(localeMsgs);

const Contact = (props) => {
    const [title, setTitle] = React.useState('');
    const [name, setName] = React.useState(props.userInfo.name);
    const [email, setEmail] = React.useState(props.userInfo.email);
    const [phone, setPhone] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [text, setText] = React.useState('');
    const [emailValid, setEmailValid] = React.useState(false);
    const [phoneValid, setPhoneValid] = React.useState(false);

    const handleChangePhone = (e) => {
        let value = e.target.value;
        setPhone(value);
        if (value && value.length == 10 && !isNaN(parseFloat(value)) && isFinite(value))
            setPhoneValid(true);
        else
            setPhoneValid(false);
    }

    const handleChangeEmail = (e) => {
        let value = e.target.value;
        setEmail(value);
        if (validateEmail(value))
            setEmailValid(true);
        else
            setEmailValid(false);
    }

    const handleClickSend = (e) => {
        console.log({
            title, name, email, phone, country, text
        });
        
    }

    $(function () {
        $('.selectpicker').selectpicker();
    });
    localization.setLanguage(props.lang);
    return (
        <main className="pb-5 text-white">
            <div className="bg-image"></div>

            <h1 className="text-center py-5">{localization.contact_us}</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">{localization.title}</label>
                            <input type="text" className="form-control" placeholder={localization.title} onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>{localization.name}</label>
                            <input type="text" className="form-control" placeholder={localization.name} value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>{localization.email}</label>
                            <input type="email" className="form-control is-valid" placeholder={localization.email} value={email} onChange={handleChangeEmail} />
                            {email && email.length > 0 ? emailValid ? <div className="valid-feedback">
                                {localization.valid_feedback}
                            </div> : <div className="non-valid-feedback">{localization.invalid_feedback}</div> : ''}
                        </div>
                        <div className="form-group">
                            <label>{localization.phone}</label>
                            <input type="text" className="form-control is-valid" placeholder={localization.phone} onChange={handleChangePhone} />
                            {
                                phone && phone.length > 0 ? phoneValid ? <div className="valid-feedback">
                                    {localization.valid_feedback}
                                </div> : <div className="non-valid-feedback">{localization.invalid_feedback}</div> : ''}
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label>{localization.country}</label>
                            <select className="form-control selectpicker" id="select-country" data-live-search="true" onChange={(e) => setCountry(e.target.value)}>
                                {localization.countryList.map(item => <option data-tokens={item.id}>{item.name}</option>)}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>{localization.text}</label>
                            <textarea className="form-control" rows="6" placeholder={localization.text} onChange={(e) => setText(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-danger btn-block float-right" onClick={handleClickSend}>{localization.send}</button>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Contact;

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}