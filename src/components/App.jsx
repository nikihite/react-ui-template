import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Holidays from './Holidays/Holidays';
import Layout from './Page/Layout';

export default function App() {
  return (
    <Router>
      <Route element={<Layout />}/>
      <Routes>
        <Route index element={<Holidays />}/>
      </Routes>
    </Router>
  );}
