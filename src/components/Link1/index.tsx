import React, { useState } from 'react';

import { initialComponentProps } from '@components/Link1/Link1';
import { Hello } from '@components/Link1/Link1';

export default (): JSX.Element => {
  const [componentProps] = useState(initialComponentProps);

  return <Hello {...componentProps} />;
};
