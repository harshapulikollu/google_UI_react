import './BreifInfo.css';

export default function BreifInfo() {
    return <div className="breif-info">
        <div className="header">
           <div className="name-work">
           <span className="name">Harsha Pulikollu</span>
           <span className="work">Flutter Developer</span>
           </div>
            <img src="https://avatars.githubusercontent.com/u/22256553?v=4" width="100" height="100" />
        </div>
        <div className="horiz-st-line"></div>
        <div className="text">
            <p>
                Harsha Pulikollu is a 26 years old full stack developer currenlty working at MoneyPlanned. 
                I'm tech entusiastic and loves coding and developing apps and webapps. 
            </p>
            <p>Harsha familiar with <strong>Flutter</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Javascript</strong>, <strong>GoLang</strong> frameworks and programing languages.</p>
            <p><strong>Born:</strong> 23rd January 1997</p>
            <p><strong>Location:</strong> Nellore, Andhra Pradesh</p>
            <p><strong>Current Company:</strong> MoneyPlanned</p>
            <p><strong>Work Location:</strong> Remote</p>
        </div>
        <div className="horiz-st-line"></div>
        <div className="social-links">
            <strong>Contact: </strong>
            <a mailto="harshapulikollu@gmail.com">harshapulikollu@gmail.com</a>
        </div>
    </div>;
}
