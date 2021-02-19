import React from 'react';
import '../../styles/FileItem.css'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
const monthNames = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function FileItem({ id, timestamp, caption, fileUrl, size }) {
    const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth() ]} ${timestamp?.toDate().getFullYear()}` ;
    
    const getReadableFileSizeString = (fileSizeInBytes) => {
        let i= -1;
        const byteUnits = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB']
        do {
            fileSizeInBytes  = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024)
        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
        };
    
    
    return (
        <div className='fileItem'>
            <a href={fileUrl} target='_blank' download>
            <div className='fileItem--left'>
                <InsertDriveFileIcon />
                <p>{caption}</p>
            </div>
            <div className='fileItem--right'>
                <p className='fileItem--right--p'>{fileDate}</p>
                <p>{getReadableFileSizeString(size)}</p>
            </div>
            </a>
        </div>
    )
    }

export default FileItem;
