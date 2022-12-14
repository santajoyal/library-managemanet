import logo from './logo.svg';
import './App.css';
import "./css/sb-admin-2.css";
import "./css/fontawesome-free/css/all.min.css";
import { useContext } from 'react';
import { UserContext } from './Usercontext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Portal from './Portal';
import Books from './Books';
import Createbooks from './Createbooks';
import Editbooks from './Editbooks';

function App() {
  const userdata = useContext(UserContext);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/portal' element={<Portal/>}>
      <Route path='books' element={<Books/>}></Route>
      <Route path='create-book' element={<Createbooks/>}></Route>
      <Route path='edit-book/:id' element={<Editbooks/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
