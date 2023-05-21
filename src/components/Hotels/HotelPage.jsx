import React, { useEffect, useState } from "react";
import axios from "axios";
import HotelCard from "./HotelCard";
import {
  ShopOutlined
} from '@ant-design/icons';
import { Button } from "antd";
import { Link } from "react-router-dom";
const HotelPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/hotels"); // Replace with your backend API endpoint
        setHotels(response.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  console.log(hotels);
  return (
    <>
    <div className="add-new-hotel">
      <div className="head">
        <h1 > <ShopOutlined/> List of the Hotels available</h1>
      </div>
      <Link to='/addHotel' >
      <Button type="primary" size="middle">
      Add New Product
      </Button>
      </Link>
    </div>
      <div className="cardsHotel">
       
      </div>
    </>
  );
};

export default HotelPage;
