import React from 'react';
import { Button, Card } from 'antd';

function ProductItem({ product, addToCart }) {
  return (
    <Card
      hoverable
      style={{ width: '100%' }}
      actions={[
        <Button type="primary" onClick={() => addToCart(product)}>
          Sepete Ekle
        </Button>
      ]}
    >
      <div style={{ height: '200px', overflow: 'hidden' }}>
        <img 
          alt={product.name} 
          src={product.image} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      {/* Ürün ismiyle resim arasında boşluk eklemek için margin ekledik */}
      <Card.Meta
        title={product.name}
        description={`${product.price} TL`}
        style={{ marginTop: '16px' }}
      />
    </Card>
  );
}

export default ProductItem;
