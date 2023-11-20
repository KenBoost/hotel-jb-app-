
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import Reservation from './pages/Reservation'



function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="reservation" element={<Reservation/>} />
        </Route>
      </Routes>
     </Router>
  );
}

export default App;
