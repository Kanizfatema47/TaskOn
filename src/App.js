import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Error from './Components/Error'
import ToDoList from './Components/Home/ToDo/ToDoList';

function App() {
  return (

  <div>
      <Header> </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='todo' element={<ToDoList></ToDoList>}/>
        <Route path='*' element={<Error></Error>}/>
      </Routes>
    <Footer></Footer>
  </div>
    
  );
}

export default App;
