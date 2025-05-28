
import './App.css';
import NavBar from './routes/NavBar.js';
import { Route, Routes } from 'react-router-dom';
import Usuarios from './pages/Usuarios.js';
import AgregarUsuario from './pages/AgregarUsuario.js';

function App() {
  return (
    <div className="Gestor">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Usuarios/>}></Route>
        <Route path='/agregarUsuario' element={<AgregarUsuario/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
