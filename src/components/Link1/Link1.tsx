import React from 'react';
import { useLocation } from 'react-router-dom';

import { IProps } from '../../interfaces/interfaces';

export const initialComponentProps = {
  m1: 'Link1_initial_value',
  m2: 'Link1_initial_value',
};

export const Link1 = (props: IProps): JSX.Element => {
  const location = useLocation();
  const message = location.state?.message;

  console.log('function component props message from container state:', message); 

  return (
    <>
      Link1: Message prop: `{props.m1}` + `{props.m2}`. Message: `{message}`
    </>
  );
};
