import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './Link2.scss';
import { IProps } from '../../interfaces/interfaces';

export const Link2 = (props: IProps): JSX.Element => {
  const location = useLocation();
  const message = location.state?.message;

  console.log('function component props message from container state:', message); 

  return (
    <div className={style.sample}>
      Link2: Message prop: `{props.m1}` + `{props.m2}``. Message: `{message}`
    </div>
  );
};
