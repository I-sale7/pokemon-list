import * as React from 'react';
import "./CardComponent.css"

export function CardComponent ({ className='', children} : {className: string, children: React.ReactNode | string}) {
  return (
    <div data-testid="cardContainer" className={`card-component ${className}`}>
      {children}
    </div>
  );
}
