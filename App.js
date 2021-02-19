import { useState } from 'react';
import './App.css';
import FilesView from './components/filesview/FilesView';
import Header from './components/header/index'
import Sidebar from './components/sidebar'
import SideIcons from './components/sideIcons'
import { auth, provider } from './firebase';

function App() {
  const [user, setUser] = useState();
  const handleLogin = (e) => {
      e.preventDefault();
      if(!user) {
        auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        console.log(user);
      }
  }
return (
    <div className="app">
      {!user ? (
          <div className='app__login'>
              <img src='https://seeklogo.com/images/G/google-drive-logo-ED4F6E7476-seeklogo.com.png' alt='Vijay Drive' />
              <button onClick={handleLogin} className='app__login--button'>Sign In</button>
          </div>
      ) : (
        <>
        <Header userPhoto={user.photoUrl} />
        <div className='app__main'>
          <Sidebar />
          <FilesView />
          <SideIcons />
        </div>
        </>
      )}
      
    </div>
  );
}

export default App;
