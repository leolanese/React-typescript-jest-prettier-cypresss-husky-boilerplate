import * as React from 'react';

import style from './Link1.scss';

export const initialComponentProps = {
  bar: 'Ipsum',
  foo: 'Lorem',
};

export const dummyFunc = (a: number, b: number): number => a + b;


interface IHelloProps {
  foo: string;
  bar: string;
}

export const Hello = (props: IHelloProps): JSX.Element => (
  <div className={style.sample}>
    Hello from {props.foo} and {props.bar}!
  </div>
);
