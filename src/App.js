import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './screens/Home';
import Header from "./components/Header"
import Footer from './components/Footer';

function App() {
  return (
    <Router>


    <Routes>
 
      
      <Route path="/" element={<Home header={<Header/>} footer={<Footer/>}/>} />
    
  
    </Routes>
  </Router>
  );
}

export default App;
