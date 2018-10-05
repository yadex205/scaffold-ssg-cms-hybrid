import React from 'react';

interface Props {
  opened?: boolean;
  onClick?: (isOpened: boolean) => void;
};

export default ({ opened = false, onClick = () => {} }: Props) => {
  let className = 'a-menu-opener';
  if (opened) {
    className += ' a-menu-opener--opened';
  }

  return (
    <div className={className}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
