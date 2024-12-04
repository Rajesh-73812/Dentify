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
import PaymentGatewayList from './PaymentGateway/PaymentGatewayList.jsx';
import EnquiryList from './Enquiry/EnquiryList.jsx';
import PayOutList from './PayOut/PayOutList.jsx';
import PropotiesList from './Propoties/PropotiesList.jsx';
import PropotiesAdd from './Propoties/PropotiesAdd.jsx';
import ExtraImageList from './ExtraImage/ExtraImageList.jsx';
import ExtraImageAdd from './ExtraImage/ExetraImageAdd.jsx';
import FacilityList from './Facility/FacilityList.jsx';
import FacilityAdd from './Facility/FacilityAdd.jsx';
import GalleryCategoryList from './GalleryCategory/GalleryCategoryList.jsx';
import GalleryCategoryAdd from './GalleryCategory/GalleryCategoryAdd.jsx';
import GalleryList from './Gallery/GalleryList.jsx';
import GalleryAdd from './Gallery/GalleryAdd.jsx';


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


          <Route path='/payment-list' element={<PaymentGatewayList />}></Route>
          <Route path='/enquiry-list' element={<EnquiryList />}></Route>


          <Route path='/payout-list' element={<PayOutList />}></Route>
          <Route path='/enquiry-list' element={<EnquiryList />}></Route>


          <Route path='/property-list' element={<PropotiesList />}></Route>
          <Route path='/create-property' element={<PropotiesAdd />}></Route>


          <Route path='/extra-image-list' element={<ExtraImageList />}></Route>
          <Route path='/create-extra-image' element={<ExtraImageAdd />}></Route>


          <Route path='/facility-list' element={<FacilityList />}></Route>
          <Route path='/create-facility' element={<FacilityAdd />}></Route>


          <Route path='/gallery-category-list' element={<GalleryCategoryList />}></Route>
          <Route path='/create-gallery-category' element={<GalleryCategoryAdd />}></Route>


          <Route path='/gallery-list' element={<GalleryList />}></Route>
          <Route path='/create-gallery' element={<GalleryAdd />}></Route>

          {/* for profile */}
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
