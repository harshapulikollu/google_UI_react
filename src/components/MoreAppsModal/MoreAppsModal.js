import './MoreAppsModal.css';

export default function MoreAppsModal(props) {
    if (!props.open) {
        return null;
    }
    return (
        <div className="more-apps-modal" onClick={() => console.log('clicked on modal')}>
            <div className="modal-content">
                <div className="group">
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" alt="here" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" alt="here" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" alt="here" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" alt="here" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" alt="here" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" alt="here" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="group">
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="group">
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                    <div className="item">
                        <img src="https://image.pngaaa.com/572/3306572-middle.png" width="50" height="50" />
                        <span>YouTube</span>
                    </div>
                </div>
            </div>
        </div>
    )
}