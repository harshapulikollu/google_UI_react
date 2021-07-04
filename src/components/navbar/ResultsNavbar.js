import './ResultsNavbar.css';
import SearchIcon from '@material-ui/icons/Search';

export default function ResultsNavbar() {

    const handleHomeClick = (e) => {
        window.location.href = '/';
    }

    return <div className="results-navbar">
        <div className="left">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                width='90dp'
                height='30dp' />
            <form className="form">
            <input type="text" defaultValue='Harsha Pulikollu'/>
            <div className="st-line"></div>
            <SearchIcon className="search-icon" />
            </form>
        </div>
        <button className="right" onClick={handleHomeClick}>Go Home</button>
    </div>
}