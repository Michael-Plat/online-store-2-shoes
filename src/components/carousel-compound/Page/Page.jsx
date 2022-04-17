import React from 'react';

import { CarouselContext } from '../carousel-context';

import './Page.scss';

export function Page({ children }) {
  const { width } = React.useContext(CarouselContext);

  return (
    <div
      className="pageMainContainer"
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}>
      {children}
    </div>
  );
}
