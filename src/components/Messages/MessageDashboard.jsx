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
import MessageTable from './Message';

const { Sider, Content } = Layout;

const MessageDashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to='/' >
          Bikes
          </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ShopOutlined />}>
          <Link to='/bookings' >
          Bookings
          </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SolutionOutlined />}>
          <Link to='/featuredHotels' >
            Featured Bikes
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
          <Link to='/users' >
          Users
          </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<CommentOutlined />}>
          <Link to='/messages' >
            Reviews 
            </Link>
          </Menu.Item>
 
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '16px' }}>
          <MessageTable/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MessageDashboard;
