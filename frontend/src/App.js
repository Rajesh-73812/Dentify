import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Log/Login.jsx';
import ForgotPassword from './Log/ForgotPassword.jsx';
import SetNewPassword from './Log/SetNewPassword.jsx';
import SendOTP from './Log/SendOTP.jsx';
import Dashboard from './Dashboard.jsx';
import CountryAdd from './Country/CountryAdd.jsx';
import CountryList from './Country/CountryList.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
          <Route path='/sendotp' element={<SendOTP />}></Route>
          <Route path='/setnewpassword' element={<SetNewPassword />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>


          <Route path='/add-country' element={<CountryAdd />}></Route>
          <Route path='/country-list' element={<CountryList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
