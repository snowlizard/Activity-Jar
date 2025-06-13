import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './store.js'
import './index.css'
import Menu from './components/Menu.jsx';
import { Jar } from './pages/index.jsx';
import { Activities } from  './pages/activities.jsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={ <Jar /> } />
          <Route path='/activities' element={ <Activities /> } />
        </Routes>
    </BrowserRouter>
  </Provider>
);