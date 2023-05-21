import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const MessageTable = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8800/messages'); // Replace with your API endpoint
      setMessages(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
  ];

  return (
    <Table
      dataSource={messages}
      columns={columns}
      loading={loading}
      rowKey="_id" // Assuming the unique identifier for each message is "_id"
    />
  );
};

export default MessageTable;
