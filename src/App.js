import logo from './logo.svg';
import './App.css';
import Home from './components/page/Home/Home';
import { Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
      </Routes>
  
    </div>
  );
}

export default App;
