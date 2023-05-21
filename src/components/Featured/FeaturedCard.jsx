import React from "react";
import { Card, Tag, Divider } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  DollarCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  LinkOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const FeaturedCard = ({ hotel }) => {
  console.log(hotel);
  return (
      <Card
        className="cardHotel"
        cover={
          <div className="image-container" >
        <img  className="hotel-image" alt="Hotel" src={hotel.images[0]} />
        </div>
        }
        actions={[
          <a href={hotel.website} target="_blank" rel="noopener noreferrer">
            <LinkOutlined key="website" />
          </a>,
        ]}
      >
        <div className="hotel-card">
          <div className="hotel-header">
            <h3>{hotel.name}</h3>
            {hotel.featured && <Tag color="gold">Featured</Tag>}
          </div>
          <div className="hotel-details">
            <p>{hotel.description}</p>
            <Divider />
            <div className="location">
              <EnvironmentOutlined />
              <span>
                {hotel.street}, {hotel.city}, {hotel.state}, {hotel.postalCode}
              </span>
            </div>
            <div className="contact">
              <PhoneOutlined />
              <span>{hotel.phone}</span>
            </div>
            <div className="contact">
              <MailOutlined />
              <span>{hotel.email}</span>
            </div>
          </div>
        </div>
      </Card>

  );
};

export default FeaturedCard;
