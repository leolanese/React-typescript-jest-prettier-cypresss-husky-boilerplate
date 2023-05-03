import React from 'react';
import renderer from 'react-test-renderer';

import { Link1 } from '@components/Link1/Link1';

describe('Link1 component', () => {
  test('should render component properly', () => {
    // given
    const dummyComponentProps = {
      bar: 'test',
      foo: 'lorem',
    };

    // when
    const componentRenderer = renderer.create(<Link1 {...dummyComponentProps} />);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
