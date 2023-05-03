import React from 'react';
import { useLocation } from 'react-router-dom';

import { IProps } from '../../interfaces/interfaces';

export const Link3 = (props: IProps): JSX.Element => {
  const location = useLocation();
  const message = location.state?.message;

  console.log('function component props message from container state:', message); 

  return (
    <>
      Link3: Message prop: `{props.m1}` + `{props.m2}``. Message: `{message}`
    </>
  );
};
