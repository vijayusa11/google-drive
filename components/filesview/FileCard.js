import React from 'react'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import '../../styles/fileCard.css';

function FileCard({ name }) {
    return (
        <div className='fileCard'>
            <div className='fileCard--top'>
                <InsertDriveFileIcon style={{fontSize : 120, color: 'gray'}}/>
            </div>
            <div className='fileCard--bottom'>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard
