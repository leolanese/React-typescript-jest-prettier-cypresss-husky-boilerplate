import React, { useState } from 'react';

import { initialComponentProps } from '@components/Link1/Link1';
import { Link3 } from '@components/Link3/Link3';

export default (): JSX.Element => {
  const [componentProps] = useState(initialComponentProps);

  return <Link3 {...componentProps} />;
};
