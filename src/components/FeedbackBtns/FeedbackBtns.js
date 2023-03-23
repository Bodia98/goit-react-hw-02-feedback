import PropTypes from 'prop-types';
import React from 'react';
import { Button, ButtonsBox } from './FeedbackBtnsStyled';
export const FeedbackBtns= ({ handleClick, options }) => {
  return (
    <ButtonsBox>
      {options.map(option => (
        <Button key={option} id={option} type="button" onClick={handleClick}>
          {option}
        </Button>
      ))}
    </ButtonsBox>
  );
};

FeedbackBtns.propTypes = {
  handleClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
