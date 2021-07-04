import './AutoCompleteModal.css';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Link } from 'react-router-dom';

export default function AutoCompleteModal(props) {

    const recommendations = [{ text: "Harsha Pulikollu", url: "/bio" }, { text: "Harsha GitHub", url: "https://github.com/harshapulikollu/" }, { text: "Harsha linkedIn", url: "https://www.linkedin.com/in/harshapulikollu/" }];

    if (!props.open) {
        return null;
    }

    return <div className='auto-complete-main'>{recommendations.map((itm, idx) => {
        return <Link key={idx} className="recommendation-item" to={itm.url}>
            <ScheduleIcon className="icon" color="gray" fontSize="small" />
            {itm.text}</Link>
    })}</div>
}

