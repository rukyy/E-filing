import './App.css';
import LandingPage from './screens/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './screens/signupscreen';
import SignIn from './screens/signinscreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/signin' element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
