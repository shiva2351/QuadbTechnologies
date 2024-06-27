import React from 'react';
import ChartCard from '../ChartCard';

const TimeframeSelector = ({ onSelect }) => (
  <div>
    <button onClick={() => onSelect('daily')}>Daily</button>
    <ChartCard/>
  </div>
);

export default TimeframeSelector;