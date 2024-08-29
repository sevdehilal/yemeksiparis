import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function BudgetDisplay({ budget }) {
  return <Title style = {{marginBottom: '40px' , color: 'blue'}} level={3}>Kalan Bütçe: {budget} TL</Title>;
}

export default BudgetDisplay;
