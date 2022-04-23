import "./Assests/css/style.css"
import CardCountries from "./component/CardCountries"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import CardCountry from "./component/CardCountry"

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Navbar />}> 
          <Route index element={<CardCountries />} />
          <Route path=":alpha2Code"  element={<CardCountry />}/>
        </Route>
        <Route 
        path='*'
        element={
          <div >
            <h2>Page not found! <br></br>Error 404</h2>
          </div>
        }/>
      </Routes>
    </div>
  );
}

export default App;
