import React, { useState, useEffect } from 'react';
import { Form, Input, Card, InputNumber, Button } from 'antd';
import { useNavigate , useParams} from 'react-router-dom';

const UpdateHotelForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const productId = useParams()
  console.log(productId.id)
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:8800/api/products/${productId.id}`);
      const data = await response.json();
      setProduct(data);
      form.setFieldsValue(data); // Pre-fill the form fields with initial values
    } catch (error) {
      console.error('Failed to fetch product:', error);
    }
  };

  const onFinish = (values) => {
    console.log(values);
    // You can perform API request to UpdateHotelForm the product data here
    fetch(`http://localhost:8800/api/products/${productId}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product UpdateHotelFormd:', data);
        navigate('/');
        // Handle success or display a success message
      })
      .catch((error) => {
        console.error('Failed to UpdateHotelForm product:', error);
        // Handle error or display an error message
      });
  };

  return (
    <Card style={{ margin: '3rem' }}>
      <Form form={form} layout="vertical" onFinish={onFinish} initialValues={product}>
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
            Update Product
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UpdateHotelForm;
