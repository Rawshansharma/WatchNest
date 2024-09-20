import { BrowserRouter as Router } from "react-router-dom";
import Routess from "./Routes/Route";
import { AuthProvider } from './context/Authcontext';


function App() {
  return (
    <AuthProvider>
     <Router>
       <Routess/>
     </Router>
   </AuthProvider>

  );
}

export default App;
