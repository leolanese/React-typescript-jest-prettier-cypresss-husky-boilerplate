import React from 'react';
import renderer from 'react-test-renderer';

import { Hello } from '@components/Link1/Link1';

describe('Hello component', () => {
  test('should render component properly', () => {
    // given
    const dummyComponentProps = {
      bar: 'test',
      foo: 'lorem',
    };

    // when
    const componentRenderer = renderer.create(<Hello {...dummyComponentProps} />);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
