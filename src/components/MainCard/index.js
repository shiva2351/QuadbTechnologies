import React from 'react';

const TimeframeSelector = ({ onSelect }) => (
  <div>
    <button onClick={() => onSelect('daily')}>Daily</button>
    #similarly creating buttons weekly and Monthly
  </div>
);

export default TimeframeSelector;