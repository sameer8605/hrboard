import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/home' Component={Home}></Route>
        <Route exact path='/' Component={Login}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
