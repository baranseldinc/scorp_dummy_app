import LocalizedStrings from 'react-localization';
import localeMsgs from '../localeMsgs';

let localization = new LocalizedStrings(localeMsgs);

const HomePage = (props) => {
    localization.setLanguage(props.lang);
    return (
        <main className="pb-5 text-white">
            <div className="bg-image"></div>

            <h1 className="text-center py-5">DummyApp</h1>
            <div className="container">
                <p> {localization.home_text}</p>
            </div>
        </main>
    )
}
export default HomePage;