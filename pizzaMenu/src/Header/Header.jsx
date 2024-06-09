import './Header.css';
import LogIn from '../profile/Login.jsx';

function Headerbar() {
    return (
        <header className="Header1">
            <input type="text" className="searchbar" placeholder="search.."/>
              <LogIn/>
        </header>
    );
}

export default Headerbar;