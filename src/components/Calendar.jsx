// Calendar.jsx

import React from 'react';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';

const Calendar = ({ onChange, value, disabled, placeholder }) => {
  return (
    <DatePicker
      onChange={onChange}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
     style={{width:'100%'}}/>
  );
};

Calendar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Calendar;
