import './App.css';
import {signInWithGoogle} from './Firebase.js'
import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPhoto(localStorage.getItem("photo"));
  }, []);

  return (
    <div className="App">
    <div className="login-card">
    <div className='login-header'>
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-google-152-189813.png" alt="Google icon" width={50} height={50} className="google-icon" />
    <h1>Google Authentication</h1>
    </div>
      <div className="user-info">
        {photo && <img src={photo} alt="Profile" />}
        <h2>{name}</h2>
        <h2>{email}</h2>
      </div>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  </div>
  );
}

export default App;
