import './LanguageLinks.css';

export default function LanguageLinks() {
    const languages = [" हिन्दी ", "বাংলা ", "తెలుగు ", "मराठी ", "தமிழ் ", "ગુજરાતી ", "ಕನ್ನಡ ", "മലയാളം ", "ਪੰਜਾਬੀ "];
    return (
        <div className="links-div">
            Google offerend in: 
            {languages.map(language => <a key={language} href="#" >{language}</a>)}
        </div>
    )
}