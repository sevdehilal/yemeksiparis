import React from 'react';
import { List, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

function Cart({ cart, removeFromCart }) {
  return (
    <List
      dataSource={cart}
      renderItem={item => (
        <List.Item
          actions={[
            <CloseOutlined
              key="remove"
              onClick={() => removeFromCart(item)}
              style={{ fontSize: '16px', color: 'red' }}
            />
          ]}
        >
          {item.name} - {item.price} TL x {item.quantity}
        </List.Item>
      )}
    />
  );
}

export default Cart;
