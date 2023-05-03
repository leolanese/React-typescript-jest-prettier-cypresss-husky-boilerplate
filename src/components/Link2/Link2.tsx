import React from 'react';
import { useLocation } from 'react-router-dom';

import { IProps } from '../../interfaces/interfaces';

export const Link2 = (props: IProps): JSX.Element => {
  const location = useLocation();
  const message = location.state?.message;

  console.log(message); 

  return (
    <>
      Link2: Message prop from {props.foo} and {props.bar}! Message: {message}
    </>
  );
};
