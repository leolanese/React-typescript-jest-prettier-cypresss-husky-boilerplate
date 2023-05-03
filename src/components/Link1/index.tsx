import React, { useState } from 'react';

import { initialComponentProps } from '@components/Link1/Link1';
import { Link1 } from '@components/Link1/Link1';

export default (): JSX.Element => {
  const [componentProps] = useState(initialComponentProps);

  return <Link1 {...componentProps} />;
};
