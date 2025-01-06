import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { json, Link, useLocation, useNavigate } from "react-router-dom";
import SidebarMenu from "../components/SideBar";
import axios from "axios";
import ImageUploader from "../common/ImageUploader";
import Select from 'react-select';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import api from "../utils/api";
import { RxCrossCircled } from "react-icons/rx";
import { NotificationContainer, NotificationManager } from "react-notifications";
import 'react-notifications/lib/notifications.css';


const PropertiesAdd = () => {
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const navigate = useNavigate();
  const location = useLocation()
  const id = location.state ? location.state.id : null;
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentRule, setCurrentRule] = useState('');
  const [formData, setFormData] = useState({
    id: 0 || null,
    title: '',
    image: '',
    is_panorama: null,
    price: null,
    status: null,
    address: '',
    facility: '',
    description: '',
    beds: null,
    bathroom: null,
    sqrft: null,
    rate: null,
    ptype: null,
    latitude: '',
    longtitude: '',
    mobile: '',
    city: '',
    listing_date: '',
    add_user_id: 1,
    rules: [],
    country_id: null,  // New country field
    is_sell: 0,
    adults: null,
    children: null,
    infants: null,
    pets: null,
  });
// console.log(formData)
  useEffect(() => {
    if (id) {
      getProperty();
    }
  }, [id]);

  const getProperty = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/properties/${id}`)
      const Property = response.data;
      // console.log("Property Data: ", Property);
      const rate = Math.min(Math.max(Property.rate, 0), 5);
      setFormData({
        id,
        title: Property.title,
        image: Property.image,
        is_panorama: Property.is_panorama,
        price: Property.price,
        status: Property.status,
        address: Property.address,
        facility: Property.facility,
        description: Property.description,
        beds: Property.beds,
        bathroom: Property.bathroom,
        sqrft: Property.sqrft,
        rate: Property.rate,
        ptype: Property.ptype,
        latitude: Property.latitude,
        longtitude: Property.longtitude,
        mobile: Property.mobile,
        city: Property.city,
        listing_date: new Date(Property.listing_date).toISOString().split("T")[0],
        add_user_id: Property.add_user_id,
        rules: (() => {
          try {
            return JSON.parse(Property.rules);
          } catch (error) {
            return Property.rules ? [Property.rules] : [];
          }
        })(),
        country_id: Property.country_id,
        
        is_sell: Property.is_sell,
        adults: Property.adults,
        children: Property.children,
        infants: Property.infants,
        pets: Property.pets,
      })
    } catch (error) {
      console.error("Error fetching Property:", error);
    }
  }


  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && currentRule.trim() !== '') {
      e.preventDefault();
      setFormData((prevData) => ({
        ...prevData,
        rules: [...prevData.rules, currentRule.trim()],
      }));
      setCurrentRule('');
    }
  };

  // console.log('Rules before submission:', formData.rules);

  const handleRemoveRule = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      rules: prevData.rules.filter((_, i) => i !== index),
    }));
  };

  useEffect(() => {
    // Fetch countries
    api.get('/countries/all')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Error fetching countries:', error));

    // Fetch categories
    api.get('/categories/all')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));

    api.get('/facilities/all')
      .then(response => setFacilities(response.data))
      .catch(error => console.error('Error fetching facilities:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      id: prevData.id,
    }));
  };

  const handleImageUploadSuccess = (imageUrl) => {
    setFormData((prevData) => ({
      ...prevData,
      image: imageUrl,
    }));

  };
  // console.log(formData, "from formdata");
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check for required fields like image
    if (!formData.image) {
      NotificationManager.removeAll();
      NotificationManager.error('Please upload an image', 'Error');
      setError('Please upload an image');
      return;
    }
  
    // Prepare the data to submit
    const formDataToSubmit = {
      ...formData,
      rules: JSON.stringify(formData.rules),
    };
  
    const successMessage = id ? 'Property Updated Successfully!' : 'Property Added Successfully!';
  
    try {
      const response = await api.post('/properties/upsert', formDataToSubmit, { withCredentials: true });
      console.log(response)
      // Check for success response
      if (response?.status === 200 || response?.status === 201) {
        NotificationManager.removeAll();
        NotificationManager.success(successMessage);
  
        // Delay navigation slightly to ensure the toast is shown
        setTimeout(() => {
          navigate('/property-list');
        }, 2000);
      } else {
        // Handle unexpected response
        NotificationManager.removeAll();
        NotificationManager.error(response?.data?.message || 'An unexpected error occurred', 'Error');
      }
    } catch (error) {
      console.error('Error:', error);
  
      // Handle different error scenarios
      NotificationManager.removeAll();
      if (error?.response?.data?.message) {
        NotificationManager.error(error.response.data.message, 'Error');
      } else {
        NotificationManager.error('An error occurred. Please try again later.', 'Error');
      }
    }
  };
  

  return (
    <div>
      <div className="flex bg-[#f7fbff]">
        {/* Sidebar */}

        <main className="flex-grow">
          <Header />
          <div className="container mx-auto">
            <div className="flex items-center mt-6  mb-4">
              <Link onClick={() => { navigate(-1) }} className="cursor-pointer ml-6">
                <ArrowBackIosNewIcon />
              </Link>
              <h2
                className="text-lg font-semibold ml-4 "
                style={{
                  color: "#000000",
                  fontSize: "24px",
                  fontFamily: "Montserrat",
                }}
              >
                Property Management
              </h2>
            </div>

            {/* Form Container */}
            <div
              className="h-full px-6 max-w-5xl"
              style={{ paddingTop: "24px" }}
            >
              <div
                className="bg-white h-[67vh] w-full rounded-xl border border-[#EAE5FF] py-4 px-6"
                style={{
                  maxHeight: "calc(100vh - 100px)",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                }}
              >
                <form className="mt-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-4 mt-6">
                    {/* property title */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="title"
                        className="text-sm font-medium text-start text-[12px] font-[Montserrat]"
                      >
                        {" "}
                        Property Title{" "}
                      </label>
                      <input
                        id="title"
                        name="title"
                        type="text"
                        value={formData.title}
                        required
                        className="border rounded-lg p-3 mt-1 w-full h-14"
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #EAEAFF",
                        }}
                        onChange={handleChange}
                        placeholder="Enter property title"
                      />
                    </div>

                    {/* property image*/}
                    <div className="flex flex-col">
                      <label
                        htmlFor="image"
                        className="text-sm font-medium text-start text-[12px] font-[Montserrat]"
                      >
                        Property Image
                      </label>
                      <ImageUploader
                        onUploadSuccess={handleImageUploadSuccess}
                      />
                      {error && (<p className="text-red-500 text-sm mt-2">{error}</p>)}
                    </div>

                    {/* property panorama */}
                    <div className="flex flex-col">
                      <label htmlFor="is_panorama" className="text-sm font-medium text-start text-[12px] font-[Montserrat]">
                        Is Panorama
                      </label>
                      <select name="is_panorama" value={formData.is_panorama} onChange={handleChange} id="is_panorama" className="mt-1 block w-full   bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"  >
                        <option value="" disabled selected>Select Panorama</option>
                        <option value={1}>Yes</option>
                        <option value={0}>No</option>
                      </select>
                    </div>

                    {/* property price per night */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="cupponCode"
                        className="text-sm font-medium text-start text-[12px] font-[Montserrat]"
                      >
                        {" "}
                        Property Price Per Night{" "}
                      </label>
                      <input
                        id="PropertyPricePerNight"
                        value={formData.price}
                        name="price"
                        type="number"
                        required
                        className="border rounded-lg p-3 mt-1 w-full h-14"
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #EAEAFF",
                        }}
                        onChange={handleChange}
                        placeholder="Enter  Price Per Night"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-4 mt-6">
                    {/* adults */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="adults"
                        className="text-sm font-medium text-start text-[12px] font-[Montserrat]"
                      >
                        {" "}
                        Adults{" "}
                      </label>
                      <input
                        id="adults"
                        name="adults"
                        type="number"
                        required
                        value={formData.adults}
                        onChange={handleChange}
                        className="border rounded-lg p-3 mt-1 w-full h-14"
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #EAEAFF",
                        }}
                        placeholder="Enter Adults"
                      />
                    </div>
                    {/* children */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="children"
                        className="text-sm font-medium text-start text-[12px] font-[Montserrat]"
                      >
                        {" "}
                        Children{" "}
                      </label>
                      <input id="children" name="children" type="number" required value={formData.children} onChange={handleChange} className="border rounded-lg p-3 mt-1 w-full h-14" style={{ borderRadius: "8px", border: "1px solid #EAEAFF", }} placeholder="Enter Children" />
                    </div>
                    {/* infants */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="infants"
                        className="text-sm font-medium text-start text-[12px] font-[Montserrat]"
                      >
                        {" "}
                        Infants{" "}
                      </label>
                      <input id="infants" name="infants" type="number" required value={formData.infants} onChange={handleChange} className="border rounded-lg p-3 mt-1 w-full h-14" style={{ borderRadius: "8px", border: "1px solid #EAEAFF", }} placeholder="Enter Infants" />
                    </div>
                    {/* pets */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="pets"
                        className="text-sm font-medium text-start text-[12px] font-[Montserrat]"
                      >
                        {" "}
                        Pets{" "}
                      </label>
                      <input id="pets" name="pets" type="number" required value={formData.pets} onChange={handleChange} className="border rounded-lg p-3 mt-1 w-full h-14" style={{ borderRadius: "8px", border: "1px solid #EAEAFF", }} placeholder="Enter Pets" />
                    </div>
                  </div>

                  <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2  mt-6">
                    {/*property country*/}
                    <div className="flex flex-col">
                      <label
                        htmlFor="country_id"
                        className="text-sm font-medium text-start text-[12px] font-[Montserrat]"
                      >
                        {" "}
                        Property Country ?
                      </label>
                      <select
                        name="country_id"
                        value={formData.country_id}
                        onChange={handleChange}
                        id="country_id"
                        className="mt-1 block w-full   bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value={0} disabled selected>
                          Select Country
                        </option>
                        {countries &&
                          countries.map((item) => {
                            return (
                              <option key={item.id} value={item.id}>{item.title}</option>
                            );
                          })}
                      </select>
                    </div>

                    {/* propert status */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="propertySellOrRent"
                        className="text-sm font-medium text-start text-[12px] font-[Montserrat]"
                      >
                        {" "}
                        property Status
                      </label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        id="propertySellOrRent"
                        className="mt-1 block w-full   bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="" disabled selected>
                          Select Staus
                        </option>
                        <option value={1}>Publish</option>
                        <option value={0}>Unpublish</option>
                      </select>
                    </div>

                    
                  </div>

                  <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2  mt-6">
                    {/* Property address */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="address"
                        className="text-sm font-medium text-start text-[12px] font-[Montserrat]"
                      >
                        Property Address
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        value={formData.address}
                        required
                        className="border rounded-lg p-3 mt-1 w-full h-14"
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #EAEAFF",
                        }}

                        onChange={handleChange}
                        placeholder="Enter Property Address "
                      />
                    </div>

                    {/* Select Property Facility */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="facility"
                        className="text-sm font-medium text-start text-[12px] font-[Montserrat]"
                      >
                        Select Property Facility
                      </label>

                      <Select
                        isMulti
                        name="facility"
                        value={facilities.filter((facility) =>
                          formData.facility.split(",").includes(facility.id.toString())
                        ).map(facility => ({ value: facility.id, label: facility.title }))}
                        options={facilities.map((facility) => ({
                          value: facility.id,
                          label: facility.title,
                        }))}

                        // Update formData when selection changes
                        onChange={(selectedOptions) => {
                          const selectedIds = selectedOptions.map((option) => option.value);
                          setFormData((prevData) => ({
                            ...prevData,
                            facility: selectedIds.join(","), // Store selected IDs as comma-separated string
                          }));
                        }}

                        className="mt-1 block w-full text-sm  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        classNamePrefix="select"
                        placeholder="Select Facilities"
                        styles={{ maxHeight: "40px" }}
                      />
                    </div>



                  </div>

                  <div className="grid gap-6 w-full sm:grid-cols-1 md:grid-cols-3 mt-6">
                    {/* Property description */}


                    <div className="md:col-span-3 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                      {/* Total Beds */}
                      <div>
                        <label
                          htmlFor="beds"
                          className="text-sm font-medium  float-left text-[12px] font-[Montserrat]"
                        >
                          Total Beds
                        </label>
                        <input
                          type="number"
                          id="beds"
                          name="beds"
                          value={formData.beds}
                          className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter Beds Count"
                          onChange={handleChange}
                        />
                      </div>

                      {/* Total bathrooms */}
                      <div>
                        <label
                          htmlFor="bathroom"
                          className="text-sm font-medium float-left text-[12px] font-[Montserrat]"
                        >
                          Total Bathroom
                        </label>
                        <input
                          type="number"
                          id="bathroom"
                          name="bathroom"
                          value={formData.bathroom}
                          className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter Bathroom Count"
                          onChange={handleChange}
                        />
                      </div>

                      {/* Property SQFT */}
                      <div>
                        <label
                          htmlFor="sqrft"
                          className="text-sm font-medium float-left text-[12px] font-[Montserrat]"
                        >
                          Property SQRFT
                        </label>
                        <input
                          type="number"
                          id="sqrft"
                          value={formData.sqrft}
                          name="sqrft"
                          className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter Property SQFT"
                          onChange={handleChange}
                        />
                      </div>

                      {/* Property Rating */}
                      {/* <div>
                        <label
                          htmlFor="rate"
                          className="text-sm font-medium float-left text-[12px] font-[Montserrat]"
                        >
                          Property Rating
                        </label>
                        <input
                          type="number"
                          id="rate"
                          value={formData.rate}
                          name="rate"
                          className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter Property Rating"
                          onChange={handleChange}
                        />
                      </div> */}

                      <div>
                        <label
                          htmlFor="rate"
                          className="text-sm font-medium float-left text-[12px] font-[Montserrat]"
                        >
                          Property Rating
                        </label>
                        <input
                          type="number"
                          id="rate"
                          value={formData.rate || ""} // Ensure the field is not null
                          name="rate"
                          className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter Property Rating"
                          onChange={(e) => {
                            const value = Math.min(Number(e.target.value), 5); // Limit to 5
                            setFormData((prevData) => ({
                              ...prevData,
                              rate: value,
                            }));
                          }}
                        />
                        {formData.rate > 5 && (
                          <span className="text-red-500 text-xs">
                            Rating cannot be more than 5.
                          </span>
                        )}
                      </div>

                      {/* Property Type */}
                      <div className="sm:col-span-2 md:col-span-1">
                        <label
                          htmlFor="ptype"
                          className="text-sm font-medium float-left text-[12px] font-[Montserrat]"
                        >
                          Select Property Type
                        </label>
                        <select
                          name="ptype"
                          id="ptype"
                          value={formData.ptype}
                          className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                          onChange={handleChange}
                        >
                          <option value="">Select Property Type</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Latitude */}
                      <div>
                        <label
                          htmlFor="latitude"
                          className="text-sm font-medium float-left text-[12px] font-[Montserrat]"
                        >
                          Latitude
                        </label>
                        <input
                          type="text"
                          id="latitude"
                          value={formData.latitude}
                          name="latitude"
                          className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter Latitude"
                          onChange={handleChange}
                        />
                      </div>

                      {/* Longitude */}
                      <div>
                        <label
                          htmlFor="longitude"
                          className="text-sm font-medium float-left te  xt-[12px] font-[Montserrat]"
                        >
                          Longitude
                        </label>
                        <input
                          type="text"
                          id="longitude"
                          value={formData.longtitude}
                          name="longtitude"
                          className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter Longitude"
                          onChange={handleChange}
                        />
                      </div>

                      {/* Mobile Number */}
                      <div>
                        <label
                          htmlFor="mobile"
                          className="text-sm font-medium float-left text-[12px] font-[Montserrat]"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter Mobile Number"
                          onChange={handleChange}
                        />
                      </div>

                      {/* City, Country */}
                      <div>
                        <label
                          htmlFor="city"
                          className="text-sm font-medium float-left text-[12px] font-[Montserrat]"
                        >
                          City, Country
                        </label>
                        <input
                          type="text"
                          id="city"
                          value={formData.city}
                          name="city"
                          className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Like New York, US"
                          onChange={handleChange}
                        />
                      </div>

                      {/* listing date */}
                      <div>
                        <label
                          htmlFor="listing_date"
                          className="text-sm font-medium float-left text-[12px] font-[Montserrat]"
                        >
                          Listing Date
                        </label>
                        <input
                          type="date"
                          id="listing_date"
                          value={formData.listing_date}
                          name="listing_date"
                          className="border rounded-lg p-3 mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Date"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="md:col-span-1">
                        <label
                          htmlFor="description"
                          className="text-sm font-medium float-left text-[12px] font-[Montserrat]"
                        >
                          Property Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          className="border rounded-lg p-3 mt-1 w-full resize-none h-64 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter Property Description"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="md:col-span-1 mb-7">
                        <label
                          htmlFor="rules"
                          className="text-sm font-medium float-left text-[12px] font-[Montserrat]"
                        >
                          Property Rules
                        </label>
                        <div
                          id="rules"
                          className="border rounded-lg p-3 mt-1 w-full h-64 overflow-auto focus:ring-blue-500 focus:border-blue-500 flex flex-col gap-2"
                        >
                          {/* Render existing rules */}
                          {formData.rules.map((rule, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
                            >
                              <span className="text-sm font-medium">{rule}</span>
                              <button
                                type="button"
                                className="text-red-500 text-lg"
                                onClick={() => handleRemoveRule(index)}
                              >
                                <RxCrossCircled />
                              </button>
                            </div>
                          ))}
                          {/* Input area for new rule */}
                          <input
                            type="text"
                            placeholder="Write a rule and press Enter"
                            value={currentRule}
                            onChange={(e) => setCurrentRule(e.target.value)} // Update currentRule state
                            className="focus:outline-none text-sm border-t border-gray-300 pt-2 w-full"
                            onKeyDown={handleKeyPress}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-start mt-6 gap-3">
                    <button type="submit" className={`py-2 mt-6 float-start ${id ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-lg w-[150px] h-12 font-[Montserrat] font-bold`} style={{ borderRadius: '8px' }}   >
                      {id ? 'Update Property' : 'Add  Property'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <NotificationContainer />
      </div>
    </div>
  );
};

export default PropertiesAdd;
