
import './App.css';
import Category from './Component/Category';
import Search from './Component/Search';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Search />
      <Outlet />
    </div>
  );
}

export default App;
