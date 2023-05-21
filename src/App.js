import "./App.css";
import HotelForm from "./components/Hotels/Create";
import HotelDashboard from "./components/Hotels/HotelDashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateHotelForm from "./components/Hotels/Create";
import FeaturedDashboard from "./components/Featured/FeaturedDashboard";
import UpdateHotelForm from "./components/Hotels/Update";
import BookingList from "./components/Booking/Bookings";
import BookingDashboard from "./components/Booking/BookingDashboard";
import UserDashboard from "./components/Users/UserDashboard";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HotelDashboard/>} />
        <Route path="/featuredHotels" element={<FeaturedDashboard/>} />
        <Route path="/addHotel" element={<CreateHotelForm/>} />
        <Route path="/update/:id" element={<UpdateHotelForm/>} />
        <Route path="/bookings" element={<BookingDashboard/>} />
        <Route path="/users" element={<UserDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
