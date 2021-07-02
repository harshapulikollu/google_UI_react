import {useState} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import './Navbar.css';
import MoreAppsModal from '../MoreAppsModal/MoreAppsModal';

export default function Navbar(){
    const [showModal, toggleModal] =  useState(false);

    const handleMoreApps = () => {
        toggleModal(!showModal);
    }

    return(
        <div>
            <div className="navbar">
            <a href="#">Gmail</a>
            <a href="#">Images</a>
            <AppsIcon className="icon" onClick={handleMoreApps}/>
            <AccountCircleIcon className="icon"/>
        </div>
        <MoreAppsModal open={showModal}/>
        </div>
    )
}