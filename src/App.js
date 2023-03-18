import logo from './logo.svg';
import './App.css';
import CompBoleta from './boleta/BoletaComp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompBoleta></CompBoleta>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
