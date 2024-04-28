import * as React from 'react';


export function Button ({text = 'button', type = 'button', role = 'button'}:{
  text: string
  type: "button" | "submit" | "reset" | undefined
  role: string
}) {
  return (
    <button type={type} role={role}>
      {text}
    </button>
  );
}
