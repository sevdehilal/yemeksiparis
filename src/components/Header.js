import React from 'react';
import { Menu, Badge, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

function Header({ onSelectCategory, cartItemCount, toggleCart }) {
  return (
    <div style={{ padding: '0 20px', backgroundColor: '#fff', borderBottom: '1px solid #e8e8e8' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Menu mode="horizontal" onClick={(e) => onSelectCategory(e.key)} style={{ flex: 1 }}>
          <Menu.Item key="fastfood">Fastfood</Menu.Item>
          <Menu.Item key="doner">Döner Çeşitleri</Menu.Item>
          <Menu.Item key="kebap">Kebap Çeşitleri</Menu.Item>
          <Menu.Item key="icecekler">İçecekler</Menu.Item>
          <Menu.Item key="corbalar">Çorbalar</Menu.Item>
          <Menu.Item key="salatalar">Salatalar</Menu.Item>
        </Menu>
        <Button
          type="text"
          icon={
            <Badge count={cartItemCount}>
              <ShoppingCartOutlined />
            </Badge>
          }
          style={{ marginLeft: 'auto' }}
          onClick={toggleCart}
        />
      </div>
    </div>
  );
}

export default Header;
