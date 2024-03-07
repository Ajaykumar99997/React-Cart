import './styles/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
