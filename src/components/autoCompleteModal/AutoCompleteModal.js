import './AutoCompleteModal.css';
import ScheduleIcon from '@material-ui/icons/Schedule';

export default function AutoCompleteModal(props) {

    const recommendations = [{ text: "Harsha Pulikollu", url: "/harshapulikollu" }, { text: "Harsha GitHub", url: "https://www.github.com/harshapulikollu" }, { text: "Harsha linkedIn", url: "https://www.linkedin.com/in/harshapulikollu/" }];

    if (!props.open) {
        return null;
    }

    return <div className='auto-complete-main'>{recommendations.map((itm, idx) => {
        return <a key={idx} className="recommendation-item" href={itm.url}>
            <ScheduleIcon className="icon" color="gray" fontSize="small" />
            {itm.text}</a>
    })}</div>
}

