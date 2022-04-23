import './App.css';
import {useState} from 'react'
import Dashboard from "./page/Dashboard";
import Ability from './components/Ability';
import CheckLogin from "./page/checkLogin";
import {Route, Routes} from 'react-router-dom'
import Login from "./page/login";
import RequierdAuth from "./page/RequierdAuth";
function App() {
  const [userLogin, setUserLogin] = useState(false)

  return (
    <CheckLogin.Provider value={{userLogin, setUserLogin}}>
      <Routes>
        <Route path='/' element={<Ability />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/dashboard' element={<RequierdAuth ><Dashboard/></RequierdAuth>}/>
        
      </Routes>
    </CheckLogin.Provider>
  );
}

export default App;
