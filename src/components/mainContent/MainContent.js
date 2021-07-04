import { useState, useEffect, useRef} from 'react';
import './MainContent.css';
import LanguageLinks from './languageLinks/LanguageLinks';
import SearchIcon from '@material-ui/icons/Search';
import AutoCompleteModal from '../autoCompleteModal/AutoCompleteModal';

export default function MainContent() {
    const [showModal, toggleModal] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const refInput = useRef();

    useEffect(() => {
        const listener = (e) => {
            if(e.code === 'Enter' || e.code === 'NumpadEnter'){
                e.preventDefault();
                let data = localStorage.getItem('recentSearches') || [];
                let newData = [data,refInput.current.value];
                localStorage.setItem('recentSearches', newData);
            }
        } 
        document.addEventListener('keydown', listener);

        return() => {
            document.removeEventListener('keydown', listener);
        }
    }, [])


    const onInputActive = (e) => {
        if (e.target.value === '') {
            toggleModal(false);
        } else {
            toggleModal(true);
        }
    }



    return (
        <div className="main-content">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                width='272dp'
                height='92dp' />
            <form className="form">
                <div className="form-main">
                <SearchIcon className="search-icon" />
                <input className="input" type='text'
                    autoComplete="off"
                    autoCorrect="off"
                    autoFocus
                    value={inputValue}
                    ref={refInput}
                    onChange={(e) => setInputValue(e.target.value)}
                    onClick={onInputActive}
                    onKeyUp={onInputActive} />
                </div>
                <AutoCompleteModal 
                open={showModal}
                input={inputValue}/>
            </form>
            <div className="buttons">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            <LanguageLinks />
        </div>
    )
}