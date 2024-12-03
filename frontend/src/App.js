import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Log/Login.jsx';
import ForgotPassword from './Log/ForgotPassword.jsx';
import SetNewPassword from './Log/SetNewPassword.jsx';
import SendOTP from './Log/SendOTP.jsx';
import Dashboard from './Dashboard.jsx';
import CountryAdd from './Country/CountryAdd.jsx';
import CountryList from './Country/CountryList.jsx';
import CategoryAdd from './Category/CategoryAdd.jsx';
import CategoryList from './Category/CategoryList.jsx';
import CupponAdd from './Cuppon/CupponAdd.jsx';
import CupponList from './Cuppon/CupponList.jsx';
import Profile from './Account/Profile.jsx';


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
          <Route path='/add-category' element={<CategoryAdd />}></Route>
          <Route path='/category-list' element={<CategoryList />}></Route>


          <Route path='/add-cuppon' element={<CupponAdd />}></Route>
          <Route path='/cuppon-list' element={<CupponList />}></Route>

          {/* for profile */}
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
