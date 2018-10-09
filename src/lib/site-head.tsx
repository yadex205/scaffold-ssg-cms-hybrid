import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';

import 'assets/css/app.sass';

interface Props {
  children?: ReactNode;
};

export default ({ children }: Props) => (
  <Helmet>
    <title>Website</title>
    {children}
  </Helmet>
);
