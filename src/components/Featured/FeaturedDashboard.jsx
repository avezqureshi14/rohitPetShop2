import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  ShopOutlined,
  SolutionOutlined,
  UserOutlined,
  CommentOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import FeaturedPage from './FeaturedPage';

const { Sider, Content } = Layout;

const FeaturedDashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to='/' >
        Products
        </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ShopOutlined />}>
        <Link to='/bookings' >
        Orders
        </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<SolutionOutlined />}>
        <Link to='/featuredHotels' >
          Featured Products
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
        <Link to='/users' >
        Users
        </Link>
        </Menu.Item>
      </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '16px' }}>
          <FeaturedPage/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default FeaturedDashboard;
