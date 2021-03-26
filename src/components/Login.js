import LocalizedStrings from 'react-localization';
import localeMsgs from '../localeMsgs';
import { useHistory } from "react-router-dom";

let localization = new LocalizedStrings(localeMsgs);
const Login = (props) => {
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
        }
    }

    localization.setLanguage(props.lang);
    return (
        <main className="pb-5 text-white">
            <div className="bg-image"></div>

            <h1 className="text-center py-5">{localization.login}</h1>
            <div className="container">
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

                        <button type="button" className="btn btn-block btn-danger" onClick={handleClickLogin}>{localization.login}</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;