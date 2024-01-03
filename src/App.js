
import './App.css';
import {Routes,Route} from "react-router-dom"
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';
import Coinsdetails from './components/Coinsdetails';
function App() {
  return (
   <Routes>
    <Route path='/' element={<Exchanges/>}/>
    <Route path='/coins' element={<Coins/>}/>
    <Route path='/coins/:id' element={<Coinsdetails/>}></Route>
    


    
   </Routes>
  );
}

export default App;
