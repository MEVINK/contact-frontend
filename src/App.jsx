
import './App.css';
import Add from './Components/Add';
import Admin from './Components/Admin';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {Route,Routes} from 'react-router-dom'
import View from './Components/View';
import Edit from './Components/Edit';
import PageNotFound from './Components/PageNotFound';
import Home from './Components/Home';

function App() {
  return (
    <div className="App text-center">
     <Header/>
     <Routes>
     <Route path='/'element={<Home/>}/>
      <Route path='/admin'element={<Admin/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/view/:id'element={<View/>}/>
      <Route path='/edit/:id'element={<Edit/>} />
      <Route path='*' element={<PageNotFound/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
