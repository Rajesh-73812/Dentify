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
import PackageList from './Package/PackageList.jsx';
import PackageAdd from './Package/PackageAdd.jsx';
import PendingBook from './Booking/PendingBook.jsx';
import Settings from './Setting/Settings.jsx';
import ApprovedBook from './Booking/ApprovedBook.jsx';
import CheckInBook from './Booking/CheckInBook.jsx';
import CompletedBook from './Booking/CompletedBook.jsx';
import CancelledBook from './Booking/CancelledBook.jsx';
import UserList from './UserList/UserList.jsx';
import PageList from './Page/PageList.jsx';
import PageAdd from './Page/PageAdd.jsx';
import FaqList from './Faq/FaqList.jsx';
import FaqAdd from './Faq/FaqAdd.jsx';
import ProtectedRoute from './ProtectedRoute.js';

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


          <Route path='/package-list' element={<PackageList />}></Route>
          <Route path='/create-package' element={<PackageAdd />}></Route>


          <Route path='/page-list' element={<PageList />}></Route>
          <Route path='/create-page' element={<PageAdd />}></Route>


          <Route path='/faq-list' element={<FaqList />}></Route>
          <Route path='/create-faq' element={<FaqAdd />}></Route>


          <Route path='/pending-book-list' element={<PendingBook />}></Route>
          <Route path='/approved-book-list' element={<ApprovedBook />}></Route>
          <Route path='/check-in-list' element={<CheckInBook />}></Route>
          <Route path='/completed-list' element={<CompletedBook />}></Route>
          <Route path='/cancelled-list' element={<CancelledBook />}></Route>

          {/* for profile */}
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='/user-list' element={<UserList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
