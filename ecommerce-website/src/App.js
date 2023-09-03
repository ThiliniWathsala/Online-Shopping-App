import './App.css';

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import './index.css'
import NotFound from './components/NotFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="w-auto scroll-none">
      <Router>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/not-found' exact element={<NotFound />} />
          <Route path='/' exact element={<Home />} />
          <Route path="*" element={<NotFound to ="/not-found" />}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
