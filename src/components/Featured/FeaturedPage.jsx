import React, { useEffect, useState } from "react";
import axios from "axios";
import FeaturedCard from "./FeaturedCard";
import { ShopOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

const FeaturedPage = () => {
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

  const featuredHotels = hotels.filter((hotel) => hotel.featured);

  return (
    <>
      <div className="add-new-hotel">
        <div className="head">
          <h1>
            <ShopOutlined /> Featured Products
          </h1>
        </div>
        <Link to="/addHotel">
          <Button type="primary" size="middle">
            Add New Product
          </Button>
        </Link>
      </div>
      <div className="cardsHotel">
        {featuredHotels.map((hotel) => (
          <FeaturedCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </>
  );
};

export default FeaturedPage;
