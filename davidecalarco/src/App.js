import foto from './foto.jpg';
import './App.css';

import Cv from './components/cv'
import Expertise from './components/expertise';

import Image from 'react-bootstrap/Image'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src={foto} roundedCircle={true} fluid={true}></Image>
        <Cv></Cv>
        <Expertise></Expertise>
      </header>
    </div>
  );
}

export default App;
