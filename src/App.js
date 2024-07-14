import './App.css';
import LandingPage from './screens/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './screens/signupscreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
