import './SearchLinks.css';

export default function SearchLinks() {
    const results = [{title: 'Download resume', url:'https://raw.githubusercontent.com/harshapulikollu/harsha_portfolio/main/public/assets/Harsha_resume.pdf', desc:'Download Harsha Pulikollu\'s latest resume by clicking here', type:'pdf'},
    {title:'Harsha Pulikollu - Flutter Developer... - LinkedIn', url:'https://www.linkedin.com/in/harshapulikollu/', desc:'Flutter developer. Flutter, JavaScript, React, Node.js, GoLang... Nellore, India.', type:'link'},
{title:'harshapulikollu (Harsha Pulikollu) · GitHub', url:'https://github.com/harshapulikollu/', desc:'Harsha Pulikollu harshapulikollu.. Working remotely. Follow. Distinguished Engineer at MoneyPlanned. Studied B.Tech computer ...', type:'link'},
{title:'Harsha pulikollu - Stack Overflow', url:'https://stackoverflow.com/users/10250044/harsha-pulikollu', desc:'Harsha pulikollu. 2,358 ○15 ○28. Profile · Activity. Checkout all the answers and my activity in stack overflow...', type:'link'},
{title:'Harsha pulikollu - Quora', url:'https://www.quora.com/profile/Harsha-pulikollu-1', desc:'Take a look into answers I answered in Quora...', type:'link'},
{title:'Harsha Pulikollu (@PulikolluHarsha) | Twitter', url:'https://twitter.com/PulikolluHarsha', desc:'The latest Tweets from Harsha Pulikollu (@PulikolluHarsha). Flutter Developer || React, Node.js, Javascript, GoLang || Tech-savvy👨‍💻 || Cricket lover🏏 ||. Nellore, India.', type:'link'},];

    return <div className="search-links-div">
       {results.map((itm, idx) => {
           return <div key={idx} className="item">
               <div>
               {itm.type === 'pdf' ? <span className="type">PDF</span>: null}
               <a href={itm.url}>{itm.url}</a>
               </div>
               <div >
               <a href={itm.url} className="title" target="_blank">{itm.title}</a>
                <p className="desc">{itm.desc}</p>
               </div>
           </div>
       })}
    </div>
}
