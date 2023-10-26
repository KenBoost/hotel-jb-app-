
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Rooms from './pages/Rooms';



function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
     </Router>
  );
}

export default App;
