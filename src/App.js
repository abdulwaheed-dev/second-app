import './App.css';
import Signup from './Signup';
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Categories from './Categories';
import CatOne from './CatOne';
import CatTwo from './CatTwo';

function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
     {/* <Signup></Signup> */}
     <Routes>
       <Route path = '/' element={<Home />} />
       <Route path = 'about' element={<About />} />
       <Route path = 'signup' element={<Signup />} />
       <Route path = 'categories' element={<Categories/>} >
        <Route path = 'cat1' element={<CatOne />} />
        <Route path = 'cat2' element={<CatTwo />} />
       </Route>
     </Routes>
    </div>
  );
}

export default App;
