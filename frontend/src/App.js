import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Log/Login.jsx';
import ForgotPassword from './Log/ForgotPassword.jsx';
import SetNewPassword from './Log/SetNewPassword.jsx';
import SendOTP from './Log/SendOTP.jsx';
import OtpVerfication from './Log/OtpVerfication.jsx';
import DashBoard from './DashBoard.jsx';
import CourseList from './Courses/CourseList.jsx';
import CreateCourse from './Courses/CreateCourse.jsx';
import JobsList from './Jobs/JobsList.jsx'
import CreateJobs from './Jobs/CreateJobs.jsx'
import MaterialList from './Material/MaterialList.jsx'
import CreateMaterial from './Material/CreateMaterial.jsx'
import ProductList from './Product/ProductList.jsx'
import CreateProduct from './Product/CreateProduct.jsx'
import AddRoles from './Roles/AddRoles.jsx'
import ServiceList from './Service/ServiceList.jsx'
import CreateService from './Service/CreateService.jsx'
import ServiceProviderList from './ServiceProvider/ServiceProviderList.jsx'
import CreateServiceProvider from './ServiceProvider/CreateServiceProvider.jsx'
import UserList from './Users/UserList.jsx'
import CreateUser from './Users/CreateUser.jsx'
import RoleList from './Roles/RoleList.jsx';
import DashBoard2 from './Dashboard2.jsx';
import Login2 from './Log/Login2.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
          <Route path='/sendOTP' element={<SendOTP />}></Route>
          <Route path='/sendOTP' element={<SendOTP />}></Route>
          <Route path='/otpVerfication' element={<OtpVerfication />}></Route>
          <Route path='/setNewPassword' element={<SetNewPassword />}></Route>

          <Route path='/dashBoard' element={<DashBoard />}></Route>
          <Route path='/course-list' element={<CourseList />}></Route>
          <Route path='/create-course' element={<CreateCourse />}></Route>
          <Route path='/job-list' element={<JobsList />}></Route>
          <Route path='/create-job' element={<CreateJobs />}></Route>

          <Route path='/material-list' element={<MaterialList />}></Route>
          <Route path='/create-material' element={<CreateMaterial />}></Route>
          <Route path='/product-list' element={<ProductList />}></Route>
          <Route path='/create-product' element={<CreateProduct />}></Route>
          <Route path='/create-role' element={<AddRoles />}></Route>
          <Route path='/role-list' element={<RoleList />}></Route>

          <Route path='/service-list' element={<ServiceList />}></Route>
          <Route path='/create-service' element={<CreateService />}></Route>
          <Route path='/service-provider-list' element={<ServiceProviderList />}></Route>
          <Route path='/create-service-rovider' element={<CreateServiceProvider />}></Route>

          <Route path='/user-list' element={<UserList />}></Route>
          <Route path='/create-user' element={<CreateUser />}></Route>



          {/* new */}
          <Route path='/dashBoard2' element={<DashBoard2 />}></Route>
          <Route path='/login2' element={<Login2 />}></Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
