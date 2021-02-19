import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import FileItem from './FileItem';
import '../../styles/FilesView.css';
import FileCard from './FileCard';
function FilesView() {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                key: doc.id,
                item: doc.data(),
            })))
        })
    }, [])
    return (
        <div className='filesView'>
            <div className='filesView__row'>
                {
                    files.slice(0, 5).map(({id, item}) => (
                        <FileCard name={item.caption.substring(0, 3) + '..' + item.caption.slice(-6)}/>
                    ))
                }
              
            </div>
            <div className='filesView__titles'>
                <div className='filesView__titles--left'>
                    <p>Name</p>
                </div>
                <div className='filesView__titles--right'>
                    <p className='filesView__titles--right--p'>Last Modified</p>
                    <p>Files Size</p>
                </div>
            </div>
            {
                files.map(({id, item}) =>(
                    <FileItem id={id} timestamp={item.timestamp} caption={item.caption} fileUrl={item.fileUrl} size={item.size}/>
                ))
            }
        </div>
    )
}

export default FilesView
