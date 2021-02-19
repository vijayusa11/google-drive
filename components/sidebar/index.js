import React from 'react'
import NewFile from './NewFile'
import SidebarItem from './SidebarItem'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ScheduleIcon from '@material-ui/icons/Schedule';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import '../../styles/Sidebar.css';

function index() {
    return (
        <div className='sidebar'>
            <NewFile />
            <div className='sidebar__itemaContainer'>
                <SidebarItem arrow icon={<InsertDriveFileIcon/>} label='My Drive'/>
                <SidebarItem icon={<PeopleAltIcon/>} label='Shared with me'/>
                <SidebarItem icon={<ScheduleIcon/>} label='Recent'/>
                <SidebarItem icon={<StarBorderIcon/>} label='Starred'/>
                <SidebarItem icon={<DeleteIcon/>} label='Bin'/>
                <hr />
                <SidebarItem icon={<CloudQueueIcon/>} label='Storage'/>
            </div>
        </div>
    )
}

export default index
