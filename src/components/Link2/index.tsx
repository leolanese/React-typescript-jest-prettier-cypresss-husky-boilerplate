import React, { useState } from 'react';

import { Link2} from '@components/Link2/Link2';

export const initialComponentProps = {
  m1: 'Link1_initial_value',
  m2: 'Link1_initial_value',
};

export default (): JSX.Element => {
  const [componentProps] = useState(initialComponentProps);

  return <Link2 {...componentProps} />;
};
