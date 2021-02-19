import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import '../../styles/SideIcons.css'

function index() {
    return (
        <div className='sideIcons'>
            <div className='sideIcons__top'>
                <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png' alt='Vijay Calendar' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png'  alt='Vijay Keep'/>
                <img src='https://image.pngaaa.com/566/2512566-middle.png'  alt='Vijay Tasks'/>
            </div>
            <hr />
            <div className='sideIcons__plusIcon'>
                <AddIcon />
            </div>

        </div>
    )
}

export default index
