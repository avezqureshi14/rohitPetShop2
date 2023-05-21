import React from 'react';
import { Card, Tag, Divider } from 'antd';
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
} from '@ant-design/icons';

const HotelCard = ({ hotel }) => {
    console.log(hotel)
  return (
    <Card
      cover={<img alt="Hotel" src="{hotel.images[0]}" />}
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
          <Divider />
          <div className="timings">
            <ClockCircleOutlined />
            <span>
              Check-in: {hotel.checkInTime} | Check-out: {hotel.checkOutTime}
            </span>
          </div>
          <div className="policies">
            <div>
              <DollarCircleOutlined />
              <span>Pricing: {hotel.pricing}</span>
            </div>
            <div>
              <CheckCircleOutlined />
              <span>Cancellation Policy: {hotel.cancellationPolicy}</span>
            </div>
            <div>
              <CloseCircleOutlined />
              <span>Pets Policy: {hotel.petsPolicy}</span>
            </div>
          </div>
          <Divider />
          <div className="social-media">
            <a href={hotel.facebook} target="_blank" rel="noopener noreferrer">
              <FacebookOutlined />
            </a>
            <a href={hotel.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramOutlined />
            </a>
            <a href={hotel.twitter} target="_blank" rel="noopener noreferrer">
              <TwitterOutlined />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HotelCard;
