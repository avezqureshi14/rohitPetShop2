import React, { useState } from 'react';
import { Form, Input, Card,InputNumber, Button } from 'antd';
import {useNavigate } from 'react-router-dom'
const Create = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);
    // You can perform API request to submit the form data to the backend here
    fetch('http://localhost:8800/api/products', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Product created:', data);
      navigate('/')
      // Handle success or display a success message
    })
    .catch(error => {
      console.error('Failed to create product:', error);
      // Handle error or display an error message
    });

    form.resetFields();
  };

  return (
    <Card style={{margin:'3rem'}} >
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please enter the product name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: 'Please enter the product price' }]}
      >
        <InputNumber min={0} step={0.01} />
      </Form.Item>
      <Form.Item
        name="stock"
        label="Stock"
        rules={[{ required: true, message: 'Please enter the product stock' }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        name="imageUrl"
        label="Image URL"
        rules={[{ required: true, message: 'Please enter the product image URL' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please enter the product description' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
    </Card>
  );
};

export default Create;
