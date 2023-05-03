import React, { useState } from 'react';

import { initialComponentProps } from '@components/Link1/Link1';
import { Link2} from '@components/Link2/Link2';

export default (): JSX.Element => {
  const [componentProps] = useState(initialComponentProps);

  return <Link2 {...componentProps} />;
};
