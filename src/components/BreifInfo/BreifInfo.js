import './BreifInfo.css';

export default function BreifInfo() {
    return <div className="breif-info">
        <div className="header">
           <div className="name-work">
           <span className="name">Harsha Pulikollu</span>
           <span className="work">Full Stack Developer</span>
           </div>
            <img src="https://avatars.githubusercontent.com/u/22256553?v=4" width="100" height="100" />
        </div>
        <div className="horiz-st-line"></div>
        <div className="text">
            <p>
                Harsha Pulikollu is a 24 years Full stack developer currenlty working at DXC Technology. 
                I'm tech entusiastic and loves coding and developing things. 
            </p>
            <p>Harsha familiar with <strong>React</strong>, <strong>Node.js</strong>, <strong>Flutter</strong>, <strong>Javascript</strong>, <strong>Java</strong> frameworks and programing languages.</p>
            <p><strong>Born:</strong> 23rd January 1997</p>
            <p><strong>Location:</strong> Nellore, Andhra Pradesh</p>
            <p><strong>Current Company:</strong> DXC Technology</p>
            <p><strong>Work Location:</strong> Chennai, TamilNadu</p>
        </div>
        <div className="horiz-st-line"></div>
        <div className="social-links">
            <strong>Contact: </strong>
            <a mailto="harshapulikollu@gmail.com">harshapulikollu@gmail.com</a>
        </div>
    </div>;
}