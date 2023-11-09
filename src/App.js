import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos!'} />} />
        <Route path='/category/:id' element={<ItemListContainer greeting={'Bienvenidos!'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
