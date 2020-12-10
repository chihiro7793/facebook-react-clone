import React from 'react';
import Row from './Row';
import './Sidebar.css';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EventIcon from '@material-ui/icons/Event';
import HistoryIcon from '@material-ui/icons/History';
import BookmarkIcon from '@material-ui/icons/Bookmark';

function Sidebar() {
    return (
        <div className='sidebar'>
            <Row src='./logo192.png' title='Haleh Ghoreishi' />
            <Row Icon={LocalHospitalIcon}
                title="COVID-19 Information Center" />
            <Row Icon={PeopleAltIcon} title="Friends" />
            <Row Icon={OndemandVideoIcon} title="Videos" />
            <Row Icon={EventIcon} title="Events" />
            <Row Icon={HistoryIcon} title="Memories" />
            <Row Icon={BookmarkIcon} title="Saved" />
        </div>
    )
}

export default Sidebar;
