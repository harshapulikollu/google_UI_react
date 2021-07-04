import './MainResults.css';
import BreifInfo from '../BreifInfo/BreifInfo';
import SearchLinks from '../SearchLinks/SearchLinks';

export default function MainResults() {
    return (<div className="results-main">
        <SearchLinks />
        <BreifInfo />
    </div>);
}