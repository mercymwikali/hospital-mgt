// InputField.jsx

import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const InputField = ({ placeholder, onChange, value, disabled, type }) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
      type={type}
    />
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default InputField;
