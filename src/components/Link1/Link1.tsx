import React from 'react';
import { useLocation } from 'react-router-dom';

import style from './Link1.scss';

import { IProps } from '../../interfaces/interfaces';

export const initialComponentProps = {
  bar: 'Ipsum',
  foo: 'Lorem',
};

export const Link1 = (props: IProps): JSX.Element => {
  const location = useLocation();
  const message = location.state?.message;

  console.log('function component props message from container state:', message); 

  return (
    <div className={style.sample}>
      Link1: Message prop from {props.foo} and {props.bar}! Message: {message}
    </div>
  );
};
