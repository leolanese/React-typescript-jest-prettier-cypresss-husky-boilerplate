import React, { useState } from 'react';

import { Link3 } from '@components/Link3/Link3';

export const initialComponentProps = {
  m1: 'Link3_initial_value',
  m2: 'Link3_initial_value',
};

export default (): JSX.Element => {
  const [componentProps] = useState(initialComponentProps);

  return <Link3 {...componentProps} />;
};
