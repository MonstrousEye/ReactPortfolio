import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Nav';
import Carousell from './Components/Carousell';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

<NavBar/>
<Carousell/>
<div>
<hr></hr>
<About/>
</div>
<Project/>
<hr></hr>
<Contact/>
<Footer/>
</div>
  
 );
}

export default App;
