import * as React from 'react';

export function CardComponent ({ className='', children} : {className: string, children: React.ReactNode}) {
  return (
    <div className={`card-component ${className}`}>
      {children}
    </div>
  );
}
