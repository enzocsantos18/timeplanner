import React from 'react';
import timeConverter from '../../utils/timeConverter'
import { Card } from './styles';

function InfoCard({title, value}) {
  return (
    <Card>
      <h1>{title}</h1>
      <span>{timeConverter(value)}</span>
    </Card>
  );
}

export default InfoCard;