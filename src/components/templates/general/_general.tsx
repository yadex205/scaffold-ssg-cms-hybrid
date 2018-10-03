import React, { ReactNode } from 'react';

import 'assets/css/app.sass';

interface Props {
  children: ReactNode;
};

export default ({ children }: Props) => (
  <div className="t-general">{children}</div>
);
