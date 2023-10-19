import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './componentes/login';
import Monitoramento from './componentes/monitoramento';
import SpinnerComponent from './componentes/spinner';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/monitoramento' element={<Monitoramento/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
