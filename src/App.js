import './App.css';
import LandingPage from './screens/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './screens/signupscreen';
import SignIn from './screens/signinscreen';
import PayBill from './screens/paybill';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/signin' element={<SignIn/>}/>
        <Route exact path='/payment' element={<PayBill/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
