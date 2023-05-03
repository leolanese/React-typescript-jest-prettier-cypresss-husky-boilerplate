import React from 'react';

import style from './Link1.scss';

import { IProps } from '../../interfaces/interfaces';

export const initialComponentProps = {
  bar: 'Ipsum',
  foo: 'Lorem',
};

export const dummyFunc = (a: number, b: number): number => a + b;

export const Hello = (props: IProps): JSX.Element => (
  <div className={style.sample}>
    Message prop from {props.foo} and {props.bar}!
  </div>
);
