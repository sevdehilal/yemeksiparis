import React from 'react';
import { List, Button, Image, Typography } from 'antd';

const { Text } = Typography;

function Cart({ cart, removeFromCart }) {
  // Toplam tutarı hesaplama (for döngüsü ile)
  let totalAmount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalAmount += cart[i].price * cart[i].quantity;
  }

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={cart}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button onClick={() => removeFromCart(item)}>Çıkar</Button>
            ]}
          >
            <List.Item.Meta
              avatar={<Image width={64} src={item.image} alt={item.name} />}
              title={item.name}
              description={`Fiyat: ${item.price} TL | Adet: ${item.quantity}`}
            />
          </List.Item>
        )}
      />
      {/* Toplam tutarı gösterme */}
      <div style={styles.totalContainer}>
        <Text strong style={styles.totalText}>
          Toplam Tutar: {totalAmount} TL
        </Text>
      </div>
    </>
  );
}

// Stil nesneleri
const styles = {
  totalContainer: {
    textAlign: 'right',
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f0f2f5', // Arka plan rengi
    borderRadius: '8px', // Köşeleri yuvarlama
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Hafif gölge efekti
  },
  totalText: {
    fontSize: '24px', // Yazı boyutu
    color: '#ff4d4f', // Kırmızı renk
  },
};

export default Cart;
