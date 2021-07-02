import './Footer.css';

export default function Footer() {
    return (
        <div>
            <div className="location">
                India
            </div>
            <div className="footer-links">
                <div className="left">
                    <a href="/">About</a>
                    <a href="/">Advertising</a>
                    <a href="/">Business</a>
                    <a href="/">How Search Works</a>
                </div>
                <div className="right">
                    <a href="/">Privacy</a>
                    <a href="/">Terms</a>
                    <a href="/">Settings</a>
                </div>
            </div>
        </div>
    )
}