import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import GoodDetails from './pages/Catalog/components/Goods/GoodDetails';
import Cart from './pages/Cart/Cart'
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={ store }>
      <Router>
            <Routes>
              <Route path='/' exact Component={Home}/>
              <Route path='/catalog' Component={Catalog} />
              <Route path='/catalog/:id' element={<GoodDetails id={useParams().id} />} />
              <Route path='/cart' Component={Cart} />
            </Routes>
          </Router>
    </Provider>
    
  );
}

export default App;
