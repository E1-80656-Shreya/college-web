import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import {Route,Routes} from "react-router-dom";
import Edsuc from "./Edsuc";
import Facilities from "./Facilities";

function App() {
  return (
 <>
 <Routes>
 <Route exact path="/facilities" element={<Facilities/>}></Route>
 <Route exact path ="/facilities/edsuc" element={<Edsuc/>}></Route>
 </Routes>
 </>
  );
}

export default App;
