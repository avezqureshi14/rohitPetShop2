import React, { useEffect, useState } from "react";
import { Card, Button, Tag } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const HotelCard = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8800/api/products/${productId}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <div>
      <div className="add-new-hotel">
        <div className="head">
          <h1>Products List</h1>
        </div>
        <Link to="/addHotel">
          <Button type="primary" size="middle">
            Add New Product
          </Button>
        </Link>
      </div>
      <div className="productCards">
        {products.map((product) => (
          <Card
            key={product._id}
            hoverable
            style={{ width: 240, margin: "16px", paddingBottom: '26rem' }}
            cover={<img alt={product.name} src={product.imageUrl} />}
          >
            <Card.Meta title={product.name} description={`$${product.price}`} />
            <p className="desc">{product.description}</p>
            <div>
              <Tag style={{ cursor: 'pointer' }} color="red" onClick={() => handleDelete(product._id)}>Delete</Tag>
             
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HotelCard;
