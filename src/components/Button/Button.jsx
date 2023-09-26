import React from 'react';
import PropTypes from 'prop-types';
import { BtnStyled } from './Button.styled';

export const Button = ({ onClick, children }) => {
  return (
    <BtnStyled type="button" onClick={onClick}>
      {children}
    </BtnStyled>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
