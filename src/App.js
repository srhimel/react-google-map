import logo from './logo.jpg'
import { useRef, useState } from 'react';
import './App.css';
import Maps from './components/Maps';

function App() {
  const [origin, setOrigin] = useState('');
  const originRef = useRef();
  const handleSubmit = (e) => {

    setOrigin(originRef.current.value);
    e.preventDefault();
  }
  return (
    <div className="map-container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={originRef} placeholder="Your Location" />
          <input type="submit" value="Search" />
        </form>
      </div>

      <Maps origin={origin} />
    </div>
  );
}

export default App;
