import React, { forwardRef } from 'react';

import { TextFieldProps } from './TextField.types';
import BemIt, { addClass } from '@gtechdoodler/bem-it';

import './TextField.scss';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ className, ...props }, ref) => {
  const block = new BemIt('TextField');

  return (
    <input
      className={addClass(className).after(block)}
      type="text"
      ref={ref}
      {...props}
    />
  )
});

export default TextField;